const csv = require('csvtojson');
const csvFilePath = `${__dirname}/master-2026.csv`

// TODO: Standard spreadsheet column headers
// This matches 2026 master but not bref exports
const COLUMNS = [
    '4 seam', 
    'Sinker',
    'Slider',
    'Sweeper',
    'Change',
    'Knuckle curve',
    'Game score',
    'IP normalized',
    'K',
].join("|")

csv({
    includeColumns: new RegExp(COLUMNS)
}).fromFile(csvFilePath).then((jsonObj) => {
    console.log(jsonObj);
})
.catch((err) => {
    console.log(err)
});