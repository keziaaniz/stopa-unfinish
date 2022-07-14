import styled from 'styled-components';
import '../styles/styles.css';
import {Container} from '../../../styles';


const Slide1 = styled.div`
    background-image: url('../../../../images/slider/02.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%; 
`;

const Slide2 = styled.div`
    background-image: url('../../../../images/slider/04.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%; 
`;

const Text2 = styled.h2`
    font-family: "Teko", sans-serif;
    font-weight: normal;
    color: #ffffff;
    margin-top: 0px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 90px;
    line-height: 90px;

    @media (max-width: 991px) {
        font-size: 70px;
        line-height: 70px; }

    @media (max-width: 767px) {
        font-size: 50px;
        line-height: 50px; }

    @media (max-width: 575px) {
        font-size: 40px;
        line-height: 40px; }
`;

const Text1 = styled.h1`
    font-family: "Teko", sans-serif;
    font-weight: normal;
    color: #ffffff;
    margin-top: 0px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 176px;
    line-height: 176px;

    @media (max-width: 991px) {
          font-size: 150px;
          line-height: 150px; }

    @media (max-width: 767px) {
        font-size: 120px;
        line-height: 120px; }

    @media (max-width: 575px) {
        font-size: 80px;
        line-height: 80px; }
`;

const Textp = styled.p`
    color: #ffffff;
    text-transform: uppercase;
    font-weight: normal;
    line-height: 24px;
    font-size: 16px;

    @media (max-width: 575px) {
        display: none; }
`;


const BannerContent = styled.div`
    padding: 240px 0 260px 0px;

    @media (max-width: 991px) {
        padding: 180px 0 180px 0px; }

    @media (max-width: 767px) {
        padding: 140px 0 200px 0px; }
`;

function SwiperWrapper() {
  return (
    <div className="swiper-wrapper">
      <Slide1 className="swiper-slide">
        <Container className="container">
         <div className="row">
           <div className="col-xl-7 col-lg-8 col-sm-10">
             <BannerContent>
               <Text2 className="text-uppercase  mb-3" data-swiper-animation="fadeInLeft" data-duration="2.0s" data-delay="0.5s">Where health, </Text2>
               <Text1 className="text-uppercase  banner-title" data-swiper-animation="fadeInLeft" data-duration="2.0s" data-delay="1.0s">beauty,</Text1>
               <Text2 className="text-uppercase " data-swiper-animation="fadeInLeft" data-duration="2.0s" data-delay="1.5s">and <span className="text-primary">fitness</span> meet.</Text2>
               <Textp className="lead mb-0" data-swiper-animation="fadeInLeft" data-duration="2.0s" data-delay="2.0s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</Textp>
             </BannerContent>
           </div>
         </div>
        </Container>
      </Slide1>
      <Slide2 className="swiper-slide" >
        <Container className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-sm-10">
              <BannerContent>
                <Text2 className="text-uppercase  mb-3" data-swiper-animation="fadeInLeft" data-duration="2.0s" data-delay="0.5s">Get In. </Text2>
                <Text1 className="text-uppercase  banner-title" data-swiper-animation="fadeInLeft" data-duration="2.0s" data-delay="1.0s">Get Fit.</Text1>
                <Text2 className="text-uppercase " data-swiper-animation="fadeInLeft" data-duration="2.0s" data-delay="1.5s">Get on with <span className="text-primary">Life.</span> </Text2>
                <Textp className="lead mb-0" data-swiper-animation="fadeInLeft" data-duration="2.0s" data-delay="2.0s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</Textp>
              </BannerContent>
            </div>
          </div>
        </Container>
      </Slide2>
    </div>
    );
}

export default SwiperWrapper;