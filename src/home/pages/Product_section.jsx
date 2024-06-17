import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../routes';
import { useFurnitureStore } from '../../hooks';

const {SHOP} = publicRoutes;

function Producto_section(){
  const { startLoadingFurniture, furniture, isLoading } = useFurnitureStore();

  useEffect(() => {
    startLoadingFurniture();
  }, []);

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">
              Elaborado con excelente material.
            </h2>
            <p className="mb-4">
              Elaborado con excelente material, garantizando durabilidad y
              calidad superior en cada pieza. Diseños elegantes que transforman
              tus espacios con estilo y funcionalidad.
            </p>
            <p>
              <a href="#" className="btn">
                Explore
              </a>
            </p>
          </div>

          {!isLoading &&
            furniture.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
              >
                <Link className="product-item" to={SHOP}>
                  <img
                    src={product.image}
                    className="img-fluid product-thumbnail imagesize"
                  ></img>
                  <h3 className="product-title">{product.name}</h3>
                  <strong className="product-price">s/{product.price}</strong>

                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid"></img>
                  </span>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Producto_section;