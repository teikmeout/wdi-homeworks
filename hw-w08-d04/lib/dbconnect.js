// getting pg-promise for PSQL DB connection
const pg       = require('pg-promise')({});

// setting up pg-promise config to use my psql server
const pgConfig = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD
};

// declaring db as an instance of pg config with that setting
const db       = pg(pgConfig);

// exporting db
module.exports = db;
