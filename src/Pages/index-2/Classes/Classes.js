import React from 'react';
import styled from 'styled-components';
import RowTitle from '../../../components/Row-Center/Row-Title';
import RowClasses from './components/Row';
import { Container, SubTitle, Shape, SecText} from '../../styles';

const Section = styled.section`
background-image: url('../../../../../../images/bg/14.jpg');
background-repeat: no-repeat;
padding: 90px 0;
@media (max-width: 991px) {
    padding: 60px 0; }
@media (max-width: 767px) {
    padding: 50px 0; }
@media (max-width: 575px) {
    padding: 40px 0; }
`;


function Classes() {
  return (
    <Section className="dark-table">
      <Container className="mb-5">
        <RowTitle>
              <SubTitle><Shape className="me-2"></Shape> Class list by goals</SubTitle>
              <SecText>What is timetable for classes</SecText>
        </RowTitle>
        <RowClasses/>
      </Container>
    </Section>
    );
}

export default Classes;