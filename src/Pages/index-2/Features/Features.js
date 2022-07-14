
import RowTitle from '../../../components/Row-Center/Row-Title';
import RowFeatures from './components/Row-Features';
import {Section, Container, SubTitle, Shape, SecText } from '../../styles';



function Features() {
  return (
        <Section>
          <Container>
            <RowTitle>
              <SubTitle ><Shape className="me-2"></Shape> Why choose us?</SubTitle>
              <SecText >Our key features See some</SecText>
            </RowTitle>
            <RowFeatures/>
          </Container>
        </Section>
    );
}

export default Features;