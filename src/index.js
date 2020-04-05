import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom';
import HomePage from './homePage/HomePage';
import LoginPage  from './loginPage/LoginPage.js';
import AdminPage  from './adminPage/AdminPage.js';
import PatientPage  from './patientPage/PatientPage.js';
import NursePage  from './nursePage/NursePage.js';
import DoctorPage  from './doctorPage/DoctorPage.js';
import './index.css';
import history from './History';


ReactDOM.render(
        <Router history={history}>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path='/LoginPage' component={LoginPage}/>
            <Route path='/DoctorPage' component={DoctorPage}/>
            <Route path='/NursePage' component={NursePage}/>
            <Route path='/PatientPage' component={PatientPage}/>
            <Route path='/AdminPage' component={AdminPage}/>    
        </Switch>
    </Router>

    , document.getElementById('root'));
