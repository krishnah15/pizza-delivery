import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import Cart from "../components/Cart";
import { Navbar } from "./Navbar";

export function CustomizedItems() {
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
          <h1 className="meriHeading">Mediterranean Medly</h1>
          <div className="wrapper">
            <div className="custImg">
              <img
                src="https://images.unsplash.com/photo-1599334519864-4163e88d7e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt="pizza"
                className="custProductImg"
              />
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
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="classic">Classic</MenuItem>
                    <MenuItem value="thin-crust">Thin Crust</MenuItem>
                    <MenuItem value="thick-crust">Thick Crust</MenuItem>
                    <MenuItem value="gluten-free">Gluten-Free</MenuItem>
                    <MenuItem value="wood-fired">Wood Fired</MenuItem>
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
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="marinara">Marinara</MenuItem>
                    <MenuItem value="alfredo">Alfredo</MenuItem>
                    <MenuItem value="pesto">Pesto</MenuItem>
                    <MenuItem value="bbq">BBQ</MenuItem>
                    <MenuItem value="spicy red sauce">Spicy Red</MenuItem>
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
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="mushrooms">Mushrooms</MenuItem>
                    <MenuItem value="bellpeppers">Bell Peppers</MenuItem>
                    <MenuItem value="onions">Onions</MenuItem>
                    <MenuItem value="olives">Olives</MenuItem>
                    <MenuItem value="baby corn">Baby Corn</MenuItem>
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
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="mozzarella">Mozzarella</MenuItem>
                    <MenuItem value="cheddar">Cheddar</MenuItem>
                    <MenuItem value="parmesan">Parmesan</MenuItem>
                    <MenuItem value="swiss">Swiss</MenuItem>
                    <MenuItem value="gouda">Gouda</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        <div className="cart">
          <div className="cartNav">
            <h3>CART</h3>
          </div>
          <div className="cartDiv">
            <Cart />
            <Cart />
          </div>
          <div className="checkoutDiv">
            <button type="button" className="checkoutBtn">
              CHECKOUT
            </button>
            <div className="totalSpan">Total: ₹1538</div>
          </div>
        </div>
      </div>
    </div>
  );
}
