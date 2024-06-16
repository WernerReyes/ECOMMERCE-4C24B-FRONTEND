import { useEffect, useState } from "react";
import { useCartStore } from "../hooks";

export const AddAndRemoveFromCart = ({
  furnitureDetail,
  showAddButton = false,
}) => {
  const { startAddingToCart, startRemovingFromCart, cart, totalQuantity } =
    useCartStore();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    startAddingToCart(furnitureDetail);
  };

  const handleRemoveFromCart = () => {
    startRemovingFromCart(furnitureDetail);
  };

  useEffect(() => {
    const quantity =
      cart.find((item) => item.id === furnitureDetail.id)?.quantity || 0;
    if (quantity >= 0) setQuantity(quantity);
  }, [furnitureDetail, cart]);

  return (
    <>
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
        <span className="form-control text-center quantity-amount">
          {quantity}
        </span>
        <div className="input-group-append">
          <button
            className="btn btn-outline-black increase"
            onClick={handleAddToCart}
            type="button"
            disabled={totalQuantity >= 20 || quantity >= furnitureDetail.stock}
          >
            +
          </button>
        </div>
      </div>
      {showAddButton && (
        <div className="btn-addCar">
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn btn-primary addCar"
            disabled={totalQuantity >= 20 || quantity >= furnitureDetail.stock}
          >
            Agregar
          </button>
        </div>
      )}
    </>
  );
};
