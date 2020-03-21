import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';

import PatientIMG from './images/Patient.png'
import DoctorIMG from './images/Doctor.png'
import NurseIMG from './images/Nurse.png'
import AdminIMG from './images/Administrator.png'

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleUsernameField = this.handleUsernameField.bind(this);
    this.handlePasswordField = this.handlePasswordField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleUsernameField(event) {
    console.log('Click happened');
    this.setState({username: event.target.value});
    console.log(this.state.username);
  }

    handlePasswordField(event) {
    this.setState({password: event.target.value});
    console.log(this.state.username);
  }

  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch('/Home', { 
        method: 'POST',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });

  }
  //handleChange = e => this.setState( {username: e.target.usernameValue})
  render(){
    return(
      <div className="login">
        <form className="modal-content" action="/action_page.php" method="post">

            <div className="imgcontainer">
              <img src={this.props.img} alt="Avatar" width='200' height='200'/>
            </div>
        
            <div className="credentials">
              <label for="uname"><b>Username</b></label>
              <input 
              type="text" 
              placeholder="Enter Username" 
              value={this.state.username}
              onChange={this.handleUsernameField}
              ref="uname"
              name="uname" required/>
        
              <label for="psw"><b>Password</b></label>
              <input 
              type="password" 
              placeholder="Enter Password" 
              value={this.state.password}
              onChange={this.handlePasswordField}
              ref="password"
              name="psw" required/>
                
              <button onClick={this.handleSubmit} type="submit">Login</button>
            </div>
        </form>
      </div>
    );
  }
}


export {Login}