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

function Shop() {
  return (
    <div className="Shop">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop <i class="fas fa-chevron-down fa-xs"></i>
        </a>
        <ul class="dropdown-menu">
          <li><DropItem href="shop.html">Shop</DropItem></li>
          <li><DropItem href="shop-single.html">Shop Single</DropItem></li>
          <li><DropItem href="shop-cart.html">Shop Cart</DropItem></li>
          <li><DropItem href="shop-checkout.html">Shop Checkout</DropItem></li>
        </ul>
      </li>
    </div>
  );
}

export default Shop;