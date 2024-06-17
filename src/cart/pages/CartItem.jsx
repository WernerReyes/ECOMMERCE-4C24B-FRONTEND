import React from "react";
import { AddAndRemoveFromCart } from "../../components";
import { useCartStore } from "../../hooks";

const CartItem = ({ id, image, name, price, quantity, total }) => {
  const { startDeletingFromCart } = useCartStore();

  const handleDelete = () => {
    startDeletingFromCart(id);
  };

  return (
    <tr>
      <td className="product-thumbnail">
        <img src={image} alt={name} className="img-fluid" />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">{name}</h2>
      </td>
      <td>${price}</td>
      <td>
        <AddAndRemoveFromCart
          furnitureDetail={{ id, image, name, price, quantity }}
        />
      </td>
      <td>${total}</td>
      <td>
        <button onClick={handleDelete} className="btn btn-primary">
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
