import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Routes from './Routes'; 

ReactDOM.render(
    <BrowserRouter>
            < Routes/>
    </BrowserRouter>

    , document.getElementById('root'));
