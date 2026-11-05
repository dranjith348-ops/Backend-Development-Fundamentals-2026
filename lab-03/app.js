
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to read JSON request body
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database(
    path.join(__dirname, "books.db"),
    (err) => {
        if (err) {
            console.error("Database connection error:", err.message);
        } else {
            console.log("Connected to SQLite database.");
        }
    }
);

// Create books table
db.run(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        price REAL NOT NULL,
        pages INTEGER NOT NULL
    )
`, (err) => {
    if (err) {
        console.error("Table creation error:", err.message);
    } else {
        console.log("Books table is ready.");
        db.get("SELECT COUNT(*) AS count FROM books", (err, row) => {
    if (err) {
        console.error(err.message);
        return;
    }

    if (row.count === 0) {
        const books = [
            ["Wings of Fire", "A.P.J. Abdul Kalam", 250, 180],
            ["The Alchemist", "Paulo Coelho", 300, 208],
            ["Atomic Habits", "James Clear", 450, 320]
        ];

        const stmt = db.prepare(
            "INSERT INTO books (title, author, price, pages) VALUES (?, ?, ?, ?)"
        );

        books.forEach(book => stmt.run(book));

        stmt.finalize(() => {
            console.log("Sample books inserted.");
        });
    }
});
    }
});

// GET books with query parameters
app.get("/books", (req, res) => {
    const { search, minPrice, maxPrice, sortBy, order, limit, offset } = req.query;

    let sql = "SELECT * FROM books WHERE 1=1";
    const params = [];

    if (search) {
    sql += " AND (title LIKE ? OR author LIKE ?)";
    params.push(`%${search}%`, `%${search}%`);
}

    if (minPrice !== undefined) {
        if (isNaN(Number(minPrice)) || Number(minPrice) < 0) {
            return res.status(400).json({
                error: "minPrice must be a valid non-negative number"
            });
        }
        sql += " AND price >= ?";
        params.push(Number(minPrice));
    }

    if (maxPrice !== undefined) {
        if (isNaN(Number(maxPrice)) || Number(maxPrice) < 0) {
            return res.status(400).json({
                error: "maxPrice must be a valid non-negative number"
            });
        }
        sql += " AND price <= ?";
        params.push(Number(maxPrice));
    }

    const allowedSortFields = ["title", "author", "price", "pages"];
    const sortField = allowedSortFields.includes(sortBy) ? sortBy : "id";
    const sortOrder = order === "desc" ? "DESC" : "ASC";

    sql += ` ORDER BY ${sortField} ${sortOrder}`;

    const pageLimit = Number(limit) || 10;
const pageOffset = Number(offset) || 0;

sql += " LIMIT ? OFFSET ?";
params.push(pageLimit, pageOffset);
db.all(sql, params, (err, rows) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    }

    res.json(rows);
});
});
// Start the server


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

