import React from 'react';
import { withRouter } from "react-router-dom";
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

import IconAddStaff from '../icons/staff.png'

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

class Admin extends React.Component {

  state =
    {
      userInformation: [],
      checkIfUserExists: [],
      redirect: false,
      userInfo:
      {
        email: '',
        password: '',
        userType: ''
      }
    }

  componentDidMount() {

  }

  addUser = _ => {
    const { userInfo } = this.state;
    if (userInfo.userType === 'Nurse' || userInfo.userType === 'Doctor') {
      fetch(`http://localhost:4000/HospitalManagementSystem/add?email=${userInfo.email}&password=${userInfo.password}&userType=${userInfo.userType}`)
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
          }
        })
        .catch(err => console.error(err));


    }
    else {
      alert("User was not added. Please try again.");
    }

    console.log(userInfo);
  }

  renderProduct = ({ email, password }) => <div key={email}>{password}</div>

  render() {

    const {userInfo } = this.state;

    return (
      <Column className={css(styles.container)}>
        <div className={css(styles.title)}>{"Add Doctors or Nurses "}</div>
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
            <label for="psw"><b>Staff Type</b></label>
                  <select id="userType"
                    onChange={e => this.setState({ userInfo: {...userInfo, userType: e.target.value}})}>
                    <option value="" selected disabled hidden>Select Staff Type</option>
                    <option value="Doctor">Doctor </option>;
                    <option value="Nurse">Nurse </option>;
                    </select>
            </div>
            <div className={css(styles.padding10)}></div>
            <div>
              <button onClick={this.addUser} type="submit">Register User</button>
            </div>
          </form>
        </div>
      </Column>
    );
  }
}


export default withRouter(Admin);
