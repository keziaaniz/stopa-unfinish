import React from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import styled from 'styled-components';

const Section = styled.section`
background-image: url('../../../images/bg/15.jpg');
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
width: 100%; 
position: relative;
z-index: 1; 
&:before{background: rgba(0, 0, 0, 0.5);
content: "";
height: 100%;
left: 0;
position: absolute;
top: 0;
width: 100%;
z-index: -1; }
@media (max-width: 1599px) {
    overflow-x: hidden;
    padding-top: 40px;
    margin-top: -40px; } 

@media (max-width: 991px) {
  padding-top: 0px;
margin-top: 40px; } 
`;

function BMI() {
  return (

    <Section  data-jarallax='{"speed": 0.6}' >
    <div className="container-fluid">
      <div className="row">
        <Form1/>
        <Form2/>
      </div>
    </div>
  </Section>
    );
}

export default BMI;