/*
Importing all necessary components required
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom';
import LoginPage  from './loginPage/LoginPage.js';
import RegisterNewPatient  from './loginPage/RegisterNewPatient.js';
import AdminAssignWorkScedhule  from './adminPage/AdminAssignWorkScedhule.js';
import SeeStats  from './adminPage/SeeStats.js';
import PatientPage  from './patientPage/PatientPage.js';
import NursePage  from './nursePage/NursePage.js';
import NurseViewPatients  from './nursePage/NurseViewPatients.js';
import NurseViewSchedule  from './nursePage/NurseViewSchedule.js';
import DoctorPage  from './doctorPage/DoctorPage.js';
import DoctorViewPatientAppointments  from './doctorPage/DoctorViewPatientAppointments.js';
import AssignNurses  from './doctorPage/AssignNurses.js';
import AssignPrescriptionToPatients  from './doctorPage/AssignPrescriptionToPatients.js';
import DoctorViewSchedule  from './doctorPage/DoctorViewSchedule.js';
import HomePage  from './homePage/HomePage.js';
import AddStaff from './adminPage/AddStaff.js';
import SetFee from './adminPage/SetFee.js';
import './index.css';
import history from './History';
import PatientSetAppointment  from './patientPage/PatientSetAppointment.js';
import PatientViewAppointment  from './patientPage/PatientViewAppointment.js';
import PatientViewAllPrescriptions  from './patientPage/PatientViewAllPrescriptions.js';
import About from './homePage/About.js';
import OtherServices from './patientPage/OtherServices.js';

ReactDOM.render(

    /*
    Creating routing so links can be viewed by local host when typed in URL bar.
     */
    <BrowserRouter>
            <Route exact path='/' component={HomePage}/>
            <Route path='/About' component={About}/>
            <Route path='/LoginPage' component={LoginPage}/>
            <Route path='/DoctorPage' component={DoctorPage}/>
            <Route path='/NursePage' component={NursePage}/>
            <Route path='/NurseViewPatients' component={NurseViewPatients}/>
            <Route path='/NurseViewSchedule' component={NurseViewSchedule}/>
            <Route path='/PatientPage' component={PatientPage}/>
            <Route path='/OtherServices' component={OtherServices}/>
            <Route path='/AdminAssignWorkScedhule' component={AdminAssignWorkScedhule}/> 
            <Route path='/SeeStats' component={SeeStats}/>   
            <Route path='/AddStaff' component={AddStaff}/>
            <Route path='/SetFee' component={SetFee}/> 
            <Route path='/PatientSetAppointment' component={PatientSetAppointment}/> 
            <Route path='/PatientViewAppointment' component={PatientViewAppointment}/>
            <Route path='/DoctorViewPatientAppointments' component={DoctorViewPatientAppointments}/>
            <Route path='/AssignNurses' component={AssignNurses}/>
            <Route path='/DoctorViewSchedule' component={DoctorViewSchedule}/> 
            <Route path='/RegisterNewPatient' component={RegisterNewPatient}/>
            <Route path='/AssignPrescriptionToPatients' component={AssignPrescriptionToPatients}/> 
            <Route path='/PatientViewAllPrescriptions' component={PatientViewAllPrescriptions}/>     
    </BrowserRouter>


    , document.getElementById('root'));
