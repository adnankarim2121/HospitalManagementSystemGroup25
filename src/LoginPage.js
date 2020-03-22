import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';
import {Header, Footer}from './Home.js';
import {Login} from './Login.js'

import AdminIMG from './images/Administrator.png'


class LoginPage extends React.Component{
  render(){
    return (
      <div>
        <Header title='Login' />
        <Login img={AdminIMG}/>
        <Footer/>
      </div>
    )
  }
}

export{LoginPage}