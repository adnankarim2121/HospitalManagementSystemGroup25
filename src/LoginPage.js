import React from 'react';
import { Helmet } from 'react-helmet';
import './layout.css';
import {Header, Footer}from './Home.js';
import {Login} from './Login.js'

import LogoIMG from './images/healthservices.png'


class LoginPage extends React.Component{
  render(){
    return (
      <div>
        <Header title='Login' />
        <Login img={LogoIMG}/>
        <Helmet>
          <title>{'Login'}</title>
      </Helmet>
        <Footer/>
      </div>
    )
  }
}

export{LoginPage}