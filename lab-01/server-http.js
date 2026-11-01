const http = require("http");

// Create HTTP server
const server = http.createServer((request, response) => {

    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    response.end("Hello");

});

// Start server
server.listen(3000, () => {
    console.log("HTTP server running at http://localhost:3000");
});