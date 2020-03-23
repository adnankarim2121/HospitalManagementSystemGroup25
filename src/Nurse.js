import React from 'react';
import { Helmet } from 'react-helmet';
import './layout.css';
import {Header, Footer}from './Home.js';
import NurseIMG from './images/Nurse.png'

class Nurse extends React.Component{
  render(){
    return (
      <div>
        <Header title='Nurses' subTitle='View and manage your upcoming schedule'/>
        <Footer/>
        <Helmet>
          <title>{'Nurse'}</title>
      </Helmet>
      </div>
    )
  }
}

export {Nurse};