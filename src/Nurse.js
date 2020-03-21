import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';
import {Header, Footer}from './Home.js';
import {Login} from './Login.js'
import NurseIMG from './images/Nurse.png'

class Nurse extends React.Component{
  render(){
    return (
      <div>
        <Header title='Nurses' subTitle='View and manage your upcoming schedule'/>
        <Login img={NurseIMG}/>
        <Footer/>
      </div>
    )
  }
}

export {Nurse};