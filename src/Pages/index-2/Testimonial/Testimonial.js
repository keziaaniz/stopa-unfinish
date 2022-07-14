import styled from 'styled-components';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import Item3 from './components/Item3';
import {Container} from '../../styles';

const SecTestimonial = styled.section`
padding: 90px 0;
position: relative;
z-index: 1; 
&:before {background: rgba(0, 0, 0, 0.5);
content: "";
height: 100%;
left: 0;
position: absolute;
top: 0;
width: 100%;
z-index: -1; }
background-repeat: no-repeat;
background-position: right; 
background-image: url('../../../images/bg/16.jpg');

@media (max-width: 991px) {
     padding: 60px 0; }
    @media (max-width: 991px) {
     padding: 60px 0; }
    @media (max-width: 767px) {
      padding: 50px 0; 
    }
`;


function Testimonial() {
  return (
    <SecTestimonial className="space-ptb bg-overlay-black-50 testimonial-bg">
      <Container>
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="owl-carousel testimonial-style-01 bg-dark-02 py-xl-5 py-5 p-0 p-lg-5" data-animateOut="fadeOut" data-nav-arrow="true" data-items="1" data-md-items="1" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="0">                          
              <Item1/>
              <Item2/>
              <Item3/>
            </div>
          </div>
        </div>
      </Container>
    </SecTestimonial>

    );
}

export default Testimonial;