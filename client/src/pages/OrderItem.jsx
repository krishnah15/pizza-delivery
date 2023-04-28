import { OrderList } from "../components/OrderList";
import React from "react";
import { Navbar } from "../components/Navbar";
import slice from "../assets/pizza-slice.png";
import "../pages/home.css";
import "../pages/customize.css";

const OrderItem = () => {
  return (
    <div>
      <Navbar slice={slice} />
      <div className="homeContent">
        <OrderList />
      </div>
    </div>
  );
};

export default OrderItem;
