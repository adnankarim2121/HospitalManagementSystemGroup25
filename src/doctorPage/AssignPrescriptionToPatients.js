// Importing all necessary components required
import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';

// Import logos
import IconAppointments from '../icons/appointments.png';

// Styling the webpage attributes
const styles = StyleSheet.create({
  container: {
    height: '100%',
    minHeight: '100vh'
  },

  mainBlock: {
    backgroundColor: '#F7F8FC',
    padding: 30
  },

  columnContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 50
  },

  title: {
    fontFamily: 'Muli',
    fontSize: 16,
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#A4A6B3',
    marginLeft: 16
  },

  padding: {
    padding: 20
  }

});

// Class AssignPrescriptionToPatients
class AssignPrescriptionToPatients extends React.Component {

  // Class variable
  state = {
    selectedItem: 'Assign Prescriptions to Patients',
    appointments: [],
    date: new Date(),
    appointment:{
      name:'',
    },
    prescription: {
      description: '',
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    document.title = "Assign Prescription(s)";
    this.getAppointments();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  getAppointments = _ => {
    fetch(`http://localhost:4000/HospitalManagementSystem/getAppointmentsForDoctors?doctorName=${localStorage.getItem("usernameForDoctor")}`)
      .then(response => response.json())
      .then(response => this.setState({ appointments: response.data }))
      .catch(err => console.error(err))
  }

  onChange = date => this.setState({ date })
  resize = () => this.forceUpdate();

  // Display results from database on webpage.
  renderAppointment = ({ doctorName, setBy, appointments }) =>
    <option value={appointments.replace(doctorName, `${setBy}`)}>{appointments.replace(doctorName, " ")} patient {setBy}</option>;
  
  /*
  Function: assignPrescription
  Arguments: None
  Purpose: Add prescription for patient given by doctor in database. 
  */
  assignPrescription = _ => {
    const {appointment, prescription } = this.state;

    if (appointment.name === '' || prescription.description === '') {
      alert("Please choose an appointment and assign a prescription to them.");
    }
    else {
      var stringParsed = appointment.name.split("with")[0];
      var updatedAppointment = stringParsed + "with " + localStorage.getItem("usernameForDoctor");
      var response = window.confirm(`Are you sure you want to assign a prescription for ${appointment.name}?`);
      if (response == true) {
        fetch(`http://localhost:4000/HospitalManagementSystem/assignPrescription?prescription=${prescription.description}&appointments=${updatedAppointment}`)
          .then((response) => { return response.json() })
          .catch(err => console.error(err));
        alert('Prescription assigned successfully!');
        window.location.href = 'http://localhost:3000/AssignPrescriptionToPatients';
      }
    }
  }

  // Render components for the webpage. HTML tags.
  render() {
    const { selectedItem, appointments, prescription, appointment } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
                  <div className={css(styles.padding)}></div>
                  <div>
                    Choose Appointment &nbsp;
                    <select id="Choose Appointment"
                      onChange={e => this.setState({ appointment: { ...appointment, name: e.target.value } })}>
                      <option value="" selected disabled hidden>Choose Appointment </option>
                      {appointments.map(this.renderAppointment)}
                    </select>
                </div>
                <br/>
                    <div>
                      <label for="reasonForVisit">Assign Prescription(s) &nbsp;</label>
                      <textarea
                        type="text"
                        placeholder="Prescription(s)"
                        value={prescription.description}
                        onChange={e => this.setState({ prescription: { ...prescription, description: e.target.value } })}
                        name="prescription" required />
                    </div>
                  <div className={css(styles.padding)}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
                    <button onClick={this.assignPrescription} type="submit">Assign Prescription</button>
                  </div>
        </Column>
      </Row>
    );
  }
}

// Exporting component so other files can use component
export default AssignPrescriptionToPatients
