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


function Classes() {
  return (
    <div className="Classes">
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Classes <i class="fas fa-chevron-down fa-xs"></i>
      </a>
      <ul className="dropdown-menu">
        <li><DropItem href="classes.html">classes</DropItem></li>
        <li><DropItem href="classes-single.html">classes Single</DropItem></li>
        <li><DropItem href="classes-timetable.html">classes Timetable</DropItem></li>
        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#">Dropdown <i class="fas fa-chevron-right fa-xs"></i></a>
          <ul className="dropdown-menu">
          <li><DropItem  href="/#">Submenu</DropItem></li>
          <li><DropItem  href="/#">Submenu</DropItem></li>
          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#">Submenu 01 <i class="fas fa-chevron-right fa-xs"></i></a>
            <ul className="dropdown-menu">
              <li><DropItem href="/#">Subsubmenu 01</DropItem></li>
              <li><DropItem href="/#">Subsubmenu 01</DropItem></li>
            </ul>
          </li>
          <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#">Submenu 02 <i class="fas fa-chevron-right fa-xs"></i></a>
            <ul className="dropdown-menu">
              <li><DropItem  href="/#">Subsubmenu 02</DropItem></li>
              <li><DropItem  href="/#">Subsubmenu 02</DropItem></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
    </div>
  );
}

export default Classes;