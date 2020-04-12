/*
Some functions will be more descriptive than others since they are not as self-explanatory.
*/
/*
Set up nodejs variables to it can access the neccesary APIs such as mysql, cors and express.
*/

const express = require('express');
const cors = require('cors');
const sql = require('mysql');
const app = express();

/*
Create connection with database.
*/
const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ronaldo77!",
  database: "HospitalManagementSystem"
})

/*
If connection failed, let user know. 
*/
connection.connect(err => {
	if(err)
	{
		return err;
	}
});

/*
Required connection to make in order to interact with database.
*/
app.use(cors());


/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/add
Adding new users into database.
*/
app.get('/HospitalManagementSystem/add', (req, res) => {
	const { email, password, userType, departmentName} = req.query;
	const query = `INSERT INTO users (email, password, userType, departmentName) SELECT ?, ?, ?, ? FROM DUAL WHERE NOT EXISTS (SELECT * FROM users WHERE email=? LIMIT 1)`;
	const data = [email, password, userType, departmentName, email];
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


/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/addNewUser
Adding new users with more information.
*/
app.get('/HospitalManagementSystem/addNewUser', (req, res) => {
	const { email, userType, password, address, healthCareNumber, gender, contactNumber} = req.query;
	const query = `INSERT INTO users (email, password, userType, address, healthCareNumber, gender, contactNumber) SELECT ?, ?, ?, ?, ?, ?, ? FROM DUAL WHERE NOT EXISTS (SELECT * FROM users WHERE email=? LIMIT 1)`;
	const data = [email, password, userType, address, healthCareNumber, gender, contactNumber, email];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/select
Information when logging in.
*/
app.get('/HospitalManagementSystem/select', (req, res) => {
	const { email, password} = req.query;
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getDoctors
*/
app.get('/HospitalManagementSystem/getDoctors', (req, res) => {
	const { email, password} = req.query;
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getDoctorsAndNurses
*/
app.get('/HospitalManagementSystem/getDoctorsAndNurses', (req, res) => {
	const { email, password} = req.query;
	const query = `SELECT * FROM users WHERE userType=? OR userType=?`;
	const data = ['Doctor', 'Nurse'];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getNurses
*/
app.get('/HospitalManagementSystem/getNurses', (req, res) => {
	const { email, password} = req.query;
	const query = `SELECT * FROM users WHERE userType=?`;
	const data = ['Nurse'];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/setAppointment
Patients setting appointments that are stored in database.
*/
app.get('/HospitalManagementSystem/setAppointment', (req, res) => {
	const { username, appointments, doctorName, reasonForVisit} = req.query;

	//Handles duplicates
	const query = `INSERT INTO appointments (setBy, appointments, reasonForVisit, doctorName) SELECT ?, ?, ?, ? FROM DUAL WHERE NOT EXISTS (SELECT * FROM appointments WHERE appointments=?) LIMIT 1`;


	const data = [username, appointments, reasonForVisit, doctorName, appointments];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/setShift
Admin setting shifts for doctors and nurses.
*/
app.get('/HospitalManagementSystem/setShift', (req, res) => {
	const { username, shift} = req.query;

	//Handles duplicates
	const query = `INSERT INTO schedule (name, workshift) SELECT ?, ? FROM DUAL WHERE NOT EXISTS (SELECT * FROM schedule WHERE workshift=?) LIMIT 1`;


	const data = [username, shift, shift];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getAppointment
Patients viewing their appointments.
*/
app.get('/HospitalManagementSystem/getAppointment', (req, res) => {
	const { username} = req.query;

	const query = `SELECT * FROM appointments WHERE setBy=?`;

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


/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getShiftsForNurse
*/
app.get('/HospitalManagementSystem/getShiftsForNurse', (req, res) => {
	const { nurseName} = req.query;

	const query = `SELECT * FROM schedule WHERE name=?`;

	const data = [nurseName];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getShiftsForDoctor
*/
app.get('/HospitalManagementSystem/getShiftsForDoctor', (req, res) => {
	const { doctorName} = req.query;

	const query = `SELECT * FROM schedule WHERE name=?`;

	const data = [doctorName];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/assignNurse
When doctor assigns a nurse to an appointment, this function runs. 
*/
app.get('/HospitalManagementSystem/assignNurse', (req, res) => {
	const {nurseName, appointments, notesForNurse} = req.query;

	const query = `UPDATE appointments SET nurseAssigned=?, doctorNotesForNurse=? WHERE appointments=?`;

	const data = [nurseName, notesForNurse, appointments];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getAppointmentsForDoctors
*/
app.get('/HospitalManagementSystem/getAppointmentsForDoctors', (req, res) => {
	const {doctorName} = req.query;

	const query = `SELECT * FROM appointments WHERE doctorName=?`;

	const data = [doctorName];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getAppointmentsForNurses
*/
app.get('/HospitalManagementSystem/getAppointmentsForNurses', (req, res) => {
	const {nurseName} = req.query;

	const query = `SELECT * FROM appointments WHERE nurseAssigned=?`;

	const data = [nurseName];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/getPatientsForDoctors
*/
app.get('/HospitalManagementSystem/getPatientsForDoctors', (req, res) => {
	const {doctorName} = req.query;

	const query = `SELECT * FROM appointments WHERE doctorName=?`;

	const data = [doctorName];
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem/deleteAppointment
When patients/doctors delete appointments.
*/
app.get('/HospitalManagementSystem/deleteAppointment', (req, res) => {
	const {appointment} = req.query;
	const query = `DELETE FROM appointments WHERE appointments=?;`;
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

/*
Call database with query within function. Post query results within localhost:4000/HospitalManagementSystem
Show everything in user table. Used for debugging.
*/
app.get('/HospitalManagementSystem', (req, res) => {
	const query = `SELECT * FROM users;`;
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

/*
Display message to terminal if connection to database is successfully running. 
*/
app.listen(4000, () =>{
	console.log("Database is up and running!");
})