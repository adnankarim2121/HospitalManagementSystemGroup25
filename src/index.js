import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {HomePage, Patient, Doctor, Nurse, Admin} from './Home';



ReactDOM.render(

    <BrowserRouter>
        <div>
            <Route exact path='/' component={HomePage}/>
            <Route path ='/Patients' component={Patient}/>
            <Route path='/Doctors' component={Doctor}/>
            <Route path='/Nurses' component={Nurse}/>
            <Route path='/Admin' component={Admin}/>
        </div>
    </BrowserRouter>

    , document.getElementById('root'));

