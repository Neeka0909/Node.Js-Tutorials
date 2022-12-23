const fs = require('fs');
const zlib = require('zlib'); // Compressing files
const gzip = zlib.createGzip(); // Compressing files


const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('./exampleCopy.txt.gz');


// Pipe method
//readStream.pipe(writeStream);

// pipe chaning 
readStream.pipe(gzip).pipe(writeStream);

