import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { publicRoutes } from "../routes";

const { HOME, SHOP, ABOUT, SERVICES, BLOG, CONTACT, PERFIL, CAR} = publicRoutes;

function Navbar() {
  return (
    <nav
      class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div class="container">
        <a class="navbar-brand" href="index.html">
          Furni<span>.</span>
        </a>

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
              <Link to={HOME} class="nav-link">
                Home
              </Link>
              {/* <L class="nav-link" href="index.html">Home</a> */}
            </li>
            {/* <li class="active"><a class="nav-link" href="shop.html">Shop</a></li>
						<li><a class="nav-link" href="about.html">About us</a></li>
						<li><a class="nav-link" href="services.html">Services</a></li>
						<li><a class="nav-link" href="blog.html">Blog</a></li>
						<li><a class="nav-link" href="contact.html">Contact us</a></li> */}
            <li class="nav-item ">
              <Link to={SHOP} class="nav-link">
                Shop
              </Link>
            </li>
            <li class="nav-item ">
              <Link to={ABOUT} class="nav-link">
                About us
              </Link>
            </li>
            <li class="nav-item ">
              <Link to={SERVICES} class="nav-link">
                Services
              </Link>
            </li>
            <li class="nav-item ">
              <Link to={BLOG} class="nav-link">
                Blog
              </Link>
            </li>

            <li class="nav-item ">
              <Link to={CONTACT} class="nav-link">
                Contact us
              </Link>
            </li>
          </ul>

          <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link to={PERFIL} >
                <img src="images/user.svg" />
              </Link>
            </li>
            <li>
              <Link to={CAR} >
                <img src="images/cart.svg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

