import RowTitle from '../../../components/Row-Center/Row-Title';
import {Section, Container,SubTitle,SecText, Shape } from '../../styles';


import Row1 from './components/Row1';
import Row2 from './components/Row2';
import Row3 from './components/Row3';

function Blog() {
  return (
    <Section>
      <Container>
        <RowTitle>
          <SubTitle><Shape className="me-2"></Shape> Our blogs</SubTitle>
          <SecText>Check out our latest stories</SecText>
        </RowTitle>
        <div className="row">
          <Row1/>
          <Row2/>
          <Row3/>
        </div>
      </Container>
    </Section>
    );
}

export default Blog;