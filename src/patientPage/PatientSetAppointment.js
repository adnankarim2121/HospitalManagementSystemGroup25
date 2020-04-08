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
    },


});

class PatientSetAppointment extends React.Component {

    state = { selectedItem: 'My Schedule',
    doctors: [],
    date: new Date(),
    doctorName: {
      name:'',
    } };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "Patient";
        this.getDoctors();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    getDoctors = _ =>
    {
      fetch(`http://localhost:4000/HospitalManagementSystem/getDoctors`)
      .then(response => response.json())
      .then(response => this.setState({doctors: response.data}))
      .catch(err => console.error(err))
    }

  addAppointment = _ =>
  {
    const { date, doctorName } = this.state;

    if(doctorName.name === '')
    {
        alert("Please choose a doctor.");
    }
    else{
    var updatedAppointment = "Appointment on " + date + " with " + doctorName.name;
    var response = window.confirm(`Are you sure you want to set an ${updatedAppointment}?` );
    if(response == true){
        fetch(`http://localhost:4000/HospitalManagementSystem/setAppointment?username=${localStorage.getItem("username")}&appointments=${updatedAppointment}&doctorName=${doctorName.name}`)
        .then((response) => {return response.json()})
          .catch(err => console.error(err));
          window.location.href = 'http://localhost:3000/PatientSetAppointment';
    }
  }

  }
    onChange = date => this.setState({ date })
    resize = () => this.forceUpdate();

    renderDoctors = ({email, userType}) =>
    <option value={email}>{email}</option>;

    render() {
        const { selectedItem, doctors, doctorName } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div>

                      <TitleComponent title={'Doctors Available'} />
                      Appointment at 
                      <DateTimePicker
                        required='true'
                        onChange={this.onChange}
                        value={this.state.date}
                      />

                    With Doctor:

                    <select id="doctors"
                    onChange={e => this.setState({ doctorName: {...doctorName, name: e.target.value}})}>
                    <option value="" selected disabled hidden>Choose Doctor</option>
                        {doctors.map(this.renderDoctors)}
                    </select>

                    <button onClick={this.addAppointment} type="submit">Set Appointment</button>

                    </div>
                </Column>
            </Row>
        );
    }
}

export default PatientSetAppointment