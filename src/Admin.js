import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';
import {Header, Footer}from './Home.js';
import {Login} from './Login.js'

import AdminIMG from './images/Administrator.png'


class Admin extends React.Component{
  render(){
    return (
      <div>
        <Header title='Administrator' subTitle='View and manage all upcoming schedule'/>
        <Login img={AdminIMG}/>
        <Footer/>
      </div>
    )
  }
}

export{Admin}