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

class AdminAssignWorkScedhule extends React.Component {

    state = { selectedItem: 'Assign Work Schedule',
    doctorsAndNurses: [],
    date: new Date(),
    userName: {
      name:'',
    } };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        document.title = "Patient";
        this.getDoctorsAndNurses();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    getDoctorsAndNurses = _ =>
    {
      fetch(`http://localhost:4000/HospitalManagementSystem/getDoctorsAndNurses`)
      .then(response => response.json())
      .then(response => this.setState({doctorsAndNurses: response.data}))
      .catch(err => console.error(err))
    }

  addShift = _ =>
  {
    const { date, userName } = this.state;

    if(userName.name === '')
    {
        alert("Please choose a staff member.");
    }
    else{
    var updatedShift = "Shift on " + date ;
    var response = window.confirm(`Are you sure you want to set a ${updatedShift} for ${userName.name}?` );
    if(response == true){
        fetch(`http://localhost:4000/HospitalManagementSystem/setShift?username=${userName.name}&shift=${updatedShift}`)
        .then((response) => {return response.json()})
          .catch(err => console.error(err));
          alert('Shift successfully set!');
          window.location.href = 'http://localhost:3000/AdminAssignWorkScedhule';
    }
  }

  }
    onChange = date => this.setState({ date })
    resize = () => this.forceUpdate();

      /*
      Display results from database on webpage.
      */
    renderDoctorsAndNurses = ({email, userType}) =>
    <option value={email}>{userType} : {email} </option>;

    render() {
        const { selectedItem, doctorsAndNurses, userName } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div>
                      <DateTimePicker
                        required='true'
                        onChange={this.onChange}
                        value={this.state.date}
                      />

                    <select id="doctorsAndNurses"
                    onChange={e => this.setState({ userName: {...userName, name: e.target.value}})}>
                    <option value="" selected disabled hidden>Choose Staff Member</option>
                        {doctorsAndNurses.map(this.renderDoctorsAndNurses)}
                    </select>

                    <button onClick={this.addShift} type="submit">Set Shift</button>

                    </div>
                </Column>
            </Row>
        );
    }
}

export default AdminAssignWorkScedhule