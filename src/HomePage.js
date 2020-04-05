import React from 'react';
import { Helmet } from 'react-helmet';
import './layout.css';
import {Header, Body, Footer} from './Home.js';

class HomePage extends React.Component{
  render() {
    return (
      <div>
      <Header title='Alberta Hospital' subTitle='Scheduling Tool'/>
      <Body/>
      <Footer/>
      <Helmet>
          <title>{'Home'}</title>
      </Helmet>
      </div>
    );
  }
}

export {HomePage}

