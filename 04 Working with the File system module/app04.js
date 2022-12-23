const fs = require('fs');

// append data to file
fs.appendFile('example2.txt', ' some data being appended', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully appended data to file');
    }
});
