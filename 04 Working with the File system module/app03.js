const fs = require('fs');

// rename file
fs.rename('example.txt', 'example2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully Renamed");
    }
});

