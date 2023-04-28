import { PizzaItems } from "./PizzaItems";
import React from "react";
import "./pastOrder.css";

export function PastOrderSubItem({}) {
  return (
    <div className="pOrder">
      <h2 className="POrderId">Order id: #1</h2>
      <PizzaItems />
      <h3>Order status: Delivered</h3>
      <h4 className="totalCost">TOTAL: ₹1538</h4>
    </div>
  );
}
