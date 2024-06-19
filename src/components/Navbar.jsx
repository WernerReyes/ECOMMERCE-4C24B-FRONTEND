import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { publicRoutes } from "../routes";
import { useAuthStore, useCartStore } from "../hooks";
import { Avatar } from "./Avatar";
import { CategoryService } from "../services/categoryService";

const { HOME, SHOP, ABOUT, LOGIN, CAR, CATEGORY } = publicRoutes;

function Navbar({ currentTotalQuantity }) {
  const navigate = useNavigate();
  const { totalQuantity } = useCartStore();
  const { authenticatedUser } = useAuthStore();
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const categoryService = new CategoryService();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await categoryService.getCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const isActive = (path) => (path === location.pathname ? "active" : "");

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
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

            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Categorías
              </a>
              <ul className="dropdown-menu">
                {categories.map((category) => (
                  <li key={category.category_id}>
                    <Link to={`${CATEGORY}/${category.category_id}`} className="dropdown-item text-dark">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className={`nav-item ${isActive(ABOUT)}`}>
              <Link to={ABOUT} className="nav-link">
                Nosotros
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              {authenticatedUser.name ? (
                <Avatar user={authenticatedUser} />
              ) : (
                <img
                  src="/images/user.svg"
                  className="nav-link dropdown-toggle "
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(LOGIN)}
                />
              )}
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
                  {currentTotalQuantity ?? totalQuantity}
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


