import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes } from '../../routes';

const {SHOP} = publicRoutes;

function Producto_section(){
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/furniture/"
        );
        const onlyThreeProducts = response.data.slice(0, 3);
        setProducts(onlyThreeProducts);

   
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProducts(); 
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

          {products.map((product, index) => (
            <div key={index} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
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

          {/* <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src="images/product-1.png"
                className="img-fluid product-thumbnail"
              ></img>
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">s/800.00</strong>

              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid"></img>
              </span>
            </a>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Producto_section;