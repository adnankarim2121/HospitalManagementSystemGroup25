import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import LoginPage  from './loginPage/LoginPage.js';
import AdminPage  from './adminPage/AdminPage.js';
import './index.css';

import Routes from './Routes'; 

ReactDOM.render(
    <BrowserRouter>

            <AdminPage />
            <LoginPage />
          

    </BrowserRouter>

    , document.getElementById('root'));
