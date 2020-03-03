import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Patient from './Patient.js';
import Home from './Home';

ReactDOM.render(

    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/Patient' component={Patient}/>
        </div>
    </BrowserRouter>

    ,document.getElementById('root')    
);
