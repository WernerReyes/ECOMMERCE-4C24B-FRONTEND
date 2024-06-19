import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

import { apiPrivate } from "../config";

const CartTable = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    apiPrivate.get("http://127.0.0.1:8000/api/v1/user-orders")
      .then((response) => {
        setCartItems(response.data);
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
                <th className="product-thumbnail">Imagen</th>
                <th className="product-name">Nombre</th>
                <th className="product-price">Producto</th>
                <th className="product-quantity">Cantidad</th>
                <th className="product-total">Precio / Unidad</th>
                <th className="product-remove">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.slice(0, 4).map((item, index) => (
                  <CartItem
                    key={index}
                    imageSrc={item.product_image}
                    userName={item.first_name}
                    productName={item.product_name}
                    quantity={item.quantity}
                    priceUnidad={item.product_price}
                    priceTotal={item.total_price}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6">Aún no has realizado ninguna compra.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default CartTable;
