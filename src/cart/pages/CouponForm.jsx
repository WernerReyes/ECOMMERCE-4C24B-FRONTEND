import React from "react";

const CouponForm = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <label className="text-black h4" htmlFor="coupon">
          Cupon
        </label>
        <p>Ingrese su código de cupón si tiene uno</p>
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
        <button className="btn btn-black">Aplicar cupon</button>
      </div>
    </div>
  );
};

export default CouponForm;
