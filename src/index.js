import React from 'react';
import ReactDOM from 'react-dom';
// import {App} from './App.js'
import {HomePage} from './HomePage';
import {Patient} from './Patient';
import {Doctor} from './Doctor';
import Nurse from './Nurse';
import {AdminPage} from './AdminPage';
import {LoginPage} from './LoginPage';
import {Login} from './Login';

import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(

    <BrowserRouter>

            <Route exact path ='/Patients' component={Patient}/>
            <Route path='/Doctors' component={Doctor}/>
            <Route path='/AdminPage' component={AdminPage}/>
            <Route path='/LoginPage' component={LoginPage}/>
            <Route path='/Login' component={Login}/>


    </BrowserRouter>

    , document.getElementById('root'));

