//require packages
const Pool = require("pg").Pool;
const pgKey = require('./keys');

 //create PostgreSQL connection
const connection = new Pool({
  host: pgKey.dbHost,
  port: pgKey.dbPort,
  user: pgKey.dbUser,
  password: pgKey.dbPassword,
  database: pgKey.dbName
});

 module.exports = connection;