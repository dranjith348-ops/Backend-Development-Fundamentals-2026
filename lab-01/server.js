const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (request, response) => {
    response.status(200).send("Welcome to my Lab 1 server!");
});

// About route
// About route
app.get("/about", (request, response) => {
    response.status(200).json({
        name: "D. Ranjith Kumar",
        section: "CSE Gen AI"
    });
});

// Time route
app.get("/time", (request, response) => {
    response.status(200).json({
        currentDateTime: new Date()
    });
});

// Unknown route
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

// Start server
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});