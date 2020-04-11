/*
Importing all necessary components required
*/
import React from 'react';
import '../App.css';
import { Column} from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

/*
Styling the webpage attributes.
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center'
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
    padding: 30
  }
});

/*
Class Login
*/
class Login extends React.Component {

  /*
  Class Variable
  */
  state =
    {
      userInformation: [],
      checkIfUserExists: {},
      userInfo:
      {
        email: '',
        password: '',
        userType: 'Patient'
      }
    }

  /*
  Function: changePageForPatient
  Arguments: None
  Purpose: Changing to patient page when a patient logged in. 
  */ 
  changePageForPatient = (props) => {
    const { userInfo, checkIfUserExists } = this.state;
    localStorage.setItem("username", userInfo.email);
    window.location.href = 'http://localhost:3000/PatientSetAppointment';

  }

  /*
  Function: changePageForDoctor
  Arguments: None
  Purpose: Changing to doctor page when a doctor logged in. 
  */ 
  changePageForDoctor = (props) => {
    const { userInfo, checkIfUserExists } = this.state;
    localStorage.setItem("usernameForDoctor", userInfo.email);
    window.location.href = 'http://localhost:3000/DoctorViewSchedule';
  }

  /*
  Function: changePageForNurse
  Arguments: None
  Purpose: Changing to nurse page when a nurse logged in. 
  */ 
  changePageForNurse = (props) => {
    const { userInfo, checkIfUserExists } = this.state;
    localStorage.setItem("usernameForNurse", userInfo.email);
    window.location.href = 'http://localhost:3000/NurseViewSchedule';
  }

  /*
  Function: changePageForAdmin
  Arguments: None
  Purpose: Changing to admin page when a admin logged in. 
  */ 
  changePageForAdmin = (props) => {
    const { userInfo, checkIfUserExists } = this.state;
    localStorage.setItem("usernameForAdmin", userInfo.email);
    window.location.href = 'http://localhost:3000/SeeStats';
  }


  /*
  Function: checkIfUserExists
  Arguments: None
  Purpose: Checking database if user exists. If yes, then user logins to corresponding page.  
  */ 
  checkIfUserExists = _ => {
    const { userInfo, checkIfUserExists } = this.state;

    fetch(`http://localhost:4000/HospitalManagementSystem/select?email=${userInfo.email}&password=${userInfo.password}`)
      .then((response) => { return response.json() })
      .then((response) => {

        this.setState({ userInformation: response.data })
        var data = JSON.stringify(response.data);
        var dataParsed = JSON.parse(data);

        if (data.length === 2) {
          alert("Wrong password or email. Please try again!");
        }

        else if (dataParsed[0].userType === 'patient') {
          this.changePageForPatient();
        }

        else if (dataParsed[0].userType === 'Patient') {
          this.changePageForPatient();
        }

        else if (dataParsed[0].userType === 'Nurse') {
          this.changePageForNurse();
        }

        else if (dataParsed[0].userType === 'Doctor') {
          this.changePageForDoctor();
        }
        else if (dataParsed[0].userType === 'Admin') {
          this.changePageForAdmin();
        }

      })
      .catch(err => console.error(err))

  }

  /*
  Render components for the webpage. HTML tags.
  */
  render() {

    const { userInfo } = this.state;

    return (
      <Column className={css(styles.container)}>
        <div className={css(styles.title)}>
          <form className="modal-content">

          <div className={css(styles.title)}>{"Please Login!"}</div>

            <div className={css(styles.padding)}>
              <div className={"imgcontainer"} >
                <img src={this.props.img} alt="Avatar" width='100' height='100' />
              </div>
            </div>

            <div className={css(styles.padding)}>
              <div className="username">
                <label for="uname"><b>Username</b></label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={userInfo.email}
                  onChange={e => this.setState({ userInfo: { ...userInfo, email: e.target.value } })}
                  name="uname" required />
              </div>
            </div>

            <div className="password">
              <label for="psw"><b>Password</b></label>
              <input
                type="password"
                placeholder="Enter Password"
                value={userInfo.password}
                onChange={e => this.setState({ userInfo: { ...userInfo, password: e.target.value } })}
                name="psw" required />
            </div>

            <div className={css(styles.padding)}>
              <div className="button">
                <button onClick={this.checkIfUserExists} type="submit" color='#482acc'>Login</button>
              </div>
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
export { Login }