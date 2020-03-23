import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';
import {Header, Footer}from './Home.js';
import {Login} from './Login.js'
import Admin from './Admin.js'

import AdminIMG from './images/Administrator.png'


class AdminPage extends React.Component{
  render(){
    return (
      <div>
        <Header title='Administrator' subTitle='Add a new Nurse, Doctor or Patient'/>
        <Admin img={AdminIMG}/>
        <Footer/>
      </div>
    )
  }
}

export{AdminPage}