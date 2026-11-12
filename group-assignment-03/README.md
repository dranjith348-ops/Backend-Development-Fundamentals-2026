# Group Assignment 03 – KitchenKeys Cloud Kitchen

## Project Description
KitchenKeys Cloud Kitchen is a backend application developed using Node.js, Express.js and SQLite.

## Technologies Used
- Node.js
- Express.js
- SQLite
- JavaScript
- Postman

## Folder Structure
- controllers/
- database/
- routes/
- screenshots/
- app.js
- package.json

## My Contribution – Member 4: Validation and Search

My responsibility was to implement input validation and cuisine-based station search.

### Features Implemented
1. Validate missing cuisine input.
2. Validate empty cuisine input.
3. Validate whitespace-only input.
4. Search stations by cuisine.
5. Support lowercase and uppercase cuisine searches.
6. Return matching station details in JSON format.

## API Endpoint

**GET**
`http://localhost:3000/stations?cuisine=Italian`

## Test Results
The API was tested using Postman.

Successful searches:
- Italian
- Indian
- Chinese
- Mexican

Invalid searches:
- Missing cuisine
- Empty cuisine
- Whitespace-only cuisine

## How to Run the Project

```bash
npm install
npm start
```

Server URL: `http://localhost:3000`

## Screenshots
All API testing screenshots are available in the screenshots folder.

## Screenshots

All API testing screenshots are available in the `screenshots/` folder.

### Server and Database
- 01-server-running.png
- 02-database-connected.png

### Successful Cuisine Search
- 03-italian-search.png
- 06-indian-cuisine-search.png
- 10-chinese-cuisine-search.png
- 11-mexican-cuisine-search.png

### Validation Testing
- 04-missing-cuisine-validation.png
- 05-empty-cuisine-validation.png
- 15-whitespace-cuisine-validation.png

## Conclusion

My contribution successfully implements cuisine input validation and station search functionality. The API was tested using Postman with valid and invalid inputs.
