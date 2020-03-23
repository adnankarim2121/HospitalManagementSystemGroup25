import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import {HomePage} from './HomePage';
import {PatientGuide} from './PatientGuide';
import {About} from './About';
import {LoginPage} from './LoginPage';
import {Patient} from './Patient';
import {Doctor} from './Doctor';
import {Nurse} from './Nurse';
import {AdminPage} from './AdminPage';
import {LoginPage} from './LoginPage';
import {Login} from './Login';
import {BrowserRouter as Router,Route,
 Redirect,Switch} from 'react-router-dom';


ReactDOM.render(

    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route exact path ='/Patients' component={Patient}/>
            <Route path='/Doctors' component={Doctor}/>
            <Route path='/Nurses' component={Nurse}/>
            <Route path='/AdminPage' component={AdminPage}/>
            <Route path='/LoginPage' component={LoginPage}/>
            <Route path='/Login' component={Login}/>

        </div>
    </Router>

    , document.getElementById('root'));
