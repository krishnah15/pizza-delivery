import { Navbar } from "../components/Navbar";
import React from "react";
import "./home.css";
import slice from "../assets/pizza-slice.png";
import Card from "../components/Card";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar slice={slice} />
      <div className="homeContent">
        <div className="myCartItems">
          <div className="tagline">
            <h3 className="taglineHead">
              Life's Too Short for Bad Pizza, Treat Yourself with the Best!
            </h3>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="cart">
          <div className="cartNav">
            <h3 className="cartNavHead">CART</h3>
          </div>
          <div className="cartDiv">
            <Cart />
            <Cart />
          </div>
          <div className="checkoutDiv">
            <button type="button" className="checkoutBtn">
              CHECKOUT
            </button>
            <div className="totalSpan">Total: ₹1538</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
