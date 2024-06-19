import { useState } from "react";
import Hero from "../../cart/pages/Hero";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  useAuthStore,
  useCartStore,
  useMessageStore,
  usePayment,
} from "../../hooks";
import { typeMessage } from "../../store";

const CheckoutPage = () => {
  const {
    cart,
    totalAmount,
    totalQuantity,
    startClearingCart
  } = useCartStore();
  const { startSetMessages } = useMessageStore();
  const { authenticatedUser } = useAuthStore();
  const { startCreatePayment } = usePayment();
  useState(totalQuantity);

  const handlePlaceOrder = () => {
    if (!cart.length)
      return startSetMessages(["Your cart is empty"], typeMessage.ERROR);

    if (!authenticatedUser.name)
      return startSetMessages(
        ["You need to login to place an order"],
        typeMessage.ERROR
      );

    startCreatePayment({
      user: authenticatedUser.id,
      cart,
    });

    startClearingCart(); 
  };

  return (
    <>
      <Navbar />
      <Hero />
      <h2 className="h3 mb-3 text-black text-center mt-5">Your Order</h2>
      <div
        className="row mb-5 mx-auto"
        style={{
          maxWidth: "800px",
        }}
      >
        <div className="col-md-12">
          <div className="p-3 p-lg-5 border bg-white">
            <table className="table site-block-order-table mb-5">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.name} <strong className="mx-2">x</strong>{" "}
                      {item.quantity}
                    </td>
                    <td>S/.{item.price}</td>
                  </tr>
                ))}
                <tr>
                  <td className="text-black font-weight-bold">
                    <strong>Cart Subtotal</strong>
                  </td>
                  <td className="text-black">S/.{totalAmount}</td>
                </tr>
                <tr>
                  <td className="text-black font-weight-bold">
                    <strong>Order Total</strong>
                  </td>
                  <td className="text-black font-weight-bold">
                    <strong>S/.{totalAmount}</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="form-group">
              <button
                className="btn btn-black btn-lg py-3 btn-block"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
