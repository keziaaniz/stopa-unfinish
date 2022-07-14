import React from 'react';

function FooterBottom() {
  return (
    <div className="footer-bottom mt-0">
  <div className="row align-items-center">
    <div className="col-md-6 text-center text-md-left">
      <p className="mb-0"> &copy;Copyright <span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> <a href="#"> Fitness </a> All Rights Reserved </p>
    </div>
    <div className="col-md-6 text-center text-md-right">
      <ul className="list-unstyled list-inline mb-0">
        <li className="list-inline-item"><a href="/#">Terms & Conditions</a></li>
        <li className="list-inline-item"><a href="/#">API Use Policy</a></li>
        <li className="list-inline-item"><a href="/#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
</div>
    );
}

export default FooterBottom;