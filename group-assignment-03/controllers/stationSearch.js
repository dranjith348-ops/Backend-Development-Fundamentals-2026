
function searchStations(db) {
  return (req, res) => {
    const cuisine = req.query.cuisine;

    // Check search input
    if (!cuisine || cuisine.trim() === "") {
      return res.status(400).json({
        error: "Please provide a cuisine to search"
      });
    }

    // Search stations by cuisine
    const sql = `
      SELECT * FROM stations
      WHERE LOWER(cuisine) LIKE LOWER(?)
    `;

    db.all(sql, [`%${cuisine.trim()}%`], (err, rows) => {
      if (err) {
        return res.status(500).json({
          error: "Failed to search stations"
        });
      }

      res.status(200).json(rows);
    });
  };
}

module.exports = searchStations;
