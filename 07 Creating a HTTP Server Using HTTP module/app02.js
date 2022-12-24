// Create webserver with Nodejs

const http = require('http'); // Import http module
const server = http.createServer((req, res) => { // Create server
    if (req.url === '/') {
        res.write('Hello World!!!');
        res.end();
    } else {
        res.write('Using some other domain');
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server Started on 3000");
}); // Listen on port 3000