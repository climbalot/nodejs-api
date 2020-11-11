const mysql = require("mysql"); // import mysql package to interact with the MySQL server

// define parameters for MySQL connection
parameters = {
    host: "database",
    user: "root", // username for login
    password: "password", // password for login
    database: "nusmoney", // database to use to execute queries
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