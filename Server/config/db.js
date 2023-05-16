const mysql = require("mysql");
const knex = require("knex");

// database connection
const db = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "project1",
  },
  debug: false,
});

module.exports = db;
