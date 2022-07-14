import React from 'react';

import AboutUs from './components/About';
import FooterBottom from './components/FooterBottom';
import Gallery from './components/Gallery';
import Links from './components/Links';
import Subscribe from './components/Subscribe';
import {Container } from '../../styles';

function Footer() {
  return (
    <footer className="footer space-pt">
      <Container>
        <div className="row pb-5">
          <AboutUs/>
          <Links/>
          <Subscribe/>
          <Gallery/>
        </div>
        <hr className="m-0" />
        <FooterBottom/>
      </Container>
    </footer>    
    );
}

export default Footer;