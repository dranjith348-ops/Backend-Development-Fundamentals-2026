# Lab 03 – REST API with SQLite Database

## Student Details

- **Name:** D. Ranjith Kumar
- **Section:** CSE Gen AI
- **Subject:** Backend Development Fundamentals
- **Lab:** 03

## 1. Aim

To develop a REST API using Node.js, Express.js and SQLite. The API supports retrieving books with searching, filtering, sorting and pagination.

## 2. Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- Visual Studio Code
- Google Chrome

## 3. Database Structure

The project uses a SQLite database named `books.db`.

The `books` table contains the following fields:

| Field | Description |
|---|---|
| id | Unique book ID |
| title | Book title |
| author | Author name |
| price | Book price |
| pages | Number of pages |

## 4. API Endpoint

**GET /books**

This endpoint retrieves books from the database.

### Query Parameters

- `search` – Search books by title or author.
- `minPrice` – Filter books by minimum price.
- `maxPrice` – Filter books by maximum price.
- `sortBy` – Sort books by title, author, price or pages.
- `order` – Choose ascending or descending order.
- `limit` – Set the number of books per page.
- `offset` – Skip a specified number of records.

## 5. Testing the API

Examples:

```text
http://localhost:3000/books
http://localhost:3000/books?search=Atomic
http://localhost:3000/books?sortBy=price&order=desc
http://localhost:3000/books?minPrice=abc
http://localhost:3000/books?limit=2&offset=0
http://localhost:3000/books?limit=2&offset=2
```

## 6. Screenshots

### Search Books
![Search Books](screenshots/search-books.png)

### Filter Books
![Filter Books](screenshots/filter-books.png)

### Sort Books by Descending Order
![Sort Descending](screenshots/sort-descending.png)

### Sort Books by Title
![Sort Title](screenshots/sort-title.png)

### Validation Error
![Validation Error](screenshots/validation-error.png)

### Pagination – First Page
![Pagination First Page](screenshots/pagination-first-page.png)

### Pagination – Second Page
![Pagination Second Page](screenshots/pagination-second-page.png)

## 7. Learning Outcomes

- Learned how to connect an Express application to SQLite.
- Understood how to retrieve records using SQL queries.
- Learned how to use query parameters.
- Practised searching, filtering and sorting database records.
- Understood pagination using LIMIT and OFFSET.
- Learned how to validate user input and return error responses.

## 8. Result

Successfully developed and tested a REST API using Express.js and SQLite with searching, filtering, sorting, validation and pagination features.

## 9. Conclusion

This lab helped me understand how backend APIs interact with databases. I learned how to retrieve and organize database records using SQL queries and Express.js routes.
