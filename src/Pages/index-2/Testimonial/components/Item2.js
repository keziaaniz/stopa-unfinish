import React from 'react';
import styled from 'styled-components';

const SpanAuthor = styled.span`
color: rgba(255, 255, 255, 0.5);
`;

const TitleAuthor = styled.h6`
font-family: "Teko", sans-serif;
font-weight: normal;
color: #333333;
margin-top: 0px;
font-weight: 600;
text-transform: uppercase; 
font-size: 18px;
color: #da1d25 !important;
@media (max-width: 767px) {font-size: 17px; }
`;

const Img = styled.img`
width: 100px;
height: 100px;
`;

function Item2() {
  return (
    <div className="item">
  <div className="testimonial text-center">
     <div className="testimonial-image mb-4">
        <Img className="img-fluid avatar avatar-xll rounded-circle mx-auto" src="../../../../images/avatar/02.jpg" alt=""/>
     </div>
      <div className="testimonial-dec">
        <p className="lead ps-4">I love your system. Nice work on your Fitness. Great job, I will definitely be ordering again! I would like to personally thank you for your outstanding product.</p>
      </div>
      <div className="testimonial-author mt-4">
        <TitleAuthor className="text-primary">- Gertrud Z.</TitleAuthor>
        <SpanAuthor>Yoga Trainer</SpanAuthor>
      </div>
  </div>
</div>
    );
}

export default Item2;