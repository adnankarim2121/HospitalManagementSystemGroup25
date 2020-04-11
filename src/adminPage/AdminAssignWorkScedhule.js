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
Import Logos
*/
import IconSchedule from '../icons/schedule.png';


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
Class AdminAssignWorkScedhule
*/
class AdminAssignWorkScedhule extends React.Component {

  /*
  Class Variable
  */
  state = {
    selectedItem: 'Assign Work Schedule',
    doctorsAndNurses: [],
    date: new Date(),
    endDate: new Date(),
    userName: {
      name: '',
    }
  };

  /*
  componentDidMount loads variables/functions on startup
  */
  componentDidMount() {
    window.addEventListener('resize', this.resize);
    document.title = "Patient";
    this.getDoctorsAndNurses();
  }

  /*
  componentWillUnmount is the last function to be called immediately before the component is removed from the DOM
  */
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  /*
  Function: getDoctorsAndNurses
  Arguments: None
  Purpose: Retrieve all doctors and nurses in database. 
  */
  getDoctorsAndNurses = _ => {
    fetch(`http://localhost:4000/HospitalManagementSystem/getDoctorsAndNurses`)
      .then(response => response.json())
      .then(response => this.setState({ doctorsAndNurses: response.data }))
      .catch(err => console.error(err))
  }

  /*
  Function: addShift
  Arguments: None
  Purpose: Set a work shift for a doctor or nurse. 
  */
  addShift = _ => {
    const { date, endDate, userName } = this.state;

    if (userName.name === '') {
      alert("Please choose a staff member.");
    }
    else {
      var updatedShift = "Shift on " + date + " to " + endDate;
      var response = window.confirm(`Are you sure you want to set a ${updatedShift} for ${userName.name}?`);
      if (response == true) {
        fetch(`http://localhost:4000/HospitalManagementSystem/setShift?username=${userName.name}&shift=${updatedShift}`)
          .then((response) => { return response.json() })
          .catch(err => console.error(err));
        alert('Shift successfully set!');
        window.location.href = 'http://localhost:3000/AdminAssignWorkScedhule';
      }
    }

  }

  /*
  When date changes from calendar, update data.
  */
  onChangeStartDate = date => this.setState({ date })
  onChangeEndDate = endDate => this.setState({ endDate })

  /*
  component re-renders.
  */
  resize = () => this.forceUpdate();

  /*
  Display results from database on webpage in specific form (in this case, a drop down).
  */
  renderDoctorsAndNurses = ({ email, userType }) =>
    <option value={email}>{userType} : {email} </option>;

  /*
  Render components for the webpage. HTML tags.
  */
  render() {
    const { selectedItem, doctorsAndNurses, userName } = this.state;
    return (
      <Row className={css(styles.container)}>
        <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />

          <div className={css(styles.contentContainer)}>
            <span>
              <Column className={css(styles.contentContainer)}>
                <div className={css(styles.title)}>{"Assign the work schedule"}</div>

                <div className={css(styles.title)}>

                  <div className={css(styles.padding)}>
                    <div className={"imgcontainer"} >
                      <img src={IconSchedule} alt="Avatar" width='100' height='100' />
                    </div>
                  </div>

                  <div className={css(styles.padding)}>
                    <div>
                      Start of Shift:
                      <DateTimePicker
                        required='true'
                        onChange={this.onChangeStartDate}
                        value={this.state.date}
                      />
                    </div>
                  </div>

                  <div className={css(styles.padding)}>
                    <div>
                      End of Shift:
                      <DateTimePicker
                        required='true'
                        onChange={this.onChangeEndDate}
                        value={this.state.endDate}
                      />
                    </div>
                  </div>

                  <div className={css(styles.padding)}>
                    <div>
                      <select id="doctorsAndNurses"
                        onChange={e => this.setState({ userName: { ...userName, name: e.target.value } })}>
                        <option value="" selected disabled hidden>Choose Staff Member</option>
                        {doctorsAndNurses.map(this.renderDoctorsAndNurses)}
                      </select>
                    </div>
                  </div>

                  <div className={css(styles.padding)}>
                    <div>
                      <button onClick={this.addShift} type="submit">Set Shift</button>
                    </div>
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
export default AdminAssignWorkScedhule