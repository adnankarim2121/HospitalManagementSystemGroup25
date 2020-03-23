var mysql = require('mysql');
var express = require('express');
var router = express.Router();


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ronaldo77!",
  database: "HospitalManagementSystem"
});

router.get('/', function(req, res, next) {
    res.locals.connection.query('select * from users', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});