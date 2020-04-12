/*
Importing all necessary components required
*/
import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import { TitleComponent } from './TitleComponent';
import '../App.css';
import IconSchedule from '../icons/schedule.png'

/*
Styling the webpage attributes.
*/
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

/*
Class PatietSetAppointment
*/
class PatientSetAppointment extends React.Component {

  /*
  Class Variable
  */
  state = {
    selectedItem: 'Set Appointments',
    doctors: [],
    date: new Date(),
    reasonForVisit: {
      reasonForVisit: ''
    },
    doctorName: {
      name: '',
    }
  };

  /*
  componentDidMount loads variables/functions on startup
  */
  componentDidMount() {
    window.addEventListener('resize', this.resize);
    document.title = "Set Appointments";
    this.getDoctors();
  }

  /*
  componentWillUnmount is the last function to be called immediately before the component is removed from the DOM
  */
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  /*
  Function: getDoctors
  Arguments: None
  Purpose: Retrieve doctors available to book appointment in database. 
  */
  getDoctors = _ => {
    fetch(`http://localhost:4000/HospitalManagementSystem/getDoctors`)
      .then(response => response.json())
      .then(response => this.setState({ doctors: response.data }))
      .catch(err => console.error(err))
  }

  /*
  Function: addAppointment
  Arguments: None
  Purpose: Add apointment for patient with scheduled doctor in database. 
  */
  addAppointment = _ => {
    const { date, doctorName, reasonForVisit } = this.state;

    if (doctorName.name === '' || reasonForVisit.reasonForVisit === '') {
      alert("Please choose a doctor and/or provide a reason for your visit.");
    }
    else {
      var updatedAppointment = "Appointment on " + date + " with " + doctorName.name;
      var response = window.confirm(`Are you sure you want to set an ${updatedAppointment}?`);
      if (response == true) {
        fetch(`http://localhost:4000/HospitalManagementSystem/setAppointment?username=${localStorage.getItem("username")}&reasonForVisit=${reasonForVisit.reasonForVisit}&appointments=${updatedAppointment}&doctorName=${doctorName.name}`)
          .then((response) => { return response.json() })
          .catch(err => console.error(err));
        alert('Appointment successfully made!');
        window.location.href = 'http://localhost:3000/PatientSetAppointment';
      }
    }
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
  renderDoctors = ({ email, userType }) =>
    <option value={email}>{email}</option>;

  /*
  Render components for the webpage. HTML tags.
  */
  render() {
    const { selectedItem, doctors, doctorName, reasonForVisit } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
          <div className={css(styles.contentContainer)}>
            <span>
              <Column className={css(styles.contentContainer)}>
                <div className={css(styles.title)}>{"Schedule your appointment"}</div>

                <div className={css(styles.title)}>

                  <div className={css(styles.padding)}>
                    <div className={"imgcontainer"} >
                      <img src={IconSchedule} alt="Avatar" width='100' height='100' />
                    </div>
                  </div>

                  <div className={css(styles.padding)}>
                    <div>
                      {"Appointment at "}
                      <DateTimePicker
                        required='true'
                        onChange={this.onChange}
                        value={this.state.date}
                      />

                      {" With Doctor: "}

                      <select id="doctors"
                        onChange={e => this.setState({ doctorName: { ...doctorName, name: e.target.value } })}>
                        <option value="" selected disabled hidden>Choose Doctor</option>
                        {doctors.map(this.renderDoctors)}
                      </select>
                    </div>
                  </div>

                  <div className={css(styles.padding)}>
                    <div>
                      <label for="reasonForVisit">Reason For Visit </label>
                      <textarea
                        type="text"
                        placeholder="Reason for Visit, Notes, etc."
                        value={reasonForVisit.reasonForVisit}
                        onChange={e => this.setState({ reasonForVisit: { ...reasonForVisit, reasonForVisit: e.target.value } })}
                        name="reasonForVisit" required />
                    </div>
                  </div>

                  <div className={css(styles.padding)}>
                    <button onClick={this.addAppointment} type="submit">Set Appointment</button>
                  </div>
                </div>
              </Column>
            </span>
          </div>
        </Column>
      </Row>
    );
  }
}

/*
Exporting component so other files can use component.
*/
export default PatientSetAppointment