import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage  from './loginPage/LoginPage.js';
import AdminPage  from './adminPage/AdminPage.js';
import PatientPage  from './patientPage/PatientPage.js';
import NursePage  from './nursePage/NursePage.js';
import DoctorPage  from './doctorPage/DoctorPage.js';
import './index.css';

import Routes from './Routes'; 

ReactDOM.render(
    <BrowserRouter>
            <Route path='/LoginPage' component={LoginPage}/>
            <Route path='/AdminPage' component={AdminPage}/>
            <Route path='/PatientPage' component={PatientPage}/>
            <Route path='/NursePage' component={NursePage}/>
            <Route path='/DoctorPage' component={DoctorPage}/>
          

    </BrowserRouter>

    , document.getElementById('root'));
