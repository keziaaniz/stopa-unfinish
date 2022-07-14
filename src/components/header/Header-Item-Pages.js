import React from 'react';
import {PagesTitle, AnchorItem} from './Header-styles';


function Pages() {
  return (
    <div className="Pages">
      <li class="dropdown nav-item">
      <a href="properties.html" class="nav-link" data-bs-toggle="dropdown">Pages<i class="fas fa-chevron-down fa-xs"></i></a>
      <ul class="dropdown-menu megamenu dropdown-menu-md">
        <li>
          <div class="row">
            <div class="col-sm-6">
              <PagesTitle class="mb-3">Pages </PagesTitle>
              <ul class="list-unstyled mt-lg-3">
                <li><AnchorItem href="bmi-calculator.html">Bmi Calculator </AnchorItem></li>
                <li><AnchorItem href="about-us.html">About Us </AnchorItem></li>
                <li><AnchorItem href="our-trainers.html">Our Trainers</AnchorItem></li>
                <li><AnchorItem href="trainers-single.html">Trainers Single</AnchorItem></li>
                <li><AnchorItem href="services.html">Services</AnchorItem></li>
                <li><AnchorItem href="contact-us.html">Contact us</AnchorItem></li>
                <li><a href="../../Pages/login/Login.js">Login</a></li>
              </ul>
            </div>
            <div class="col-sm-6">
              <PagesTitle class="mb-3">Pages</PagesTitle>
              <ul class="list-unstyled mt-lg-3">
                <li><AnchorItem href="faqs.html">Faqs</AnchorItem></li>
                <li><AnchorItem href="pricing-plans.html">Pricing Plans</AnchorItem></li>
                <li><AnchorItem href="coming-soon.html">Coming soon</AnchorItem></li>
                <li><AnchorItem href="error.html">Error 404</AnchorItem></li>
                <li><AnchorItem href="privacy-policy.html">Privacy Policy</AnchorItem></li>
                <li><AnchorItem href="terms-and-conditions.html">T&C</AnchorItem></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </li>
    </div>
  );
}

export default Pages;