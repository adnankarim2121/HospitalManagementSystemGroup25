import React from 'react';
import {Link} from 'react-router-dom';
import './layout.css';
import {Header, Body, Footer} from './Home.js';
class HomePage extends React.Component{
  render() {
    return (
      <div>
      <Header title='Alberta Hospital' subTitle='Scheduling tool'/>
      <Body/>
      <Footer/>
      </div>
    );
  }
}

export {HomePage}