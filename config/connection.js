//MySql Connection setup.
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3000,
  user: "root",
  password: '',
  database: 'burgers_db'
});
 
connection.connect((err)=> {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " +connection.threadId);
});
 

//Export connection for our ORM to use.
module.exports = connection;