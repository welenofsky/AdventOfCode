const fs = require('fs');
const path = require('path');

const score = {
    first: null,
    value: 0 // The score
};

// Read puzzle data from file
const inputData = fs.createReadStream(path.join(__dirname, 'puzzledata.txt'))
    .on('data', (chunk) => {
        processScore(chunk.toString());
    })
    .on('end', () => {
        console.log(score.value);
    });


function processScore(str) {
    // Takes in a string of numbers, splits and evaluates score.
    let values = str.split('').map((ele) => parseInt(ele));
    while (values.length) {
        if (! score.first) score.first = values[0];

        let [a, b] = [values.shift(), values.length ? values[0] : score.first];

        if (a === b) score.value += a;
    }
}
