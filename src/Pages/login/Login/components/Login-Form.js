import React from 'react';


function LoginForm() {
    return (    
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <form className="form-row row mt-4 align-items-center">
    <div className="form-group col-sm-12">
      <input type="text" className="form-control" placeholder="Username"/>
    </div>
    <div className="form-group col-sm-12">
      <input type="Password" className="form-control" placeholder="Password"/>
    </div>
    <div className="col-6 d-grid">
      <button type="submit" className="btn btn-primary btn-block">Sign up</button>
    </div>
    <div className="col-6">
      <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
        <li className="me-1"><a className="text-dark" href="#"><b>Already Registered User? Click here to login</b></a></li>
      </ul>
    </div>
  </form>
</div>    
        );
    }
    
    export default LoginForm;