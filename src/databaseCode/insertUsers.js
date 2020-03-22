var mysql = require('mysql');
var express = require('express');
var app = express();


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ronaldo77!",
  database: "HospitalManagementSystem"
});

// con.connect(function(err) {
//   if (err) throw err;

//   var sql = "INSERT INTO users (email, password, userType) VALUES ('email@email.com', 'password', 'patient')";

//   con.query(sql, function(err, result)
//   {
//     if (err) throw err;
//     console.log("Record Created");
//   })


// });

// Listen to POST requests to /users.
app.post('/Home', function(req, res) {
  // Get sent data.
  var user = req.body;
  // Do a MySQL query.
  var query = con.query('INSERT INTO users SET ?', user, function(err, result) {
    // Neat!
  });
  res.end('Success');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});