const csv = require('csvtojson');
const fs = require('fs');

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
    'Normalized',
].join("|")

csv({
    includeColumns: new RegExp(COLUMNS)
}).fromFile(csvFilePath).then((jsonObj) => {

    console.log(
        jsonObj.filter(item => item['Normalized'] === 'Full beard')
    )

    full_beard = jsonObj.filter(item => item['Normalized'] === 'Full beard')
    // construct { four_seam: n, ... }





    fs.writeFileSync('converted-2026.json', JSON.stringify(jsonObj, null, 2))
    // console.log(jsonObj);
    console.log("Saved file converted-2026.json");
})
.catch((err) => {
    console.log(err)
});

/*

Starts like:
{
    Slider: 90,
    Sinker: 96.9,
    Normalized: Stache + soul patch,
},
{
    Slider: 89.3,
    Sinker: 97.3,
    Normalized: Short beard,
}

Should end like:
{
    "Stache + soul patch": {
        Sinker: 90,
        Slider: 94.9,
    },
    "Short beard": {
        Sinker: 96.9,
        Slider: 91,
    }

}

*/

