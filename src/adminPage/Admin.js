import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom'



class Admin extends React.Component{

  state =
  {
    userInformation: [],
    checkIfUserExists:[],
    redirect: false,
    userInfo:
    {
      email: '',
      password: '',
      userType: ''
    }
  }

  componentDidMount()
  {
    this.getUsers();

  }

  getUsers = _ =>
  {
    fetch('http://localhost:4000/HospitalManagementSystem')
    .then(response => response.json())
    .then(response => this.setState({userInformation: response.data}))
    .catch(err => console.error(err))
  }

  addUser = _ =>
  {
    const { userInfo } = this.state;
    if(userInfo.userType === 'Nurse' || userInfo.userType === 'Doctor' || userInfo.userType === 'Patient')
    {
      fetch(`http://localhost:4000/HospitalManagementSystem/add?email=${userInfo.email}&password=${userInfo.password}&userType=${userInfo.userType}`)
    .then((response) => {return response.json()})
    .then((data) => {

    })
      .catch(err => console.error(err));


    }
    else
    {
      alert("User was not added. Please try again.");
    }

    console.log(userInfo);
  }

onSubmit = () => {
  alert("made it here");
    window.open("http://localhost:3000/Patients")
  }
  renderProduct = ({email, password}) => <div key={email}>{password}</div>

  //handleChange = e => this.setState( {username: e.target.usernameValue})
  render(){

    const { userInformation, userInfo } = this.state;

    return(

      <div className="login">
        <form className="modal-content">

            <div className="imgcontainer">
              <img src={this.props.img} alt="Avatar" width='200' height='200'/>
            </div>

            <div className="credentials">
              <label for="uname"><b>Username</b></label>
              <input
              type="text"
              placeholder="Enter Username"
              value={userInfo.email}
              onChange={e => this.setState({ userInfo: {...userInfo, email: e.target.value}})}
              name="uname" required/>

              <label for="psw"><b>Password</b></label>
              <input
              type="password"
              placeholder="Enter Password"
              value={userInfo.password}
              onChange={e => this.setState({ userInfo: {...userInfo, password: e.target.value}})}
              name="psw" required/>


              <label for="userType"><b>Type of User: </b></label>
              <input
              type="text"
              placeholder="Enter Doctor, Nurse or Patient"
              value={userInfo.userType}
              onChange={e => this.setState({ userInfo: {...userInfo, userType: e.target.value}})}
              name="psw" required/>

              <button onClick={this.addUser} type="submit">Register User</button>
            </div>
        </form>
      </div>
    );
  }
}


export default withRouter(Admin);
