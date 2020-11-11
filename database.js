const mysql = require("mysql"); // import mysql package to interact with the MySQL server

// define parameters for MySQL connection
parameters = {
    host: process.env.DATABASE_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD, // password for login
    database: process.env.MYSQL_DATABASE // database to use to execute queries
  };
  
  // define the connection
  connection = mysql.createConnection(parameters);
  
  // connect to mysql server
  connection.connect((error) => {
    if (error) {
      // if you get any error, display the error
      console.log(error);
    } else {
      // otherwise display that connection was successful
      console.log("Connection successful");
    }
  });

  module.exports = connection;