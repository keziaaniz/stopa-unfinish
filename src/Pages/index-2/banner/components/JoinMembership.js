import styled from 'styled-components';
import {Container} from '../../../styles';
import '../styles/styles.css';



const JoinMembershipBanner = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 1; 
`;

const ABtn = styled.a`
  text-decoration: none !important;
  //-btn-/
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase; 
  //-btn-/
  font-weight: 700;
  font-size: 16px;
  padding: 12px 40px;
  border-radius: 0; 
  //-btn-primary-/
  background: #da1d25;
  border-color: #da1d25;
  color: #ffffff;
  position: relative;
  //-btn-primary-hover--/
  &:hover {
      background: #bf1920;
      border-color: #bf1920;
      color: #ffffff; }
  //-btn-primary-focus--/
  &:focus {
      background: #bf1920;
      border-color: #bf1920;
      color: #ffffff; }
`;

const Navigation = styled.div`
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: 20px; 

 @media (max-width: 767px) {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-top: 30px; }
`;

const IconNavigation = styled.div`
  background-image: inherit;
  height: auto;
  width: auto;
  position: inherit;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 20px;
  outline: none;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out; 
  &:hover {color: #da1d25; }

  @media (max-width: 767px) {
      margin-left: 0;
      margin-right: 20px; }
`;

const IconPrev = styled.i`
  font-size: 30px;
  margin-right: 10px; 
  z-index: 8;
`;

const IconNext = styled.i`
  font-size: 30px;
  margin-left: 10px;
  z-index: 8; 
`;


function JoinMembership() {
  return (
    <JoinMembershipBanner>
      <Container className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-sm-flex align-items-center">
              <ABtn className="btn btn-primary" href="#">Join Now!</ABtn>
                <div className="membership d-flex">
                  <span className="text-primary ms-0 mt-3 mt-sm-0 ms-sm-5">Membership :</span>
                  <ul className="list-unstyled text-white d-flex mb-0 mt-3 mt-sm-0">
                    <li className="ms-3">Monthly</li>
                    <li className="ms-3 me-3">|</li>
                    <li>Yearly</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="col-md-4">
            <Navigation>
              <IconNavigation className="swiper-button-prev"><IconPrev className="flaticon-back"></IconPrev>Prev</IconNavigation>
              <IconNavigation className="swiper-button-next">Next<IconNext className="flaticon-right-arrow"></IconNext></IconNavigation>
            </Navigation>
          </div>
        </div>
      </Container>
    </JoinMembershipBanner>
    );
}

export default JoinMembership;