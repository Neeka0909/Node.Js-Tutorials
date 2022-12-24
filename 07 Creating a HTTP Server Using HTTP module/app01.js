// Create webserver with Nodejs

const http = require('http'); // Import http module
const server = http.createServer((req, res) => { // Create server
    res.write('Hello World'); // Write response
    res.end(); // End response (send response)
});

server.listen(3000, () => {
    console.log("Server Started on 3000");
}); // Listen on port 3000