import React from "react";
import { useCartStore, useWindowSize } from "../../hooks";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import clsx from "clsx";

const Cart = () => {
  const { width, md } = useWindowSize();
  const { cart, isLoading, totalAmount } = useCartStore();
  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Imagen</th>
                    <th className="product-name">Producto</th>
                    <th className="product-price">Precio</th>
                    <th className="product-quantity">Cantidad</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {!isLoading && cart.length ? (
                    cart.map((item) => (
                      <CartItem
                        {...item}
                        key={item.id}
                        total={item.quantity * Number(item.price)}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">Cart is empty</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="d-flex justify-content-end">
          <div className={clsx( width <= md ? "w-100" : "w-50" )}>
            <CartTotals subtotal={totalAmount} total={totalAmount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
