import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';
import {Header, Footer}from './Home.js';
import {Login} from './Login.js'

import DoctorIMG from './images/Doctor.png'

class Doctor extends React.Component{
  render(){
    return (
      <div>
        <Header title='Doctors' subTitle='View and manage your upcoming schedule'/>
        <Login img={DoctorIMG}/>
        <Footer/>
      </div>
    )
  }
}

export {Doctor};