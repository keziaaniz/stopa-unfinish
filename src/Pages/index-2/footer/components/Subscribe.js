import React from 'react';


function Subscribe() {
  return (
    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
  <h4 className="mb-4">Subscribe us</h4>
  <div className="footer-subscribe">
    <p>Sign up to our newsletter to get the latest news and offers.</p>
    <form>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="Enter email"/>
      </div>
      <button type="submit" className="btn btn-primary"> <span> Get notified </span> </button>
    </form>
  </div>
</div>
    );
}

export default Subscribe;