import styled from 'styled-components';
import SwiperWrapper from './components/swiper-wrapper';
import JoinMembership from './components/JoinMembership';
import Social from './components/Social';
import './styles/styles.css';

const Dark = styled.section`
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%; 
`;

function Banner() {
  return (
      <Dark className="banner-dark">
          <div className="swiper-container">
            <SwiperWrapper/>
            <JoinMembership/>
            <Social/>
          </div>
      </Dark>
    );
}

export default Banner;