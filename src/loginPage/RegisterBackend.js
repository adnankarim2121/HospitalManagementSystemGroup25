/*
Importing all necessary components required
*/
import React from 'react';
import { withRouter } from "react-router-dom";
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

import IconAddStaff from '../icons/staff.png'

/*
Styling the webpage attributes.
*/
const styles = StyleSheet.create({
  container: {
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
  },
  padding10: {
    padding: 10
  }
});

/*
Class RegisterBackend
*/
class RegisterBackend extends React.Component {
  /*
  Class Variable
  */
  state =
    {
      userInformation: [],
      checkIfUserExists: [],
      redirect: false,
      userInfo:
      {
        email: '',
        password: '',
        userType: 'Patient',
        address: '',
        healthCareNumber: '',
        gender: '',
        contactNumber: ''
      }
    }

  /*
  componentDidMount loads variables/functions on startup
  */
  componentDidMount() {
    this.getUsers();

  }

  /*
  Function: getUsers
  Arguments: None
  Purpose: Get all registered users from database. 
  */ 
  getUsers = _ => {
    fetch('http://localhost:4000/HospitalManagementSystem')
      .then(response => response.json())
      .then(response => this.setState({ userInformation: response.data }))
      .catch(err => console.error(err))
  }

  /*
  Function: registerUser
  Arguments: None
  Purpose: Register new user to database given user does not exist. 
  */ 
  registerUser = _ => {
    const { userInfo } = this.state;

    if (userInfo.userType === 'Patient' && userInfo.password.localeCompare('') != 0 && userInfo.address.localeCompare('') != 0 && userInfo.healthCareNumber.localeCompare('') != 0 && userInfo.gender.localeCompare('') != 0 && userInfo.contactNumber.localeCompare('') != 0) {
      fetch(`http://localhost:4000/HospitalManagementSystem/addNewUser?email=${userInfo.email}&password=${userInfo.password}&address=${userInfo.address}&healthCareNumber=${userInfo.healthCareNumber}&gender=${userInfo.gender}&contactNumber=${userInfo.contactNumber}`)
        .then((response) => { return response.json() })
        .then((response) => {
          this.setState({ userInformation: response.data })
          var data = JSON.stringify(response.data);
          var dataParsed = JSON.parse(data);
          if (dataParsed.affectedRows === 0) {
            alert("Username already exists! Please try again.");
          }

          else {
            alert("User added successfully!")
            window.location.href = 'http://localhost:3000/LoginPage';
          }
        })
        .catch(err => console.error(err));


    }
    else {
      alert("Could not sign up. Please try again.");
    }

    console.log(userInfo);
  }

  /*
  Render components for the webpage. HTML tags.
  */
  render() {

    const {userInfo } = this.state;

    return (
      <Column className={css(styles.container)}>
        <div className={css(styles.title)}>{"Sign Up! "}</div>
        <div className={css(styles.padding)}></div>
        <div className="login">
          <form className="modal-content">
            <div className="imgcontainer">
              <img src={IconAddStaff} alt="Avatar" width='130' height='130' />
            </div>
            <div className={css(styles.padding)}></div>
            <div className="credentials">
              <label for="uname"><b>Username</b></label>
              <input
                type="text"
                placeholder="Enter Username"
                value={userInfo.email}
                onChange={e => this.setState({ userInfo: { ...userInfo, email: e.target.value } })}
                name="uname" required />
            </div>
            <div className={css(styles.padding10)}></div>
            <div>
              <label for="psw"><b>Password</b></label>
              <input
                type="password"
                placeholder="Enter Password"
                value={userInfo.password}
                onChange={e => this.setState({ userInfo: { ...userInfo, password: e.target.value } })}
                name="psw" required />
            </div>

            <div className={css(styles.padding10)}></div>
            <div>
            <label for="psw"><b>Gender</b></label>
                  <select id="patients"
                    onChange={e => this.setState({ userInfo: {...userInfo, gender: e.target.value}})}>
                    <option value="" selected disabled hidden>Select Gender</option>
                    <option value="Male">Male </option>;
                    <option value="Female">Female </option>;
                    <option value="Other">Other </option>;
                    </select>
            </div>
            <div className={css(styles.padding10)}></div>
            <div>
              <label for="address"><b>Address</b></label>
              <input
                type="text"
                placeholder="Enter Your Address"
                value={userInfo.address}
                onChange={e => this.setState({ userInfo: { ...userInfo, address: e.target.value } })}
                name="psw" required />
              </div>
            <div className={css(styles.padding10)}></div>
            <div>
              <label for="address"><b>Health Care Number</b></label>
              <input
                type="text"
                placeholder="Enter Your Health Care Number"
                value={userInfo.healthCareNumber}
                onChange={e => this.setState({ userInfo: { ...userInfo, healthCareNumber: e.target.value } })}
                name="psw" required />
                </div>
            <div className={css(styles.padding10)}></div>
            <div>
              <label for="address"><b>Contact Number</b></label>
              <input
                type="text"
                placeholder="Enter Your Contact Number"
                value={userInfo.contactNumber}
                onChange={e => this.setState({ userInfo: { ...userInfo, contactNumber: e.target.value } })}
                name="psw" required />
            </div>
            <div className={css(styles.padding10)}></div>
            <div>
              <button onClick={this.registerUser} type="submit">Register User</button>
            </div>
          </form>
        </div>
      </Column>
    );
  }
}

/*
Exporting component so other files can use component.
*/
export default withRouter(RegisterBackend);
