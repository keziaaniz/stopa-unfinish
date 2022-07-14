import React from 'react';
import Header from '../../components/header/Header';
import Banner from './Banner-Login/banner';
import Login from './Login/Login-login';
import Footer from './footer/footer';
import BackToTop from '../../components/back-to-top/Back-To-Top';


function LoginPage() {
  return (
    <div className="Login">
      <Header/>
      <Banner/>
      <Login/>
      <Footer/>
      <BackToTop/>
    </div>
        
    );
}

export default LoginPage;