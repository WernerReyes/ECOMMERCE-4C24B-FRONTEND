import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav
      class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div class="container">
        <link class="navbar-brand" to="/">
          Furni<span>.</span>
        </link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsFurni">
          <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item ">
              <link class="nav-link" to="/">
                Home
              </link>
            </li>
            <li class="active">
              <link class="nav-link" to="/">
                Shop
              </link>
            </li>
            <li>
              <link class="nav-link" to="/">
                About us
              </link>
            </li>
            <li>
              <link class="nav-link" to="/">
                Services
              </link>
            </li>
          </ul>

          <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <link class="nav-link" to="/">
                <img src="images/user.svg" />
              </link>
            </li>
            <li>
              <link class="nav-link" to="/">
                <img src="images/cart.svg" />
              </link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
