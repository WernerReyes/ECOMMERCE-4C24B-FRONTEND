import React from "react";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "../routes";

const { HOME, SHOP, ABOUT, PERFIL, CAR } = publicRoutes;

function Navbar() {
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
        <Link to={HOME} className="navbar-brand">
          <img src="../../images/logo.png" alt="logo" className="imgLogo" />
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
            </li>

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
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link to={PERFIL}>
                <img src="../../images/user.svg" />
              </Link>
            </li>
            <li>
              <Link to={CAR}>
                <img src="../../images/cart.svg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
