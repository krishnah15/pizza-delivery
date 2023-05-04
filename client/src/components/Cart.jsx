import * as React from "react";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removePizza } from "../redux/cartRedux";

const Cart = (props) => {
  const pizza = props.pizza;
  const index = props.index;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removePizza([index, pizza]));
  };

  return (
    <div className="mainCartDiv">
      <div className="cartImgDiv">
        <img src={pizza.image} alt="pizza" className="cartImg" />
      </div>
      <div className="titleDiv">
        <h5>{pizza.pizzaName}</h5>
        <span className="qtyMultiplier">{pizza.quantity} x</span>

        <h5 className="cartPriceHead">₹{pizza.price}</h5>

        <button type="button" className="deleteBtn" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
