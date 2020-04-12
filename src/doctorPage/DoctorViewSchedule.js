// Importing all necessary components required
import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';

// Import logos
import IconSchedule from '../icons/schedule.png';

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

// Class DoctorViewSchedule
class DoctorViewSchedule extends React.Component {

  // Class variable
  state = {
    selectedItem: 'My Schedule',
    shifts: [],
    date: new Date(),
    doctorName: {
      name: '',
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    document.title = "My Schedule";
    this.getSchedule();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  getSchedule = _ => {
    fetch(`http://localhost:4000/HospitalManagementSystem/getShiftsForDoctor?doctorName=${localStorage.getItem("usernameForDoctor")}`)
      .then(response => response.json())
      .then(response => this.setState({ shifts: response.data }))
      .catch(err => console.error(err))
  }

  onChange = date => this.setState({ date })
  resize = () => this.forceUpdate();

  // Display results from database on webpage.
  renderDoctorSchedule = ({ name, workshift }) => <div key={name}><strong><li>{workshift}</li><br/></strong></div>;

  /**
   * function completeAppointment
   * @param { appointment } e 
   * Confirms appointment
   */
  completeAppointment(e) {
    var response = window.confirm(`Are you sure you want to confirm this appointment has been completed?`);
    if (response == true) {
      fetch(`http://localhost:4000/HospitalManagementSystem/deleteAppointment?appointment=${e.target.value}`)
        .then((response) => { return response.json() })
        .then((response) => {

        })
        .catch(err => console.error(err));

      window.location.href = 'http://localhost:3000/DoctorViewSchedule';
    }
  }

  // Render components for the webpage. HTML tags.
  render() {
    const { selectedItem, shifts } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
          <div className={css(styles.contentContainer)}>
            <span>
              <Column className={css(styles.contentContainer)}>
                <div className={css(styles.title)}>{"Your Work Schedule"}</div>

                <div className={css(styles.padding)}>
                  <div className={"imgcontainer"} >
                    <img src={IconSchedule} alt="Avatar" width='100' height='100' />
                  </div>
                </div>

                <div>
                  {shifts.map(this.renderDoctorSchedule)}
                </div>

              </Column>
            </span>
          </div>
        </Column>
      </Row>
    );
  }
}

// Exporting component so other files can use component
export default DoctorViewSchedule

