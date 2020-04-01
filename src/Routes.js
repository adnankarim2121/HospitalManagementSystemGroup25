import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomePage from './homePage/HomePage'; 
import AboutPage from './aboutPage/AboutPage';
import LoginPage from './loginPage/LoginPage';
import AdminPage from './adminPage/AdminPage';
import PatientPage from './patientPage/PatientPage';
import NursePage from './nursePage/NursePage';
import DoctorPage from './doctorPage/DoctorPage';

import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path = "/" exact component={HomePage} />
                    <Route path='/AboutPage' component={AboutPage}/>
                    <Route path='/LoginPage' component={LoginPage}/>
                    <Route path='/DoctorPage' component={DoctorPage}/>
                    <Route path='/NursePage' component={NursePage}/>
                    <Route path='/PatientPage' component={PatientPage}/>
                    <Route path='/AdminPage' component={AdminPage}/>    
                </Switch>
            </Router>
        )
    }
}