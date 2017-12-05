const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'puzzledata.txt'), (err, data) => {
    if (err) throw err;

    const puzzleData = data.toString('utf-8').split('\n').map((ele) => ele.split(/\s+/).map((ele) => parseInt(ele)));
    const checksum = puzzleData.reduce((p, c) =>  p + Math.max(...c) - Math.min(...c), 0);

    console.log(checksum);
});