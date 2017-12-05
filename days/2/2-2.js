const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'puzzledata.txt'), (err, data) => {
    if (err) throw err;

    const puzzleData = data.toString('utf-8').split('\n').map((ele) => ele.split(/\s+/).map((ele) => parseInt(ele)).sort((a,b) => a - b));
    const checksum = puzzleData.reduce((p, c) => {
        let rowSum = 0;

        while (rowSum === 0 && c.length > 1) {
            // Grab largest numbers first since list is sorted
            const ele = c.pop(); 
            const upperLimit = Math.ceil(ele / 2);

            for (let i = 0; i < c.length; i++) {
                if (c[i] > upperLimit) break;

                if (ele % c[i] === 0) {
                    rowSum = ele / c[i];
                    break;
                }
            }
        }

        return p + rowSum;
    }, 0);

    console.log(checksum);
});