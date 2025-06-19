const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // add your password here if set
  database: 'school_management'
});

module.exports = db;
