import React from 'react';


function FooterBottom() {
    return (    
        <div className="footer-bottom mt-0">
  <div className="row align-items-center">
    <div className="col-md-3 text-center text-md-start">
      <a className="footer-logo" href="index.html">
        <img className="img-fluid logo" src="images/logo.svg" alt="logo"/>
      </a>
    </div>
    <div className="col-md-5 text-center text-md-left my-2 my-md-0">
      <p className="mb-0 text-white"> &copy;Copyright <span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> <a href="#">Fitness </a> All Rights Reserved </p> 
    </div>
    <div className="col-md-4 text-center text-md-right">
      <ul className="list-unstyled list-inline mb-0">
        <li className="list-inline-item"><a className="text-white" href="/#">Terms & Conditions</a></li>
        <li className="list-inline-item"><a className="text-white" href="/#">API Use Policy</a></li>
        <li className="list-inline-item"><a className="text-white" href="/#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</div>
        );
    }
    
    export default FooterBottom;