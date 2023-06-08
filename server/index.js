const express = require("express");
const app = express();
app.use(express.json());

//.env
const dotenv = require("dotenv");
dotenv.config();

//cors
var cors = require("cors");
app.use(cors());

const pizzaRoute = require("./routes/pizza");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");

app.use("/pizza", pizzaRoute);
app.use("/user", userRoute);
app.use("/order", orderRoute);

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("haan ho raha hai.");
});

app.listen(process.env.PORT || 2000, () => {
  console.log("server started");
});
