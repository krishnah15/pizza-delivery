import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="imgDiv">
        <img
          src="https://images.unsplash.com/photo-1599334519864-4163e88d7e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="pizza"
          className="cardImg"
        />
      </div>
      <div className="cardDeets">
        <div>
          <h4>Mediterranean</h4>
        </div>
        <p className="pizzaDes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="price">₹769</div>
        <div>
          <button type="button" className="addCart">
            Customize
          </button>
          <button type="button" className="addCart">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
