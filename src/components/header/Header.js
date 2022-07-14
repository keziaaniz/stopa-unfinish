import React from 'react';
import Pages from './Header-Item-Pages';
import Home from './Header-Item-Home';
import Classes from './Header-Item-Classes';
import Gallery from './Header-Item-Gallery';
import Blogs from './Header-Item-Blogs';
import Shop from './Header-Item-Shop';


function Header() {
  return (
      <header className="header header-transparent default">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-static-top navbar-expand-lg header-sticky">
                        <a class="navbar-brand" href="index.html"><img class="img-fluid logo" src="images/logo.svg" alt="logo"></img></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarmenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-align-left"></i>
                        </button>
                        <div class="navbar-collapse collapse justify-content-center" id="navbarmenu">
                          <ul class="nav navbar-nav">
                            <Home class="nav-item dropdown active"></Home>
                            <Pages class="dropdown nav-item" ></Pages>
                            <Classes class="nav-item dropdown"></Classes>
                            <Gallery class="nav-item dropdown"></Gallery>
                            <Blogs class="nav-item dropdown"></Blogs>
                            <Shop class="nav-item dropdown"></Shop>
                          </ul>
                        </div>
                        <div class="add-listing d-none d-sm-block">
                          <a class="btn btn-primary btn-skew btn-md shape-svg" href="our-trainers.html">
                            <span>Membership</span>
                          </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
      </header>
  );
}

export default Header;
