const express = require('express');
const cors = require('cors');
const sql = require('mysql');
const app = express();

const query = "SELECT * FROM users";

const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ronaldo77!",
  database: "HospitalManagementSystem"
})

connection.connect(err => {
	if(err)
	{
		return err;
	}
});

console.log(connection);

app.use(cors());

app.get('/', (req, res) => {
	res.send('hello')
});

app.get('/HospitalManagementSystem/add', (req, res) => {
	const { email, password, userType} = req.query;
	console.log(password);

	const query = `INSERT INTO users (email, password, userType) SELECT ?, ?, ? FROM DUAL WHERE NOT EXISTS (SELECT * FROM users WHERE email=? LIMIT 1)`;
	const data = [email, password, userType, email];
	connection.query(query, data, (err, results) => {
		if(err)
		{
			return res.json({
				data: 'fail'
			})
		}

		else
		{
			return res.json({
				data: results
			})
		}
	})
});

app.get('/HospitalManagementSystem/select', (req, res) => {
	const { email, password} = req.query;
	console.log(password);

	const query = `SELECT * FROM users WHERE email=? AND password=?`;
	const data = [email, password];
	connection.query(query, data, (err, results) => {
		if(err)
		{
			return res.send(err);
		}

		else
		{
			return res.json({
				data: results
			})
		}
	})
});

app.get('/HospitalManagementSystem/getDoctors', (req, res) => {
	const { email, password} = req.query;
	console.log(password);

	const query = `SELECT * FROM users WHERE userType=?`;
	const data = ['Doctor'];
	connection.query(query, data, (err, results) => {
		if(err)
		{
			return res.send(err);
		}

		else
		{
			return res.json({
				data: results
			})
		}
	})
});

app.get('/HospitalManagementSystem/setAppointment', (req, res) => {
	const { username, appointments, doctorName} = req.query;

	const query = `INSERT INTO appointments (setBy, appointments, doctorName) VALUES (?, ?, ?)`;
	// const query = `UPDATE appointments SET appointments=?, setBy=?, doctorName=? WHERE email=?`;
	const data = [username, appointments, doctorName];
	connection.query(query, data, (err, results) => {
		if(err)
		{
			return res.send(err);
		}

		else
		{
			return res.json({
				data: results
			})
		}
	})
});

app.get('/HospitalManagementSystem/getAppointment', (req, res) => {
	const { username} = req.query;

	const query = `SELECT * FROM appointments WHERE setBy=?`;

	// const query = `UPDATE appointments SET appointments=?, setBy=?, doctorName=? WHERE email=?`;
	const data = [username];
	connection.query(query, data, (err, results) => {
		if(err)
		{
			return res.send(err);
		}

		else
		{
			return res.json({
				data: results
			})
		}
	})
});

app.get('/HospitalManagementSystem/deleteAppointment', (req, res) => {
	const {appointment} = req.query;
	const query = `DELETE FROM appointments WHERE appointments=?;`;
	// const query = `UPDATE appointments SET appointments=?, setBy=?, doctorName=? WHERE email=?`;
	const data = [appointment];
	connection.query(query, data, (err, results) => {
		if(err)
		{
			return res.send(err);
		}

		else
		{
			return res.json({
				data: results
			})
		}
	})
});

app.get('/HospitalManagementSystem', (req, res) => {
	connection.query(query, (err, results) => {
		if(err)
		{
			return res.send(err);
		}

		else
		{
			return res.json({
				data: results
			})
		}
	})
});

app.listen(4000, () =>{
	console.log("listening!");
})