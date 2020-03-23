import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {HomePage} from './HomePage';
import {PatientGuide} from './PatientGuide';
import {About} from './About';
import {LoginPage} from './LoginPage';
import {Patient} from './Patient';
import {Doctor} from './Doctor';
import {Nurse} from './Nurse';
import {Admin} from './Admin';
import {App} from './App';



ReactDOM.render(

    <BrowserRouter>
        <div>
            <Route exact path='/' component={HomePage}/>
            <Route path ='/PatientGuide' component={PatientGuide}/>
            <Route path='/About' component={About}/>
            <Route path='/LoginPage' component={LoginPage}/>
            <Route path ='/Patients' component={Patient}/>
            <Route path='/Doctors' component={Doctor}/>
            <Route path='/Nurses' component={Nurse}/>
            <Route path='/Admin' component={Admin}/>
            <Route path='/App' component={App}/> 
        </div>
    </BrowserRouter>

    , document.getElementById('root'));

