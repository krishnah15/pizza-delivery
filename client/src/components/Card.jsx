import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className="cardContainer">
      <div className="imgDiv">
        <img src={props.pizza.image} alt="pizza" className="cardImg" />
      </div>
      <div className="cardDeets">
        <div>
          <h4>{props.pizza.pizzaName}</h4>
        </div>
        <p className="pizzaDes">
          {props.pizza.description.slice(0, 70)}
          <b>...</b>
        </p>
        <div className="price">₹{props.pizza.price}</div>
        <div>
          <button
            type="button"
            className="addCart"
            onClick={() => navigate(`/customize/${props.pizza._id}`)}
          >
            Customize
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
