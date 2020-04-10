/*
Set up nodejs variables to it can access the neccesary APIs such as mysql and express.
*/

var mysql = require('mysql');
var express = require('express');
var app = express();

/*
Create connection with database.
*/
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ronaldo77!",
  database: "HospitalManagementSystem"
});

/*
If connection failed, let user know. Else, run query. 
*/
con.connect(function(err) {
  if (err) throw err;

  var sql = "CREATE TABLE users (email VARCHAR(255), password VARCHAR(255), userType VARCHAR(255))";

  /*
  If query fails, throw error. Else, show success message. 
  */
  con.query(sql, function(err, result)
  {
  	if (err) throw err;
  	console.log("Table Created!");
  })


});

