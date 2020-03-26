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
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/Patients'>Patients</Link></li>
                <li><Link to='/Doctors'>Doctors</Link></li>
                <li><Link to='/Nurses'>Nurses</Link></li>
                <li><Link to='/Admin'>Administrator</Link></li>
                <li><Link to='/LoginPage'>Logout</Link></li>
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




export {Header, Body, Footer};

