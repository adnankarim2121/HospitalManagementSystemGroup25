import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';

import PatientIMG from './images/Patient.png'
import DoctorIMG from './images/Doctor.png'
import NurseIMG from './images/Nurse.png'
import AdminIMG from './images/Administrator.png'


class Header extends React.Component {
  render () {
    return (
      <body>
        <div className="wrapper row1">
          <header id="header" className="clear">
            <div id="hgroup">
              <h1>{this.props.title}</h1>
              <h2>{this.props.subTitle}</h2>
            </div>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Patients'>Patients</Link></li>
                <li><Link to='/Doctors'>Doctors</Link></li>
                <li><Link to='/Nurses'>Nurses</Link></li>
                <li><Link to='/Admin'>Administrator</Link></li>
              </ul>
            </nav>
          </header>
        </div>
      </body>
    );
  }
}
    

class Body extends React.Component{
  render() {
  return(
    <body>
      <div className="wrapper row2">
        <div id="container" className="clear">
          {/*Slider*/}
          <section id="slider"><img src={require("./images/HospitalLarge.jpg")}/></section>
          {/*main content*/}
          <div id="homepage">
            <section id="services" className="clear">
              <article className="one_quarter">
                <figure><img src={PatientIMG} width="64" height="64"/></figure>
                <strong>Patients</strong>
                <p>For scheduling appointments with doctors and nurses in different departments. View upcoming appointments, make changes and cancellations.</p>
                <p className="more"><Link to ='/Patients'>Schedule Now &raquo;</Link></p>
              </article>
              <article className="one_quarter">
                <figure><img src={DoctorIMG} width="64" height="64"/></figure>
                <strong>Doctors</strong>
                <p>View your schedule, which patients and make changes.</p>
                <p className="more"><Link to ='/Doctors'>Schedule Now &raquo;</Link></p>
              </article>
              <article className="one_quarter">
                <figure><img src={NurseIMG} width="64" height="64"/></figure>
                <strong>Nurses</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper.</p>
                <p className="more"><Link to ='/Nurses'>Schedule Now &raquo;</Link></p>
              </article>
              <article className="one_quarter lastbox">
                <figure><img src={AdminIMG} width="64" height="64"/></figure>
                <strong>Administrators</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper.</p>
                <p className="more"><Link to ='/Admin'>Schedule Now &raquo;</Link></p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </body>
  );
  }
}

class Footer extends React.Component{
  render() {
    return(
      <body>
      <div className="wrapper row3">
        <footer id="footer" className="clear">
          <p className="fl_left">Group 25 - Tut 10 - Lec 02 </p>
          <p className="fl_right">Something else to write</p>
        </footer>
      </div>
      </body>
  );
}
}

class Login extends React.Component{
  render(){
    return(
      <div className="login">
        <form className="modal-content" action="/action_page.php" method="post">

            <div className="imgcontainer">
              <img src={this.props.img} alt="Avatar" width='200' height='200'/>
            </div>
        
            <div className="credentials">
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required/>
        
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
                
              <button type="submit">Login</button>
            </div>
        </form>
      </div>
    );
  }
}

class HomePage extends React.Component{
  render() {
    return (
      <div>
      <Header title='Alberta Hospital' subTitle='Scheduling tool'/>
      <Body/>
      <Footer/>
      </div>
    );
  }
}

class Patient extends React.Component{
  render(){
    return (
      <div>
        <Header title='Patient' subTitle='Book an appointment or manage your upcoming schedule'/>
        <Login img={PatientIMG}/>
        <Footer/>
      </div>
    )
  }
}

class Doctor extends React.Component{
  render(){
    return (
      <div>
        <Header title='Doctors' subTitle='View and manage your upcoming schedule'/>
        <Login img={DoctorIMG}/>
        <Footer/>
      </div>
    )
  }
}

class Nurse extends React.Component{
  render(){
    return (
      <div>
        <Header title='Nurses' subTitle='View and manage your upcoming schedule'/>
        <Login img={NurseIMG}/>
        <Footer/>
      </div>
    )
  }
}

class Admin extends React.Component{
  render(){
    return (
      <div>
        <Header title='Administrator' subTitle='View and manage all upcoming schedule'/>
        <Login img={AdminIMG}/>
        <Footer/>
      </div>
    )
  }
}

export {HomePage, Patient, Doctor, Nurse, Admin};