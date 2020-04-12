/*
Importing all necessary components required
*/
import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';

/*
Styling the webpage attributes.
*/
const styles = StyleSheet.create({
  container: {
    height: '100%',
    minHeight: '100vh'
  },
  content: {
    marginTop: 54
  },
  mainBlock: {
    backgroundColor: '#F7F8FC',
    padding: 30
  }
});

/*
Class NurseViewPatients
*/
class NurseViewPatients extends React.Component {
  
  /*
  Class Variable
  */
  state = {
    selectedItem: 'My Tasks',
    appointments: [],
    date: new Date(),
    doctorName: {
      name: '',
    }
  };

  /*
  componentDidMount loads variables/functions on startup
  */
  componentDidMount() {
    window.addEventListener('resize', this.resize);
    document.title = "My Tasks";
    this.getAppointments();
  }

  /*
  componentWillUnmount is the last function to be called immediately before the component is removed from the DOM
  */
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  /*
  Function: getAppointments
  Arguments: None
  Purpose: Retrieve all appointments for currently logged in nurse in database. 
  */
  getAppointments = _ => {
    fetch(`http://localhost:4000/HospitalManagementSystem/getAppointmentsForNurses?nurseName=${localStorage.getItem("usernameForNurse")}`)
      .then(response => response.json())
      .then(response => this.setState({ appointments: response.data }))
      .catch(err => console.error(err))
  }

  /*
  When date changes from calendar, update data.
  */
  onChange = date => this.setState({ date })

  /*
  component re-renders.
  */
  resize = () => this.forceUpdate();

  /*
  Display results from database on webpage.
  */
  renderPatientsGivenByDoctor = ({ doctorName, appointments, setBy, doctorNotesForNurse, reasonForVisit }) => <div key={doctorName}> <p><li>Assigned to <strong>{appointments.replace(doctorName, "patient ")} {setBy} </strong>by <strong>Dr. {doctorName}</strong></li></p>
    <p>Patient's Reason for Visit: <strong>{reasonForVisit}</strong></p>
    <p>Notes By Doctor Regarding Appointment: <i>{doctorNotesForNurse}</i></p> <br />
  </div>;

  /*
  Function: completeAppointments
  Arguments: event
  Purpose: Sends appointment if confirmed in database. 
  */
  completeAppointment(e) {
    var response = window.confirm(`Are you sure you want to confirm this appointment has been completed?`);
    if (response == true) {
      fetch(`http://localhost:4000/HospitalManagementSystem/deleteAppointment?appointment=${e.target.value}`)
        .then((response) => { return response.json() })
        .then((response) => {
        })
        .catch(err => console.error(err));
      window.location.href = 'http://localhost:3000/NurseViewPatients';
    }
    else {
    }
  }

  /*
  Function: deleteAppointments
  Arguments: event
  Purpose: Delete appointment if confirmed by user in database. 
  */
  deleteAppointment(e) {
    var response = window.confirm(`Are you sure you want to cancel the appointment?`);
    if (response == true) {
      fetch(`http://localhost:4000/HospitalManagementSystem/deleteAppointment?appointment=${e.target.value}`)
        .then((response) => { return response.json() })
        .then((response) => {

        })
        .catch(err => console.error(err));

      window.location.href = 'http://localhost:3000/NurseViewPatients';
    }
    else {
    }
  }

  /*
  Render components for the webpage. HTML tags.
  */
  render() {
    const { selectedItem, appointments } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
          <div>
            {appointments.map(this.renderPatientsGivenByDoctor)}
          </div>
        </Column>
      </Row>
    );
  }
}

/*
Exporting component so other files can use component.
*/
export default NurseViewPatients
