import React from 'react';

import Contact from './components/Contact';
import FooterBottom from './components/Footer';
import Information from './components/Information';
import Account from './components/MyAccount';
import Subscribe from './components/Subscribe';
import {Container } from '../../styles';

function footer() {
  return (
    <footer className="footer footer-dark space-pt">
    <Container>
      <div className="row pb-5">
        <Contact/>
        <Information/>
        <Account/>
        <Subscribe/>
      </div>
      <hr className="m-0" />
      <FooterBottom/>
    </Container>
  </footer>
    );
}

export default footer;