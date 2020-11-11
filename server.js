const bodyParser = require("body-parser"); // import body-parser package which is used to parse the body's content from the request
const express = require("express");
const cors = require("cors");

// import router and start database
const router = express.Router();
const connection = require('./database');

// URI mapping to display all users
router.get("/users", (request, response) => {
    // in the callback function, use mysql connection to execute select query
    connection.query(
        `select user_id, name, email, mobile from users`,
        (errors, results) => {
        // populate the response object with the results received from mysql server.
            response.send(results);
        }
    );
});

// create an instance of express which will start the server.
application = express();
application.use(cors());
application.use(bodyParser.json()); // use body parser to specify how to convert body's content.
application.use("/", router);

// start the application on port 8080
application.listen(8080, (error) => {
  if (!error) {
    console.log("Application started succesfully");
  }
});