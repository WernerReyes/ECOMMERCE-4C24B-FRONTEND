import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Axios from "axios"; // Corregido aquí

const CartTable = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/v1/user-orders")
      .then((response) => {
        // Asumiendo que la respuesta es un array de productos
        setCartItems(response.data);
        console.log(response.data);
      })
      .catch((error) =>
        console.error("Error al cargar los datos del carrito:", error)
      );
  }, []);

  console.log(cartItems);

  return (
    <div className="container mt-4">
      <form className="col-md-12" method="post">
        <div className="site-blocks-table">
          <table className="table">
            <thead>
              <tr>
                <th className="product-thumbnail">Image</th>
                <th className="product-name">Product</th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-total">Total</th>
                <th className="product-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              <CartItem
                imageSrc="images/product-1.png"
                productName="Product 1"
                price="$49.00"
                quantity="1"
                total="$49.00"
              />
              <CartItem
                imageSrc="images/product-2.png"
                productName="Product 2"
                price="$49.00"
                quantity="1"
                total="$49.00"
              />
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default CartTable;
