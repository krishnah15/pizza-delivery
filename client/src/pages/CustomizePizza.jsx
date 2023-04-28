import { CustomizedItems } from "../components/CustomizedItems";
import "./home.css";
import slice from "../assets/pizza-slice.png";
import "./customize.css";
import React from "react";

const Customize = () => {
  return <CustomizedItems slice={slice} />;
};

export default Customize;
