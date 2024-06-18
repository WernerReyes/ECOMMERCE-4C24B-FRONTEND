import React from "react";

const CartItem = ({ imageSrc, productName, price, quantity, total }) => {
  return (
    <tr>
      <td className="product-thumbnail">
        <img src={imageSrc} alt="Image" className="img-fluid" />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">{productName}</h2>
      </td>
      <td>{price}</td>
      <td>
        <div
          className="input-group mb-3 d-flex align-items-center quantity-container"
          style={{ maxWidth: "120px" }}
        >
          <div className="input-group-prepend">
            <button className="btn btn-outline-black decrease" type="button">
              &minus;
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center quantity-amount"
            value={quantity}
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-black increase" type="button">
              +
            </button>
          </div>
        </div>
      </td>
      <td>{total}</td>
      <td>
        <a href="#" className="btn btn-black btn-sm">
          X
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
