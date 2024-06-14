import React from "react";

const ProductDetails = () => {
  return (
    <div className="col-md-9 col-sm-7 bg-light mb-4">
      <div className="sticker sticker-sale"></div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="images/product-2.png"
            alt="Model"
            className="img-fluid mb-4"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-0">Nombre del mueble</h2>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="price color-text">
              <span>$</span>47.00
            </div>
            <div className="stock">
              Disponibilidad: <strong>En stock</strong>
            </div>
          </div>
          <hr />
          <div className="description">
            <p>
              Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy
              nibh sed euismod laoreet dolore magna aliquarm erat volutpat
              Nostrud duis molestie at dolore.
            </p>
          </div>
          <hr />
          <div className="d-flex">
            <div className="input-group mb-3 d-flex align-items-center quantity-container mx-3">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-black increase"
                  type="button"
                >
                  -
                </button>
              </div>
              <input
                type="text"
                className="form-control text-center quantity-amount"
                value="1"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-black increase"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
            <div className="btn-addCar">
              <button type="submit" className="btn btn-primary addCar">
                Agregar
              </button>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">☆</span>
            </div>
            <div className="stock">Calificaciones</div>
          </div>
          <hr />
          <div className="icons"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
