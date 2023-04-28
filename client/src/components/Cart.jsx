import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="mainCartDiv">
      <div className="cartImgDiv">
        <img
          src="https://images.unsplash.com/photo-1599334519864-4163e88d7e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="pizza"
          className="cartImg"
        />
      </div>
      <div className="titleDiv">
        <h5>Mediterranean Medly</h5>
        <h5>₹769</h5>
        <button type="button" className="crossBtn">
          -
        </button>
        <span>0</span>
        <button type="button" className="crossBtn">
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
