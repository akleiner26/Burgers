
//Setup MySQL Connection
var mysql = require("mysql");
//Setup Password Path
require("dotenv").config();

//MySQL Connection Data + JawsDB Data
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgersDB"
  });
}

//Make connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export Connection for ORM
module.exports = connection;