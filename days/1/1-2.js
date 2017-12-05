const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'puzzledata.txt'), (err, data) => {
    if (err) throw err;
    
    const puzzleData = data.toString('utf-8').split('').map((ele) => parseInt(ele));
    const score = puzzleData.reduce((s, c, i) => {
        const distance = (puzzleData.length / 2) + i;
        const index = distance > (puzzleData.length - 1) ? distance - puzzleData.length : distance;
        return s + (c === puzzleData[index] ? c : 0); 
    }, 0);
    console.log(score);
});
