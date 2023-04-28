import { PastOrderSubItem } from "./PastOrderSubItem";
import { CurrentSubOrder } from "./CurrentSubOrder";
import React from "react";
import "./orderItem.css";

export function OrderList() {
  return (
    <div className="myOrderContainer">
      <h1 className="orderNav">My Orders</h1>
      <h2 className="currentOrderNav">Current order(s)</h2>
      <div className="currentOrder">
        <CurrentSubOrder />
        <CurrentSubOrder />
      </div>

      <h2 className="pastOrderNav">Order history</h2>
      <div className="pastOrder">
        <PastOrderSubItem />
        <PastOrderSubItem />
      </div>
    </div>
  );
}
