
const sqlite3 = require("sqlite3").verbose();

// Create or open the database
const db = new sqlite3.Database("./database/kitchen.db", (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("KitchenKeys database connected successfully");
  }
});

// Create stations table
db.run(`
  CREATE TABLE IF NOT EXISTS stations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    cuisine TEXT NOT NULL
  )
`);

module.exports = db;
// Insert sample station data
const stations = [
    ["Italian Kitchen", "Italian"],
    ["Spicy Indian Hub", "Indian"],
    ["Chinese Food Corner", "Chinese"],
    ["Mexican Grill", "Mexican"],
    ["Pizza Palace", "Italian"]
];


stations.forEach((station) => {
    db.run(
        `INSERT INTO stations (name, cuisine)
         SELECT ?, ?
         WHERE NOT EXISTS (
             SELECT 1 FROM stations WHERE name = ? AND cuisine = ?
         )`,
        [...station, ...station],
        (err) => {
            if (err) {
                console.log("Insert error:", err.message);
            }
        }
    );
});
