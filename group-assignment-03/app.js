
const express = require("express");
const app = express();

// Import database
const db = require("./database/db");

// Import station routes
const stationRoutes = require("./routes/stationRoutes");

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to KitchenKeys Cloud Kitchen API");
});

// Station routes
app.use("/stations", stationRoutes);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`KitchenKeys server running on port ${PORT}`);
});
