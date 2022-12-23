const fs = require('fs');
const zlib = require('zlib'); // Compressing files
const gunzip = zlib.createGunzip(); // Compressing files


const readStream = fs.createReadStream('./exampleCopy.txt.gz');
const writeStream = fs.createWriteStream('uncompresse.txt');

readStream.pipe(gunzip).pipe(writeStream);