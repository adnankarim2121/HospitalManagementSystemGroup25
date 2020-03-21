var mysql = require('mysql');
var express = require('express');
var app = express();


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ronaldo77!",
  database: "HospitalManagementSystem"
});

con.connect(function(err) {
  if (err) throw err;

  var sql = "CREATE TABLE users (email VARCHAR(255), password VARCHAR(255), userType VARCHAR(255))";

  con.query(sql, function(err, result)
  {
  	if (err) throw err;
  	console.log("Table Created!");
  })


});

