import React from "react";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "../routes";
import { useAuthStore, useCartStore } from "../hooks";
import { Avatar } from "./Avatar";

const { HOME, SHOP, ABOUT, CAR } = publicRoutes;

function Navbar() {
  const { totalQuantity } = useCartStore();
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
          <img src="/images/logo.png" alt="logo" className="imgLogo" />

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
            <li className="nav-item dropdown">
              {authenticatedUser.name ? (
                <Avatar user={authenticatedUser} />
              ) : (
                <img
                  src="/images/user.svg"
                  className="nav-link dropdown-toggle "
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="dropdown"
                />
              )}
              <ul
                className="dropdown-menu"
                style={{ width: "200px", position: "absolute" }}
              >
                <li className="mx-3 cursor-pointer">Historial compras</li>
                <li className="mx-3 cursor-pointer">Cerrar Sesión</li>
              </ul>
            </li>



            <li
              style={{
                width: "40px",
                height: "40px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Link to={CAR}>
                <span
                  className="badge"
                  style={{

                    position: "absolute",
                    top: "0",
                    right: "0",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    zIndex: "1", 
                  }}
                >
                  {totalQuantity}
                </span>
                <img
                  src="/images/cart.svg"
                  style={{ position: "absolute", bottom: "10px", left: "10px" }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
