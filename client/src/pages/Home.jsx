import { MainCart } from "../components/MainCart";
import { Navbar } from "../components/Navbar";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./home.css";
import slice from "../assets/pizza-slice.png";
import Card from "../components/Card";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate("");
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pizza/");
        setPizzas(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPizzas();
  }, []);

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
          {pizzas?.map((item) => (
            <Card pizza={item} />
          ))}
        </div>
        <MainCart />
      </div>
    </div>
  );
};

export default Home;
