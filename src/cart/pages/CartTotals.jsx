import React from "react";

const CartTotals = ({ subtotal, total }) => {
  return (
    <div className="row justify-content-end">
      <div className="col-md-7">
        <div className="row">
          <div className="col-md-12 text-right border-bottom mb-5">
            <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <span className="text-black">Subtotal</span>
          </div>
          <div className="col-md-6 text-right">
            <strong className="text-black">${subtotal}</strong>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <span className="text-black">Total</span>
          </div>
          <div className="col-md-6 text-right">
            <strong className="text-black">${total}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-black btn-lg py-3 btn-block"
              onClick={() => (window.location.href = "checkout.html")}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
