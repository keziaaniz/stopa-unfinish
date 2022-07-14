import React from 'react';
import {Section, Container }from '../../styles';




function ClientLogo() {
  return (
    <Section >
      <Container>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="owl-carousel owl-nav-center" data-animateOut="fadeOut" data-nav-dots="false" data-items="6" data-md-items="5" data-sm-items="4" data-xs-items="3" data-xx-items="2" data-space="50">
              <div className="item">
                <a href="/#"><img className="img-fluid" src="../../../../images/clients/01.png" alt=""/></a>
              </div>
               <div className="item">
                <a href="/#"><img className="img-fluid" src="../../../../images/clients/02.png" alt=""/></a>
              </div>
              <div className="item">
                <a href="/#"><img className="img-fluid" src="../../../../images/clients/03.png" alt=""/></a>
              </div>
              <div className="item">
                <a href="/#"><img className="img-fluid" src="../../../../images/clients/04.png" alt=""/></a>
              </div>
              <div className="item">
                <a href="/#"><img className="img-fluid" src="../../../../images/clients/05.png" alt=""/></a>
              </div>
              <div className="item">
                <a href="/#"><img className="img-fluid" src="../../../../images/clients/06.png" alt=""/></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>

    );
}

export default ClientLogo;
