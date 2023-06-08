const mysql = require("mysql2");

// Open the connection to MySQL server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

// Run create database statement
connection.query(
  `CREATE DATABASE IF NOT EXISTS testdb`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);

// Close the connection
connection.end();

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};