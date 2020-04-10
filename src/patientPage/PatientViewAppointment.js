import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { SidebarComponent } from './SidebarComponent';
import { HeaderComponent } from './HeaderComponent';
import { TitleComponent } from './TitleComponent';
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

class PatientViewAppointment extends React.Component {

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
    renderViewAppointments = ({setBy, appointments}) => <div key={setBy}>{appointments}<button value={appointments} onClick={e => this.deleteAppointment(e, "value")}  type="submit">
    Cancel Appointment</button> </div> ;


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
                    <div>
                    
                      {appointments.map(this.renderViewAppointments)} 


                    </div>
                </Column>
            </Row>
        );
    }
}

export default PatientViewAppointment