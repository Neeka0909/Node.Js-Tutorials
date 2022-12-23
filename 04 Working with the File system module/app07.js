// read folder inside
const fs = require('fs');

fs.readdir('example', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
        for (let file of files) {
            fs.unlink('./example/' + file, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully deleted files");
                }
            });
        }

    }
}); 