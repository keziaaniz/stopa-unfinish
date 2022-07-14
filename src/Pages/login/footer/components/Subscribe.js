import React from 'react';

function Subscribe() {
    return (    
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
  <div className="footer-link">
    <h5 className="text-white mb-4">Subscribe us</h5>
    <div className="footer-subscribe">
      <p className="text-white">Sign up to our newsletter to get the latest news and offers.</p>
      <form>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Enter email"/>
        </div>
        <button type="submit" className="btn btn-sm btn-primary"> <span> Get notified </span> </button>
      </form>
    </div>
  </div>
</div>
        );
    }
    
    export default Subscribe;