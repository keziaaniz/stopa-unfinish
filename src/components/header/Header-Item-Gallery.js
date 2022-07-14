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

function Gallery() {
  return (
    <div className="Gallery">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Gallery <i className="fas fa-chevron-down fa-xs"></i>
        </a>
        <ul className="dropdown-menu">
          <li><DropItem  href="gallery-2-columns.html">gallery 2 columns</DropItem></li>
          <li><DropItem  href="gallery-3-columns.html">gallery 3 columns</DropItem></li>
          <li><DropItem  href="gallery-4-columns.html">gallery 4 columns</DropItem></li>
          <li><DropItem  href="gallery-5-columns.html">gallery 5 columns</DropItem></li>
          <li><DropItem  href="gallery-6-columns.html">gallery 6 columns</DropItem></li>
          <li><DropItem  href="gallery-single.html">gallery single</DropItem></li>
        </ul>
      </li>
    </div>
  );
}

export default Gallery;