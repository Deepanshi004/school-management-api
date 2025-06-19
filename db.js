const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Pampam23@',
  database: 'school_management'
});

module.exports = db;