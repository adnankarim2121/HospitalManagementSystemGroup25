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
    var updatedAppointment = "Appointment at " + date + " with " + doctorName.name;
    alert (typeof(updatedAppointment));
    fetch(`http://localhost:4000/HospitalManagementSystem/setAppointment?username=${localStorage.getItem("username")}&appointments=${updatedAppointment}&doctorName=${doctorName.name}`)
    .then((response) => {return response.json()})
    .then((response) => {
        this.setState({ userInformation: response.data })
        alert(response.data);
        var data = JSON.stringify(response.data);
        var dataParsed = JSON.parse(data);
        if (dataParsed.affectedRows === 0) {
          alert("Username already exists! Please try again.");
        }

        else
        {
          alert("User added successfully!")
        }
    })
      .catch(err => console.error(err));

  }
    onChange = date => this.setState({ date })
    resize = () => this.forceUpdate();

    renderProduct = ({email, userType}) => <div key={email}>
    <table>
        <td> Name of Doctor: </td>
        <td> {email} </td>
    </table>
    </div>;

    render() {
        const { selectedItem, doctors, doctorName } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div>

                      <TitleComponent title={'Doctors Available'} />
                      {doctors.map(this.renderProduct)}
                      <DateTimePicker
                        onChange={this.onChange}
                        value={this.state.date}
                      />

                    <input
                    type="text"
                    placeholder="Enter Doctor's name"
                    value={doctorName.name}
                    onChange={e => this.setState({ doctorName: {...doctorName, name: e.target.value}})}
                    name="nameOfDoctor" required/>

                    <button onClick={this.addAppointment} type="submit">Set Appointment</button>

                    </div>
                </Column>
            </Row>
        );
    }
}

export default PatientSetAppointment