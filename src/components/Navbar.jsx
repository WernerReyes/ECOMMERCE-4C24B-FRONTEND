import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "../routes";
import { CategoryService } from "../services/categoryService";

const { HOME, SHOP, ABOUT, PERFIL, CAR } = publicRoutes;

function Navbar() {
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

  const isActive = (path) => {
    return path === location.pathname ? "active" : "";
  };

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
      <div className="container">
        <Link to={HOME} className="navbar-brand">
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
                    <Link to={`/${category.name.toLowerCase()}`} className="dropdown-item text-dark">
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

            <li className={`nav-item ${isActive(PERFIL)}`}>
              <Link to={PERFIL} className="nav-link">
                Perfil
              </Link>
            </li>

            <li className={`nav-item ${isActive(CAR)}`}>
              <Link to={CAR} className="nav-link">
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

