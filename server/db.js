const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.DB_USERNAME,
  port: process.env.DBPORT,
  password: process.env.PASSWORD,
  database: "todoapp",
});

pool
  .connect()
  .then(() => console.log("Connected to Database."))
  .catch((error) => console.log("Error:", error));

module.exports = pool;
