import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('database.sqlite');
const csvFile = './savant/pitches_2026.csv'

db.exec(`
  CREATE TABLE IF NOT EXISTS pitches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    pitch_type TEXT,
    velocity REAL,
    player TEXT
  );
`);

const insertStatement = db.prepare('INSERT INTO pitches (date, pitch_type, velocity, player) VALUES (?, ?, ?, ?)');
insertStatement.run('2026-10-10', 'SL', 86.5, 'Cease, Dylan');

const singleUser = db.prepare('SELECT * FROM pitches WHERE player = ?').get('Cease, Dylan');
console.log('Query', singleUser);

const allPitches = db.prepare('SELECT * FROM pitches').all();
console.log('All pitches:', allPitches);

db.close();

// possible schema

// ---Pitches---
// id
// date (ISO string)
// pitch_type (either savant SL/FF/etc, or translated - easy to do here) (string)
// velo (out-of-hand savant) (number)
// player (string, or fk to below) (could skip, but feels easier to just do in case this grows)

// ---Players---
// id
// name

// ---Formats--
// id
// name (string)

// ---Game Date to Format---
// id
// date (ISO string)
// format (fk)
// player (fk)

// fuck this is getting ridiculous
