import React from 'react';
import './layout.css';




class Login extends React.Component{

  state = 
  {
    userInformation: [],
    checkIfUserExists:{},
    userInfo: 
    {
      email: '',
      password: '',
      userType: 'Patient'
    }
  }

  componentDidMount() 
  {
    //this.checkIfUserExists();
  }


  changePageForPatient = (props) => {
  window.location.href = 'http://localhost:3000/AdminPage';
  //window.location.replace("http://localhost:3000/AdminPage");
}

  changePageForDoctor = (props) => {
  window.location.href = 'http://localhost:3000/AdminPage';
}

  changePageForNurse = (props) => {
  window.location.href = 'http://localhost:3000/AdminPage';
}

  checkIfUserExists = _ =>
  {
    const { userInfo, checkIfUserExists } = this.state; 

    fetch(`http://localhost:4000/HospitalManagementSystem/select?email=${userInfo.email}&password=${userInfo.password}`)
    .then((response) => {return response.json()})
    .then((response) => {

    this.setState({userInformation: response.data})
    var data = JSON.stringify(response.data);
    var dataParsed = JSON.parse(data);

    if(data.length === 2)
    {
      alert("Wrong password or email. Please try again!");
    }

    else if(dataParsed[0].userType === 'patient')
    {
      alert("YOU ARE A PATIENT/ Redirecting to patient homepage with correct credentials");
      this.changePageForPatient();
    }

    else if(dataParsed[0].userType === 'Patient')
    {
      alert("YOU ARE A PATIENT/ Redirecting to patient homepage with correct credentials");
      this.changePageForPatient();
    }

    else if(dataParsed[0].userType === 'Nurse')
    {
      alert("YOU ARE A NURSE/ Redirecting to nurse homepage with correct credentials");
      this.changePageForNurse();
    }

    else if(dataParsed[0].userType === 'Doctor')
    {
      alert("YOU ARE A DOCTOR/ Redirecting to dotor homepage with correct credentials");
      this.changePageForDoctor();
    }

    })
    .catch(err => console.error(err))

  }

  render(){

    const { userInformation, userInfo } = this.state;

    return(

      <div className="login">

      <div className="App">
        </div>
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
                
              <button onClick={this.checkIfUserExists} type="submit">Login</button>
            </div>
        </form>
      </div>
    );
  }
}


export {Login}