const http = require('http');
const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

const server = http.createServer((req, res) => {
    const readStreamIndex = fs.createReadStream('./static/index.html');
    const readStreamJson = fs.createReadStream('./static/example.json');
    const readStreamImg = fs.createReadStream('./static/example.png')

    if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'Application/json' });
        readStreamJson.pipe(res);
    }

    if (req.url === '/web') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStreamIndex.pipe(res);
    }
    if (req.url === '/img') {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        readStreamImg.pipe(res);
    }

});
server.listen(3000, () => {
    console.log("Server started successfully on 3000");
});
