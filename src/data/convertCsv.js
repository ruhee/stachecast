import csv from 'csvtojson';
import fs from 'node:fs';
const __dirname = import.meta.dirname;

const csvFilePath = `${__dirname}/averages.csv`;

// Column headers in the Averages spreadsheet
const COLUMNS = [
  'Format',
  '4 seam',
  'Sinker',
  'Slider',
  'Sweeper',
  'Change',
  'Knuckle curve',
  'Game score',
  'K/9',
].join('|');

// Get this from the csv eventually
const FORMATS = [
  'Clean shaven',
  'Stache only',
  'Stache + soul patch',
  'Short beard',
  'Full beard',
  'Long beard',
  'Mountain man beard',
];

csv({
  includeColumns: new RegExp(COLUMNS),
})
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    let finalObj = {};

    FORMATS.forEach((format) => {
      let currentFormat = jsonObj.find((item) => item['Format'] === format);
      finalObj[format] = currentFormat;
    });

    // make this write to the correct dir and not rely on where it's being run
    fs.writeFileSync(
      'converted-averages.json',
      JSON.stringify(finalObj, null, 2)
    );
    console.log('Saved file converted-averages.json');
  })
  .catch((err) => {
    console.log(err);
  });
