const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
  pizzaName: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Pizza", PizzaSchema);
