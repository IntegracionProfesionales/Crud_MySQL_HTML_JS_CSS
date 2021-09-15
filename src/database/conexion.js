const mysql = require('mysql');

const mysql_connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
  database: 'recursos',
});

mysql_connection.connect((err) => {
  if (err) {
    console.log("Error Connect: =( ", err);
    return err;
  } else {
    console.log("Connection SuccesFull! =D ");
  }
});

module.export = mysql_connection;