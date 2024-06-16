import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFurnitureStore } from "../../hooks";
import { publicRoutes } from "../../routes";

const { DETAILPRODUCT } = publicRoutes;

function ProductSection() {
  const { furniture, isLoading, startLoadingFurniture } = useFurnitureStore();

  useEffect(() => {
    startLoadingFurniture();
  }, []);

  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {!isLoading &&
            furniture.map((product, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-3 mb-5">
                <div className="product-item">
                  <Link className="product-item" to={DETAILPRODUCT}>
                    <img
                      src={product.image}
                      className="img-fluid product-thumbnail tamañoItem"
                      alt={product.name}
                    />

                    <h3 className="product-title">{product.name}</h3>
                    <strong className="product-price">
                      $./ {product.price}
                    </strong>

                    <div className="product-action">
                      <span className="icon-cross">
                        <img
                          src="images/cross.svg"
                          className="img-fluid"
                          alt="cross"
                        />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
