import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import Cart from "../components/Cart";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../redux/cartRedux";
import OrderItem from "../pages/OrderItem";

export function CustomizedItems() {
  const cart = useSelector((state) => state.user.cart);
  const [myPizza, setMyPizza] = useState("");
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    pizzaName: "",
    price: 0,
    quantity: 0,
    customItems: {
      base: "Classic",
      sauce: "Marinara",
      cheese: "Mozzarella",
      veggies: "Mushrooms",
    },
  });

  const handleAdd = () => {
    setOrder({ ...order, quantity: order.quantity + 1 });
  };

  const handleRemove = () => {
    if (order.quantity > 1) {
      setOrder({ ...order, quantity: order.quantity - 1 });
    }
  };

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    const getId = async () => {
      const res = await axios.get(`http://localhost:5000/pizza/${id}`);
      try {
        setMyPizza(res.data);
        setOrder({
          ...order,
          pizzaName: res.data.pizzaName,
          price: res.data.price,
          quantity: 1,
          image: res.data.image,
        });
        console.log(order);
      } catch (err) {
        console.log(err);
      }
    };
    getId();
  }, []);

  const handleAddCart = () => {
    console.log(addPizza);
    dispatch(addPizza(order));
  };

  return (
    <div className="homeContainer">
      <div className="navbar">
        <div className="heading">
          <Navbar />
        </div>
      </div>
      <div className="homeContent">
        <div className="items">
          {/* base sauce veggies cheese */}
          <h1 className="meriHeading">{myPizza.pizzaName}</h1>
          <div className="wrapper">
            <div className="custImg">
              <img src={myPizza.image} alt="pizza" className="custProductImg" />
            </div>
            <div className="custInfo">
              <div className="custInfoBase">
                {/* BASES */}
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    minWidth: 150,
                  }}
                >
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{
                      color: "#FCBF49",
                      fontStyle: "bold",
                    }}
                  >
                    <b>Base</b>
                  </InputLabel>
                  <Select
                    style={{
                      color: "#EAE2B7",
                    }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Base"
                    value={order.customItems.base}
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        customItems: {
                          ...order.customItems,
                          base: e.target.value,
                        },
                      });
                    }}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="Classic">Classic</MenuItem>
                    <MenuItem value="Thin Crust">Thin Crust</MenuItem>
                    <MenuItem value="Thick Crust">Thick Crust</MenuItem>
                    <MenuItem value="Gluten Free">Gluten-Free</MenuItem>
                    <MenuItem value="Wood Fired">Wood Fired</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="custInfoBase">
                {/* SAUCES */}
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    minWidth: 150,
                  }}
                >
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{
                      color: "#FCBF49",
                      fontStyle: "bold",
                    }}
                  >
                    <b>Sauce</b>
                  </InputLabel>
                  <Select
                    style={{
                      color: "#EAE2B7",
                    }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Sauce"
                    value={order.customItems.sauce}
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        customItems: {
                          ...order.customItems,
                          sauce: e.target.value,
                        },
                      });
                    }}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="Marinara">Marinara</MenuItem>
                    <MenuItem value="Alfredo">Alfredo</MenuItem>
                    <MenuItem value="Pesto">Pesto</MenuItem>
                    <MenuItem value="BBQ">BBQ</MenuItem>
                    <MenuItem value="Spicy Red">Spicy Red</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="custInfoBase">
                {/* VEGGIES */}
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    minWidth: 150,
                  }}
                >
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{
                      color: "#FCBF49",
                      fontStyle: "bold",
                    }}
                  >
                    <b>Veggies</b>
                  </InputLabel>

                  <Select
                    style={{
                      color: "#EAE2B7",
                    }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Veggies"
                    value={order.customItems.veggies}
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        customItems: {
                          ...order.customItems,
                          veggies: e.target.value,
                        },
                      });
                    }}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="Mushrooms">Mushrooms</MenuItem>
                    <MenuItem value="Bell Peppers">Bell Peppers</MenuItem>
                    <MenuItem value="Onions">Onions</MenuItem>
                    <MenuItem value="Olives">Olives</MenuItem>
                    <MenuItem value="Baby Corn">Baby Corn</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="custInfoBase">
                {/* CHEESE */}
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    minWidth: 150,
                  }}
                >
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{
                      color: "#FCBF49",
                      fontStyle: "bold",
                    }}
                  >
                    <b>Cheese</b>
                  </InputLabel>
                  <Select
                    style={{
                      color: "#EAE2B7",
                    }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Cheese"
                    value={order.customItems.cheese}
                    onChange={(e) => {
                      setOrder({
                        ...order,
                        customItems: {
                          ...order.customItems,
                          cheese: e.target.value,
                        },
                      });
                    }}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="Mozzarella">Mozzarella</MenuItem>
                    <MenuItem value="Cheddar">Cheddar</MenuItem>
                    <MenuItem value="Parmesan">Parmesan</MenuItem>
                    <MenuItem value="Swiss">Swiss</MenuItem>
                    <MenuItem value="Gouda">Gouda</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="editDiv">
                <span className="myPizzaCusPrice">₹{myPizza.price}</span>
                <button
                  type="button"
                  className="crossBtn"
                  onClick={handleRemove}
                >
                  -
                </button>
                <span className="qtyNum">{order.quantity}</span>
                <button type="button" className="crossBtn" onClick={handleAdd}>
                  +
                </button>

                <button
                  type="button"
                  className="addCartButton"
                  onClick={handleAddCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart">
          <div className="cartNav">
            <h3>CART</h3>
          </div>
          <div className="cartDiv">
            {cart?.orderItems.map((pizza, index) => (
              <Cart key={index} pizza={pizza} index={index} />
            ))}
          </div>
          <div className="checkoutDiv">
            <button type="button" className="checkoutBtn">
              CHECKOUT
            </button>
            <div className="totalSpan">Total: ₹{cart.totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
