import React from "react";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../routes/publicRoute";
const {SHOP} = publicRoutes;

function Hero_home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>
                Estudio de Diseño de
                <span clsas="d-block"> Interiores Moderno</span>
              </h1>
              <p className="mb-4">
                Estudio de Diseño de Interiores Moderno: creando espacios
                elegantes y funcionales con un toque contemporáneo.
              </p>
              <p>
                <Link to={SHOP} className="btn btn-secondary me-2">
                  Compra ahora
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src="images/couch.png" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero_home;
