import React from 'react';
import styled from 'styled-components';

const DropItem = styled.a`
&:hover, &:focus {
  color: #da1d25;
background: none;}
&:active {
  background: none;
}
min-width: 180px;
@media only screen and (min-width: 992px) and (max-width: 1199px) {min-width: 140px; }
`;

function Home() {
  return (
    <div className="Home">
      <li className="nav-item dropdown active">
        <a className="nav-link" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home<i className="fas fa-chevron-down fa-xs"></i></a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><DropItem href="index.html">Home Default</DropItem></li>
          <li><DropItem href="index-yoga.html">Home Yoga</DropItem></li>
          <li><DropItem href="index-shop.html">Home Shop</DropItem></li>
          <li className="active"><a className="dropdown-item" href="../../Pages/index-2/Index-2.js">Home Dark</a></li>
        </ul>
      </li>
    </div>
  );
}

export default Home;