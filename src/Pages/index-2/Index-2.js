import React from 'react';
import Header from '../../components/header/Header';
import Banner from './banner/banner';
import Features from './Features/Features';
import About from './About/About';
import Classes from './Classes/Classes';
import BMI from './BMI/BMI';
import Testimonial from './Testimonial/Testimonial';
import Blog from './About/About';
import ClientLogo from './Client-Logo/ClientLogo';
import Footer from './footer/footer';
import BackToTop from '../../components/back-to-top/Back-To-Top';

function Index2() {
  return (
    <div className="Index2">
      <Header/>
      <Banner/>
      <Features/>
      <About/>
      <Classes/>
      <BMI/>
      <Testimonial/>
      <Blog/>
      <ClientLogo/>
      <Footer/>
      <BackToTop/>
    </div>
        
    );
}

export default Index2;