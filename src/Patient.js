import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';
import {Header, Footer}from './Home.js';
import {Login} from './Login.js'

import PatientIMG from './images/Patient.png'

class Patient extends React.Component{
  render(){
    return (
      <div>
        <Header title='Patient' subTitle='Book an appointment or manage your upcoming schedule'/>
        <Login img={PatientIMG}/>
        <Footer/>
      </div>
    )
  }
}

export {Patient};