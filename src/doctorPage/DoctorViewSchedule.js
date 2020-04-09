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

class DoctorViewSchedule extends React.Component {

    state = { selectedItem: 'Your Work Schedule',
    shifts: [],
    date: new Date(),
    doctorName: {
      name:'',
    } };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "Patient";
        this.getSchedule();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    getSchedule = _ =>
    {
      fetch(`http://localhost:4000/HospitalManagementSystem/getShiftsForDoctor?doctorName=${localStorage.getItem("usernameForDoctor")}`)
      .then(response => response.json())
      .then(response => this.setState({shifts: response.data}))
      .catch(err => console.error(err))
    }

    onChange = date => this.setState({ date })
    resize = () => this.forceUpdate();

    renderDoctorSchedule = ({name, workshift}) => <div key={name}><strong>{workshift}</strong></div> ;



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

        window.location.href = 'http://localhost:3000/DoctorViewSchedule';
    }

    else
    {

    }

  }

    render() {
        const { selectedItem, shifts} = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div>
                    
                      {shifts.map(this.renderDoctorSchedule)} 


                    </div>
                </Column>
            </Row>
        );
    }
}

export default DoctorViewSchedule
