import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import '../App.css';

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

class DoctorViewPatientAppointments extends React.Component {

    state = { selectedItem: 'Upcoming/Past Appointments',
    appointments: [],
    date: new Date(),
    doctorName: {
      name:'',
    } };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "Patient";
        this.getAppointments();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    getAppointments = _ =>
    {
      fetch(`http://localhost:4000/HospitalManagementSystem/getAppointmentsForDoctors?doctorName=${localStorage.getItem("usernameForDoctor")}`)
      .then(response => response.json())
      .then(response => this.setState({appointments: response.data}))
      .catch(err => console.error(err))
    }

    onChange = date => this.setState({ date })
    resize = () => this.forceUpdate();

    renderProduct = ({doctorName, appointments, setBy, reasonForVisit}) => <div key={doctorName}> <p>You have an <strong>{appointments.replace(doctorName, setBy)}</strong></p>
    <p id="reasonForVisit">Reason for Visit: <strong>{reasonForVisit}</strong></p>
    <button value={appointments} onClick={e => this.deleteAppointment(e, "value")}  type="submit"> Cancel Appointment</button>
    <button value={appointments} onClick={e => this.deleteAppointment(e, "value")}  type="submit"> Appointment Complete </button></div> ;



  completeAppointment(e)
  {
    var response = window.confirm(`Are you sure you want to confirm this appointment has been completed?` );
    if(response == true)
    {
        fetch(`http://localhost:4000/HospitalManagementSystem/deleteAppointment?appointment=${e.target.value}`)
        .then((response) => {return response.json()})
        .then((response) => {

        })
          .catch(err => console.error(err));

        window.location.href = 'http://localhost:3000/DoctorViewPatientAppointments';
    }

    else
    {

    }

  }
  deleteAppointment(e)
  {
    var response = window.confirm(`Are you sure you want to cancel the appointment?` );
    if(response == true)
    {
        fetch(`http://localhost:4000/HospitalManagementSystem/deleteAppointment?appointment=${e.target.value}`)
        .then((response) => {return response.json()})
        .then((response) => {

        })
          .catch(err => console.error(err));

        window.location.href = 'http://localhost:3000/DoctorViewPatientAppointments';
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
                    <div>
                    
                      {appointments.map(this.renderProduct)} 


                    </div>
                </Column>
            </Row>
        );
    }
}

export default DoctorViewPatientAppointments
