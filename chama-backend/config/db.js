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

module.exports = { db };
