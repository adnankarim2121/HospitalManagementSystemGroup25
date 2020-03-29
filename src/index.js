import React from 'react';
import ReactDOM from 'react-dom';
// import {App} from './App.js'
//import {PatientGuide} from './PatientGuide';
//import {Patient} from './Patient';
//import {Doctor} from './Doctor';
//import {AdminPage} from './AdminPage';

import LoginPage from './loginPage/LoginPage';
import AdminPage from './adminPage/AdminPage'

import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(

    <BrowserRouter>
            <AdminPage />
          


    </BrowserRouter>

    , document.getElementById('root'));
