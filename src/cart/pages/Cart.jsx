import React from "react";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import CouponForm from "./CouponForm";

const Cart = () => {
  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
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
                    image="images/product-1.png"
                    name="Product 1"
                    price="49.00"
                    quantity="1"
                    total="49.00"
                  />
                  <CartItem
                    image="images/product-2.png"
                    name="Product 2"
                    price="49.00"
                    quantity="1"
                    total="49.00"
                  />
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-black btn-sm btn-block">
                  Update Cart
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-black btn-sm btn-block">
                  Continue Shopping
                </button>
              </div>
            </div>
            <CouponForm />
          </div>
          <div className="col-md-6 pl-5">
            <CartTotals subtotal="230.00" total="230.00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
