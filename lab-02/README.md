# Lab 02: SQLite Database and CRUD Operations Using Express.js

## 1. Introduction

This laboratory experiment focuses on connecting an Express.js backend application with an SQLite database and performing CRUD (Create, Read, Update, and Delete) operations through REST API endpoints.

A book management system is developed to store and manage book information such as book ID, title, author, price, and number of pages.

## 2. Objectives

- To understand how to connect SQLite with Node.js and Express.js.
- To create and manage a database table.
- To implement CRUD operations using HTTP methods.
- To retrieve, insert, update, and delete book records.
- To test API endpoints using a web browser and PowerShell.

## 3. Technologies Used

- **Node.js:** JavaScript runtime environment.
- **Express.js:** Backend web application framework.
- **SQLite:** Lightweight relational database.
- **JavaScript:** Programming language.
- **VS Code:** Code editor.
- **Google Chrome:** API testing through browser.
- **PowerShell:** Testing POST, PUT, and DELETE requests.

## 4. Project Structure

```text
lab-02/
│
├── screenshots/
│   ├── get-all-books.png
│   ├── get-single-book.png
│   ├── post-book.png
│   ├── put-book.png
│   └── delete-book.png
│
├── app.js
├── books.db
├── package.json
└── package-lock.json
```

## 5. Database Design

The project uses an SQLite database named `books.db`.

The database contains a table called `books` with the following columns:

| Column | Data Type | Description |
|---|---|---|
| id | INTEGER | Unique book ID |
| title | TEXT | Book title |
| author | TEXT | Book author |
| price | REAL | Book price |
| pages | INTEGER | Number of pages |

The ID column is the primary key and automatically generates a unique ID for each book.

## 6. API Endpoints

The application implements the following REST API endpoints:

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Retrieve all books |
| GET | `/books/:bookId/` | Retrieve a single book |
| POST | `/books/` | Add a new book |
| PUT | `/books/:bookId/` | Update an existing book |
| DELETE | `/books/:bookId/` | Delete a book |

## 7. Implementation

### Step 1: Project Setup

Created the `lab-02` folder and initialized the Node.js project using `package.json`.

Installed the required dependencies:

```bash
npm install
```

The project uses Express.js, SQLite3, and Nodemon.

### Step 2: Database Connection

Connected the Express application to the SQLite database using the SQLite3 package.

The application automatically creates the `books` table if it does not already exist.

Three sample books are inserted when the table is empty:

1. Wings of Fire – A.P.J. Abdul Kalam
2. The Alchemist – Paulo Coelho
3. Atomic Habits – James Clear

### Step 3: Retrieve All Books (GET)

The GET method retrieves all book records from the database.

Endpoint:

```text
http://localhost:3000/books/
```

### Step 4: Retrieve a Single Book (GET)

The application retrieves a particular book using its unique ID.

Example:

```text
http://localhost:3000/books/1/
```

### Step 5: Add a New Book (POST)

The POST method inserts a new book into the database.

Example book details:

```json
{
  "title": "Python Programming",
  "author": "Ranjith Kumar",
  "price": 500,
  "pages": 350
}
```

### Step 6: Update a Book (PUT)

The PUT method updates an existing book using its ID.

The Python Programming book was updated with the following details:

- Title: Python Programming Advanced
- Author: Ranjith Kumar
- Price: 600
- Pages: 400

### Step 7: Delete a Book (DELETE)

The DELETE method removes a book from the database using its ID.

Book ID 4 was successfully deleted, and the database was checked again to confirm the deletion.

## 8. Screenshots and Outputs

### 8.1 Retrieve All Books

![Retrieve All Books](screenshots/get-all-books.png)

### 8.2 Retrieve a Single Book

![Retrieve a Single Book](screenshots/get-single-book.png)

### 8.3 Add a New Book

![Add a Book](screenshots/post-book.png)

### 8.4 Update a Book

![Update a Book](screenshots/put-book.png)

### 8.5 Delete a Book

![Delete a Book](screenshots/delete-book.png)

## 9. Learning Outcomes

Through this experiment, I learned:

- How to connect an Express.js application with an SQLite database.
- How to create database tables and insert sample records.
- How to use GET, POST, PUT, and DELETE HTTP methods.
- How to retrieve and modify database records through API endpoints.
- How to test REST APIs using a browser and PowerShell.
- How to organize a backend development project.

## 10. Result

The SQLite Database and CRUD Operations experiment was successfully completed.

All five API endpoints were implemented and tested. Books were retrieved, added, updated, and deleted successfully using Express.js and SQLite.

## 11. Conclusion

This experiment provided practical experience in backend development using Node.js, Express.js, and SQLite. I understood how REST API endpoints communicate with a database and how CRUD operations are performed in a real-world application.

The developed book management system demonstrates the basic concepts of database connectivity and backend API development.
