const db = require('./db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    console.log("✅ SQL Connected. Test result:", rows[0].solution);
  } catch (err) {
    console.error("❌ SQL connection failed:", err.message);
  }
}

testConnection();
