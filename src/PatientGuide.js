import React from 'react';
import { Helmet } from 'react-helmet';
import './layout.css';
import {Header, Footer}from './Home.js';

class PatientGuide extends React.Component{
  render(){
    return (
      <div>
        <Header title='Patient Guide' subTitle='Learn more about our services'/>
        <Footer/>
        <Helmet>
          <title>{'Patient Guide'}</title>
      </Helmet>
      </div>
    )
  }
}

export {PatientGuide};