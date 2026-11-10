import csv from 'csvtojson';
import fs from 'node:fs';

const __dirname = import.meta.dirname;

// Pitch data files, streamed in order into one accumulator. Explicit list, never a
// glob (a glob would grab subset/overlapping files and double-count). Grows as
// seasons are added: frozen history + one write-once file per season. For now it's
// just the 2026 test slice, which is what's live in prod.
const PITCH_FILES = ['savant/pitches_2026.csv'];

const FORMATS_SOURCE = 'exports/averages-full.csv'; // Format column -> chart order
const DATE_FORMAT_MAP = 'exports/formats.csv'; // Date,Format -> one row per start
const OUT_NAME = 'velocities';

const abs = (p) => `${__dirname}/${p}`;
const clean = (v) => String(v ?? '').trim(); // strip CRLF / stray whitespace

// Savant uses YYYY-MM-DD; a hand-maintained sheet might export M/D/YYYY. Normalize both.
function normalizeDate(raw) {
  const s = clean(raw);
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) {
    const [, mo, d, y] = m;
    return `${y}-${mo.padStart(2, '0')}-${d.padStart(2, '0')}`;
  }
  throw new Error(
    `Unrecognized date "${raw}" in ${DATE_FORMAT_MAP} (want YYYY-MM-DD or M/D/YYYY)`
  );
}

async function main() {
  // 1. Format order from averages-full.csv, so output arrays line up with the chart
  //    labels and label images. Stop at the first blank row (the sheet has notes below).
  const formatRows = await csv({ includeColumns: /Format/ }).fromFile(
    abs(FORMATS_SOURCE)
  );
  const formats = [];
  for (const row of formatRows) {
    const f = clean(row['Format']);
    if (!f) break; // blank row => end of the real table
    formats.push(f);
  }
  const validFormats = new Set(formats);

  // 2. Date -> format map. Fail loudly on bad data so a typo surfaces now instead of
  //    silently skewing an average.
  const mapRows = await csv().fromFile(abs(DATE_FORMAT_MAP));
  const dateToFormat = new Map();
  for (const row of mapRows) {
    if (!clean(row['Date'])) continue;
    const date = normalizeDate(row['Date']);
    const format = clean(row['Format']);
    if (!validFormats.has(format)) {
      throw new Error(
        `Unknown format "${format}" for ${date}. Expected one of: ${formats.join(', ')}`
      );
    }
    if (dateToFormat.has(date)) {
      throw new Error(`Date ${date} appears twice in ${DATE_FORMAT_MAP}`);
    }
    dateToFormat.set(date, format);
  }

  // 3. Stream the pitch files and pool. The whole point: sum every pitch of a format,
  //    divide once -- NOT an average of per-start averages.
  const acc = {}; // acc[format][pitch_name] = { sum, count }
  const datesByFormat = {}; // format -> Set<date>, for start counts
  const matchedDates = new Set(); // map dates we actually saw pitches for
  const unmatchedDates = new Set(); // savant dates with no map entry
  const dateOwner = new Map(); // game_date -> file that owns it, for the overlap guard
  const pitchNames = new Set();
  let total = 0;
  let matched = 0;

  for (const file of PITCH_FILES) {
    await csv({
      includeColumns: /game_date|game_year|pitch_name|release_speed/,
    })
      .fromFile(abs(file))
      .subscribe((row) => {
        total += 1;
        const date = row.game_date;

        // Overlap guard: one game per date, so a date may repeat within a file
        // (many pitches) but must never appear in two files.
        const owner = dateOwner.get(date);
        if (owner === undefined) dateOwner.set(date, file);
        else if (owner !== file) {
          throw new Error(
            `game_date ${date} appears in both ${owner} and ${file} -- files must not overlap`
          );
        }

        const format = dateToFormat.get(date);
        if (!format) {
          unmatchedDates.add(date);
          return;
        }
        matchedDates.add(date);

        const speed =
          row.release_speed === '' ? null : Number(row.release_speed);
        if (speed === null || Number.isNaN(speed)) return; // skip pitches with no tracked velocity

        const name = row.pitch_name;
        pitchNames.add(name);
        (acc[format] ??= {})[name] ??= { sum: 0, count: 0 };
        acc[format][name].sum += speed;
        acc[format][name].count += 1;
        (datesByFormat[format] ??= new Set()).add(date);
        matched += 1;
      });
  }

  // 4. Shape the output. Pitch keys sorted alphabetically for stable diffs; arrays in
  //    `formats` order; null velocity where a format threw no pitch of that type.
  const sortedPitches = [...pitchNames].sort();
  const velocities = Object.fromEntries(
    sortedPitches.map((p) => [
      p,
      formats.map((f) => {
        const cell = acc[f]?.[p];
        return cell && cell.count > 0
          ? Number((cell.sum / cell.count).toFixed(1))
          : null;
      }),
    ])
  );
  const pitchCounts = Object.fromEntries(
    sortedPitches.map((p) => [p, formats.map((f) => acc[f]?.[p]?.count ?? 0)])
  );
  const starts = formats.map((f) => datesByFormat[f]?.size ?? 0);

  const output = `// Generated by buildData.js from the Savant pitch files. Do not edit by hand.
// Pitch-weighted velocity averages: every pitch of a format is pooled, then divided once.

export const formats = ${JSON.stringify(formats, null, 2)} as const;

export const velocities = ${JSON.stringify(velocities, null, 2)} as const;

export const pitchCounts = ${JSON.stringify(pitchCounts, null, 2)} as const;

export const starts = ${JSON.stringify(starts, null, 2)} as const;
`;
  fs.writeFileSync(abs(`${OUT_NAME}.ts`), output);

  // 5. Summary. The two "no match" lists are the ones worth reading every run.
  const mapDatesNoPitches = [...dateToFormat.keys()]
    .filter((d) => !matchedDates.has(d))
    .sort();

  console.log(`\nSaved ${OUT_NAME}.ts`);
  console.log(`Pitches matched: ${matched} / ${total}`);
  console.log('\nStarts per format:');
  formats.forEach((f, i) => console.log(`  ${f}: ${starts[i]}`));

  console.log(
    `\nSavant dates with no format in ${DATE_FORMAT_MAP} (${unmatchedDates.size}):`
  );
  [...unmatchedDates].sort().forEach((d) => console.log(`  ${d}`));

  console.log(
    `\n${DATE_FORMAT_MAP} dates with no matching Savant pitches (${mapDatesNoPitches.length}):`
  );
  mapDatesNoPitches.forEach((d) => console.log(`  ${d}`));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
