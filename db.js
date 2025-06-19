const mysql = require('mysql2/promise');

console.log("Connecting to MySQL with password");
const db = mysql.createPool({
  host: "localhost",
  user: 'root',
  password: 'Pampam23@', 
  database: 'school_management'
});

module.exports = db;
