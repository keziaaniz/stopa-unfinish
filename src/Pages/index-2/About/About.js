import React from 'react';
import RowTitle from '../../../components/Row-Center/Row-Title';
import Row from './components/Row';
import styled from 'styled-components';
import {Container, SubTitle, Shape, SecText } from '../../styles';


const SecAbout = styled.section`
background: #000000 !important; 
`;



function About() {
  return (
    <SecAbout>
      <Container className="container">
        <RowTitle>
          <SubTitle><Shape className="me-2"></Shape> About our company</SubTitle>
          <SecText>Who we are and what we do</SecText>
        </RowTitle>
        <Row/>
      </Container>
    </SecAbout>
    );
}

export default About;