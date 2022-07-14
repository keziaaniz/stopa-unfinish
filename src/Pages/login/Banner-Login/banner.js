
import {Container } from '../../styles';

function Banner() {
  return (
    <div className="Banner">
        <section className="inner-banner bg-holder bg-overlay-black-70" data-jarallax='{"speed": 0.6}' style="background-image: url(images/bg/06.jpg);">
          <Container>
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h1 className="text-primary display-3 font-weight-bold text-uppercase">Login</h1>
                <p className="text-white lead mb-0">Create more robust client connections, make more sales, and save time with our end to end solution.</p>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Login</li>
                  </ol>
                </nav>
              </div>
            </div>
          </Container>
          <svg className="banner-shape" xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 1920 70">
            <path className="cls-1" d="M0,0L1920,60V70H0V0Z"/>
          </svg>
        </section>
    </div>
        
    );
}

export default Banner;