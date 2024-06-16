import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  
  const { productId } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/furniture/${productId}/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) =>
        console.error("Error al obtener los detalles del producto:", error)
      );
  }, [productId]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="col-md-9 col-sm-7 bg-light mb-4">
      <div className="sticker sticker-sale"></div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt="Model"
            className="img-fluid mb-4 tamañoItemDetail"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-0">{product.name}</h2>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="price color-text">
              <span>$./ </span>
              {product.price}
            </div>
            <div className="stock">
              Stock: <strong>{product.stock}</strong>
            </div>
          </div>
          <hr />
          <div className="description">
            <p>{product.description}</p>
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
