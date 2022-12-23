const fs = require('fs');

// read file
fs.readFile('example.txt', 'utf8', (err, file) => {
    if (err) {
        console.log(err);
    } else {
        console.log(file);
    }
});

