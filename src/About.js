import React from 'react';
import { Helmet } from 'react-helmet';
import './layout.css';
import {Header, Footer}from './Home.js';

class About extends React.Component{
  render() {
    return (
      <div>
      <Header title = 'About' subTitle='More about us'/>
      <Footer />
      <Helmet>
          <title>{'About'}</title>
      </Helmet>
      </div>
     )
  }
}

export {About};
