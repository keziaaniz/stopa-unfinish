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


function Blogs() {
  return (
    <div className="Blogs">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blogs <i className="fas fa-chevron-down fa-xs"></i>
        </a>
        <ul className="dropdown-menu">
          <li><DropItem  href="blog.html">Blogs</DropItem></li>
          <li><DropItem  href="blog-list.html">Blogs List</DropItem></li>
          <li><DropItem  href="blog-single.html">Blogs Single</DropItem></li>
        </ul>
      </li>
    </div>
  );
}

export default Blogs;