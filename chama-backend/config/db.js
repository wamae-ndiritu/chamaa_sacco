const mysql = require("mysql2");
require("dotenv").config();

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_name = process.env.DB_NAME;
const db_port = process.env.DB_PORT;

// Create a MySQL connection pool
const db = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_pass,
  database: db_name,
  port: db_port,
});


// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Handle connection errors
db.on('error', (err) => {
  console.error('Database error:', err);
  // You might want to handle the error, reconnect, or take other actions here
});

module.exports = { db };
