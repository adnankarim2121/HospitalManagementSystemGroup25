import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Router, Switch, Route} from 'react-router-dom';


import LoginPage  from './loginPage/LoginPage.js';
import AdminPage  from './adminPage/AdminPage.js';
import PatientPage  from './patientPage/PatientPage.js';
import NursePage  from './nursePage/NursePage.js';
import DoctorPage  from './doctorPage/DoctorPage.js';
import HomePage  from './homePage/HomePage.js';
import AddStaff from './adminPage/AddStaff.js';
import SetFee from './adminPage/SetFee.js';
import './index.css';
import history from './History';
import PatientSetAppointment  from './patientPage/PatientSetAppointment.js';
import PatientViewAppointment  from './patientPage/PatientViewAppointment.js';


ReactDOM.render(

    <BrowserRouter>
            <Route path='/HomePage' component={HomePage}/>

            <Route path='/LoginPage' component={LoginPage}/>
            <Route path='/DoctorPage' component={DoctorPage}/>

            <Route path='/NursePage' component={NursePage}/>
            <Route path='/PatientPage' component={PatientPage}/>
            <Route path='/AdminPage' component={AdminPage}/>   
            <Route path='/AddStaff' component={AddStaff}/>
            <Route path='/SetFee' component={SetFee}/> 
            <Route path='/PatientSetAppointment' component={PatientSetAppointment}/> 
            <Route path='/PatientViewAppointment' component={PatientViewAppointment}/>     

    </BrowserRouter>


    , document.getElementById('root'));
