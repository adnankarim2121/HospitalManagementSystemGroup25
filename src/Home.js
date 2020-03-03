import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Patient from './Patient.js';
import './layout.css';

const Home = () => {
  return (
    <body>
      <div className="wrapper row1">
        <header id="header" className="clear">
          <div id="hgroup">
            <h1>Alberta Hospital</h1>
            <h2>Scheduling and Management System</h2>
          </div>
          <nav>
            <ul>
              <li><Link to='/Patient'>Patient</Link></li>
            </ul>
          </nav>
        </header>
    

{/* 
<nav>
      <ul>              
        <li><a href="index.html">Homepage</a></li>
        <li><a href="patient.html">Patients</a></li>
        <li><a href="doctors.html">Doctors</a></li>
        <li><a href="nurses.html">Nurses</a></li>
        <li class="last"><a href="administrator.html">Administrator</a></li></ul>
    </nav>
*/}



      <div className="wrapper row2">
        <div id="container" className="clear">
          {/*Slider*/}
          <section id="slider"><img src={require("./images/HospitalLarge.jpg")}/></section>
          {/*main content*/}
          <div id="homepage">
            <section id="services" className="clear">
              <article className="one_quarter">
                <figure><img src={require("./images/Patient.png")} width="64" height="64"/></figure>
                <strong>Patients</strong>
                <p>For scheduling appointments with doctors and nurses in different departments. View upcoming appointments, make changes and cancellations.</p>
                <p className="more"><a href="patient.html">Schedule Now &raquo;</a></p>
              </article>
              <article className="one_quarter">
                <figure><img src={require("./images/Doctor.png")} width="64" height="64"/></figure>
                <strong>Doctors</strong>
                <p>View your schedule, which patients and make changes.</p>
                <p className="more"><a href="#">Read More &raquo;</a></p>
              </article>
              <article className="one_quarter">
                <figure><img src={require("./images/Nurse.png")} width="64" height="64"/></figure>
                <strong>Nurses</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper.</p>
                <p className="more"><a href="#">Read More &raquo;</a></p>
              </article>
              <article className="one_quarter lastbox">
                <figure><img src={require("./images/Administrator.png")} width="64" height="64"/></figure>
                <strong>Administrators</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper.</p>
                <p className="more"><a href="#">Read More &raquo;</a></p>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div className="wrapper row3">
        <footer id="footer" className="clear">
          <p className="fl_left">Group 25 - Tut 10 - Lec 02 </p>
          <p className="fl_right">Something else to write</p>
        </footer>
      </div>
    </div>

    </body>

  );
}

export default Home;
