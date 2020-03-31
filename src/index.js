import React from 'react';
import ReactDOM from 'react-dom';
// import {App} from './App.js'
//import {PatientGuide} from './PatientGuide';
//import {Patient} from './Patient';
//import {Doctor} from './Doctor';
//import {AdminPage} from './AdminPage';

import HomePage from './homePage/HomePage'; 
import AboutPage from './aboutPage/AboutPage';
import LoginPage from './loginPage/LoginPage';
import AdminPage from './adminPage/AdminPage';
import PatientPage from './patientPage/PatientPage';
import NursePage from './nursePage/NursePage';
import DoctorPage from './doctorPage/DoctorPage';


import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(

    <BrowserRouter>
            < HomePage/>
            <Route path='/LoginPage' component={LoginPage}/>
            <Route path='/DoctorPage' component={DoctorPage}/>
            <Route path='/NursePage' component={NursePage}/>
            <Route path='/PatientPage' component={PatientPage}/>
            <Route path='/AdminPage' component={AdminPage}/>

          

    </BrowserRouter>

    , document.getElementById('root'));
