import React from "react";

const ProductImage = () => {
  return (
    <div className="col-md-3 col-sm-5 mb-4 mt-4">
      <h4 className="mb-4">LOS MÁS VENDIDOS</h4>
      <div className="product-list">
        <div className="row product-item mb-2">
          <div className="col-4">
            <img
              src="/images/product-1.png"
              alt="Product Image 1"
              className="img-fluid"
            />
          </div>
          <div className="col-8">
            <p className="p-0 mb-0">NOMBRE DEL PRODUCTO</p>
            <i className="text-danger text-danger ">$31.00</i>
          </div>
        </div>
        <hr />
        <div className="row product-item mb-2">
          <div className="col-4">
            <img
              src="/images/product-3.png"
              alt="Product Image 1"
              className="img-fluid"
            />
          </div>
          <div className="col-8">
            <p className="p-0 mb-0">NOMBRE DEL PRODUCTO</p>
            <i className="iroduct-price text-danger">$31.00</i>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProductImage;
