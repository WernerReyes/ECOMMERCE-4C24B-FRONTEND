import React from "react";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "../routes";
import { useAuthStore } from "../hooks";
import { Avatar } from "./Avatar";

const { HOME, SHOP, ABOUT, SERVICES, BLOG, CONTACT, PERFIL, CAR } =
  publicRoutes;

function Navbar() {
  const { authenticatedUser } = useAuthStore();
  const location = useLocation();
  const isActive = (path) => {
    return path === location.pathname ? "active" : "";
  };

  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <Link to={HOME} className="navbar-brand bg-body p-3 rounded-circle">
          <img src="images/logo.png" alt="logo" className="imgLogo" />
          <span>.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${isActive(HOME)}`}>
              <Link to={HOME} className="nav-link">
                Inicio
              </Link>
              {/* <L class="nav-link" href="index.html">Home</a> */}
            </li>
            {/* <li class="active"><a class="nav-link" href="shop.html">Shop</a></li>
              <li><a class="nav-link" href="about.html">About us</a></li>
              <li><a class="nav-link" href="services.html">Services</a></li>
              <li><a class="nav-link" href="blog.html">Blog</a></li>
              <li><a class="nav-link" href="contact.html">Contact us</a></li> */}
            <li className={`nav-item ${isActive(SHOP)}`}>
              <Link to={SHOP} className="nav-link">
                Tienda
              </Link>
            </li>
            <li className={`nav-item ${isActive(ABOUT)}`}>
              <Link to={ABOUT} className="nav-link">
                Nosotros
              </Link>
            </li>
            <li className={`nav-item ${isActive(SERVICES)}`}>
              <Link to={SERVICES} className="nav-link">
                Servicios
              </Link>
            </li>
            <li className={`nav-item ${isActive(BLOG)}`}>
              <Link to={BLOG} className="nav-link">
                Blog
              </Link>
            </li>

            <li className={`nav-item ${isActive(CONTACT)}`}>
              <Link to={CONTACT} className="nav-link">
                Contactanos
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              {authenticatedUser.name ? (
                <Avatar user={authenticatedUser} />
              ) : (
                <img src="images/user.svg" />
              )}
            </li>
            <li>
              <Link to={CAR}>
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
