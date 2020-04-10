/*
Set up nodejs variables to it can access the neccesary APIs such as mysql and express.
*/

var mysql = require('mysql');
var express = require('express');
var router = express.Router();


/*
Create connection with database.
*/
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ronaldo77!",
  database: "HospitalManagementSystem"
});

/*
If connection failed, let user know. Else, run query. 
*/
router.get('/', function(req, res, next) {
    res.locals.connection.query('select * from users', function (error, results, fields) {
    	/*
  		If query fails, throw error. Else, return results as a JSON object. 
  		*/
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});