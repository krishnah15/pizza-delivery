import React from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import axios from "axios";
import { userReq } from "../reqMethods";
import useRazorpay from "react-razorpay";
import toast, { Toaster } from "react-hot-toast";

export function MainCart({ orderItems, map }) {
  const cart = useSelector((state) => state.user.cart);
  const Razorpay = useRazorpay();

  const handleCheckout = async () => {
    const orderRes = (
      await userReq.post("/order/addOrder", {
        totalPrice: cart.totalPrice,
      })
    ).data;

    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: "3000",
      currency: "INR",
      name: "Pizzalicious",
      description: "Delicious pizza delivered hot to your door. Order now!",
      image: "https://www.freeiconspng.com/thumbs/pizza-icon/pizza-icon-26.jpg",
      order_id: orderRes.id,
      handler: (res) => {
        console.log(res);
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      handler: (res) => {
        toast.success("Order successfully placed!", {
          duration: 2000,
        });
      },
      theme: {
        color: "#D62828",
      },
    };

    const rzpy = new Razorpay(options);
    rzpy.open();
  };
  return (
    <div className="cart">
      <div className="cartNav">
        <h3 className="cartNavHead">CART</h3>
      </div>

      <div className="cartDiv">
        {cart?.orderItems.map((pizza, index) => (
          <Cart key={index} pizza={pizza} index={index} />
        ))}
      </div>

      <div className="checkoutDiv">
        <button type="button" className="checkoutBtn" onClick={handleCheckout}>
          PROCEED TO PAY
        </button>
        <Toaster />
        <div className="totalSpan">Total: ₹{cart.totalPrice}</div>
      </div>
    </div>
  );
}
