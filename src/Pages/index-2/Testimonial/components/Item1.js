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



function Item1() {
  return (
    <div className="item">
  <div className="testimonial text-center">
     <div className="testimonial-image mb-4">
        <Img className="img-fluid avatar avatar-xll rounded-circle mx-auto" src="../../../../images/avatar/01.jpg" alt=""/>
     </div>
      <div className="testimonial-dec">
        <p className="lead ps-4">We've seen amazing results already. Since I invested in Fitness I made over 100,000 dollars profits. It's the perfect solution for our business. I was amazed at the quality of Fitness.</p>
      </div>
      <div className="testimonial-author mt-4">
        <TitleAuthor >- Anny B.</TitleAuthor>
        <SpanAuthor>Fitness Trainer</SpanAuthor>
      </div>
  </div>
</div>
    );
}

export default Item1;