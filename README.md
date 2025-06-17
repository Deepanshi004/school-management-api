# School Management API

A simple REST API for managing school data using Node.js, Express, and MySQL2.

## Features

- Add a new school
- Get all schools
- Get a school by ID
- Update a school
- Delete a school

## Technologies Used

- Node.js
- Express.js
- MySQL2

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Deepanshi004/school-management-api.git
   cd school-management-api
2. Install dependencies:

  ```bash
     npm install
   ```

3. Set up your MySQL database and update credentials in src/db.js:

 ```js
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_user',
  password: 'your_password',
  database: 'school_management'
});
module.exports = pool.promise();
 ```
4. Create the schools table:

 ```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  address VARCHAR(255),
  phone VARCHAR(15)
);
 ```

5. Start the server:

```bash
node app.js
 ```

API Endpoints
GET /api/schools - Get all schools

GET /api/schools/:id - Get a school by ID

POST /api/schools - Add a new school

PUT /api/schools/:id - Update a school

DELETE /api/schools/:id - Delete a school

#Made by Deepanshi Gupta
