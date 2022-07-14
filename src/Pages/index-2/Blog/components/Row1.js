
import React from 'react';


function Row1() {
  return (
    <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
  <div className="blog-post blog-post-dark text-center">
    <div className="blog-post-image">
      <img className="img-fluid" src="images/blog/01.jpg" alt=""/>
    </div>
    <div className="blog-post-content">
      <div className="blog-post-categorise justify-content-center">
        <ul className="list-unstyled mb-0 blog-post-meta text-center">
          <li><a href="/#">by Sara Lisbon</a></li>
          <li><a href="/#">May 26, 2021 </a></li>
          <li><a href="/#">01</a></li>
        </ul>
      </div>
      <div className="blog-post-title mt-4">
        <h4><a href="/#">AT HOME AB WORKOUT</a></h4>
      </div>
      <p className="mt-3 mb-0">Reflect and experiment until you find the right combination of motivators for...</p>
      <a className="mt-3 d-block btn-link" href="/#">Reaad More</a>
    </div>
  </div>
</div>
);
}

export default Row1;