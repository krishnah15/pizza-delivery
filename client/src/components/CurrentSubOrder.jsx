import React from "react";
import { PizzaItems } from "./PizzaItems";
import "./currentOrder.css";

export function CurrentSubOrder({}) {
  return (
    <div className="cOrder">
      <h2 className="COrderId">Order id: #1</h2>
      <PizzaItems />
      <PizzaItems />
      <h3>Order status: Out for Delivery</h3>
      <h4 className="totalCost">TOTAL: ₹1538</h4>
    </div>
  );
}
