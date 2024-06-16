import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart, useFurnitureStore } from "../../hooks";

const ProductDetails = () => {
  const { productId } = useParams();
  const { startLoadingFurnitureDetail, furnitureDetail, isLoading } =
    useFurnitureStore();
  const { startAddingToCart, startRemovingFromCart, cart, totalQuantity } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    startAddingToCart(furnitureDetail);
  };

  const handleRemoveFromCart = () => {
    startRemovingFromCart(furnitureDetail);
  };

  useEffect(() => {
    startLoadingFurnitureDetail(productId);
  }, [productId]);

  useEffect(() => {
    console.log(cart);
    const quantity = cart.find((item) => item.id === furnitureDetail.id)?.quantity || 0;
    if (quantity >= 0) setQuantity(quantity);
    console.log(quantity);
  }, [furnitureDetail, cart]);

  if (isLoading) return <div>Cargando...</div>;

  return (
    <div className="col-md-9 col-sm-7 bg-light mb-4">
      <div className="sticker sticker-sale"></div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src={furnitureDetail.image}
            alt="Model"
            className="img-fluid mb-4 tamañoItemDetail"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-0">{furnitureDetail.name}</h2>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="price color-text">
              <span>$./ </span>
              {furnitureDetail.price}
            </div>
            <div className="stock">
              Stock: <strong>{furnitureDetail.stock}</strong>
            </div>
          </div>
          <hr />
          <div className="description">
            <p>{furnitureDetail.description}</p>
          </div>
          <hr />
          <div className="d-flex">
            <div className="input-group mb-3 d-flex align-items-center quantity-container mx-3">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-black increase"
                  onClick={handleRemoveFromCart}
                  type="button"
                >
                  -
                </button>
              </div>
              <span
                
                className="form-control text-center quantity-amount"
               
              >
                {quantity}
              </span>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-black increase"
                  onClick={handleAddToCart}
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
