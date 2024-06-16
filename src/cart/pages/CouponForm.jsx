import React from "react";

const CouponForm = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <label className="text-black h4" htmlFor="coupon">
          Coupon
        </label>
        <p>Enter your coupon code if you have one.</p>
      </div>
      <div className="col-md-8 mb-3 mb-md-0">
        <input
          type="text"
          className="form-control py-3"
          id="coupon"
          placeholder="Coupon Code"
        />
      </div>
      <div className="col-md-4">
        <button className="btn btn-black">Apply Coupon</button>
      </div>
    </div>
  );
};

export default CouponForm;
