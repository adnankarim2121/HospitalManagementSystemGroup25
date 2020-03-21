import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {HomePage} from './HomePage';
import {Patient} from './Patient';
import {Doctor} from './Doctor';
import {Nurse} from './Nurse';
import {Admin} from './Admin';
import {LoginPage} from './LoginPage';



ReactDOM.render(

    <BrowserRouter>
        <div>
            <Route exact path='/' component={HomePage}/>
            <Route path ='/Patients' component={Patient}/>
            <Route path='/Doctors' component={Doctor}/>
            <Route path='/Nurses' component={Nurse}/>
            <Route path='/Admin' component={Admin}/>
            <Route path='/LoginPage' component={LoginPage}/>
        </div>
    </BrowserRouter>

    , document.getElementById('root'));

