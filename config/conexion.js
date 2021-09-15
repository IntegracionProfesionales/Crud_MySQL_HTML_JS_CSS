const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "root1234",
  database: "flujos",
});

connection.connect((err) => {
  if (err) {
    console.log("Error Connect: =( ", err);
    return err;
  } else {
    console.log("Connection SuccesFull! =D ");
  }
});

module.exports = connection;