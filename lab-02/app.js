
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// Read JSON data sent by clients
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database(
    path.join(__dirname, "books.db"),
    (err) => {
        if (err) {
            console.error("Database connection failed:", err.message);
        } else {
            console.log("Connected to SQLite database.");
        }
    }
);

// Create books table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            price REAL NOT NULL,
            pages INTEGER NOT NULL
        )
    `);

    // Insert sample books when the database is empty
    db.get("SELECT COUNT(*) AS count FROM books", (err, row) => {
        if (err) {
            console.error(err.message);
            return;
        }

        if (row.count === 0) {
            const insert = db.prepare(
                "INSERT INTO books (title, author, price, pages) VALUES (?, ?, ?, ?)"
            );

            insert.run("Wings of Fire", "A.P.J. Abdul Kalam", 250, 180);
            insert.run("The Alchemist", "Paulo Coelho", 300, 208);
            insert.run("Atomic Habits", "James Clear", 450, 320);

            insert.finalize();
        }
    });
});

// GET: Retrieve all books
app.get("/books/", (req, res) => {
    db.all("SELECT * FROM books", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(rows);
    });
});

// GET: Retrieve one book
app.get("/books/:bookId/", (req, res) => {
    const { bookId } = req.params;

    db.get(
        "SELECT * FROM books WHERE id = ?",
        [bookId],
        (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (!row) {
                return res.status(404).json({ message: "Book not found" });
            }

            res.json(row);
        }
    );
});

// POST: Add a new book
app.post("/books/", (req, res) => {
    const { title, author, price, pages } = req.body;

    if (
        typeof title !== "string" || !title.trim() ||
        typeof author !== "string" || !author.trim() ||
        price === undefined || !Number.isFinite(Number(price)) ||
        pages === undefined || !Number.isInteger(Number(pages)) ||
        Number(price) < 0 || Number(pages) <= 0
    ) {
        return res.status(400).json({ message: "Enter valid book details" });
    }

    db.run(
        "INSERT INTO books (title, author, price, pages) VALUES (?, ?, ?, ?)",
        [title.trim(), author.trim(), Number(price), Number(pages)],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({
                message: "Book added successfully",
                bookId: this.lastID
            });
        }
    );
});

// PUT: Update a book
app.put("/books/:bookId/", (req, res) => {
    const { title, author, price, pages } = req.body;
    const { bookId } = req.params;

    if (
        typeof title !== "string" || !title.trim() ||
        typeof author !== "string" || !author.trim() ||
        price === undefined || !Number.isFinite(Number(price)) ||
        pages === undefined || !Number.isInteger(Number(pages)) ||
        Number(price) < 0 || Number(pages) <= 0
    ) {
        return res.status(400).json({ message: "Enter valid book details" });
    }

    db.run(
        `UPDATE books
         SET title = ?, author = ?, price = ?, pages = ?
         WHERE id = ?`,
        [title.trim(), author.trim(), Number(price), Number(pages), bookId],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ message: "Book not found" });
            }

            res.json({ message: "Book updated successfully" });
        }
    );
});

// DELETE: Delete a book
app.delete("/books/:bookId/", (req, res) => {
    const { bookId } = req.params;

    db.run(
        "DELETE FROM books WHERE id = ?",
        [bookId],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ message: "Book not found" });
            }

            res.json({ message: "Book deleted successfully" });
        }
    );
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
