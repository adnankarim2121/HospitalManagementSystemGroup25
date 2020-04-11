import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import { TitleComponent } from './TitleComponent';
import '../App.css';
import IconAppointments from '../icons/appointments.png';

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

class PatientViewAppointment extends React.Component {

    state = { selectedItem: 'View/Cancel Appointments',
    appointments: [],
    date: new Date(),
    doctorName: {
      name:'',
    } };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "View/Cancel Appointments";
        this.getAppointments();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    getAppointments = _ =>
    {
      fetch(`http://localhost:4000/HospitalManagementSystem/getAppointment?username=${localStorage.getItem("username")}`)
      .then(response => response.json())
      .then(response => this.setState({appointments: response.data}))
      .catch(err => console.error(err))
    }

    onChange = date => this.setState({ date })
    resize = () => this.forceUpdate();

    /*
    Display results from database on webpage.
    */
    renderViewAppointments = ({setBy, appointments}) => <div key={setBy}><li>{appointments} <pre><button value={appointments} onClick={e => this.deleteAppointment(e, "value")}  type="submit">
    Cancel Appointment</button></pre></li> </div> ;


  deleteAppointment(e)
  {
    var response = window.confirm(`Are you sure you want to cancel the appointment? You will be charged $ ${localStorage.getItem("fee")} ` );
    if(response == true)
    {
        fetch(`http://localhost:4000/HospitalManagementSystem/deleteAppointment?appointment=${e.target.value}`)
        .then((response) => {return response.json()})
        .then((response) => {

        })
          .catch(err => console.error(err));

        window.location.href = 'http://localhost:3000/PatientViewAppointment';
    }

    else
    {

    }

  }
    render() {
        const { selectedItem, appointments} = this.state;
        return (
          <Row className={css(styles.container)}>
            <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
            <Column flexGrow={1} className={css(styles.mainBlock)}>
              <HeaderComponent title={selectedItem} />
              <div className={css(styles.contentContainer)}>
                <span>
                  <Column className={css(styles.contentContainer)}>
                    <div className={css(styles.title)}>{"Upcoming/Past Appointments"}</div>
    
                    <div className={css(styles.padding)}>
                      <div className={"imgcontainer"} >
                        <img src={IconAppointments} alt="Avatar" width='100' height='100' />
                      </div>
                    </div>
    
                    <div>
                    {appointments.map(this.renderViewAppointments)} 
                    </div>
    
                  </Column>
                </span>
              </div>
            </Column>
          </Row>
        );
    }
}

export default PatientViewAppointment
