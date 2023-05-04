const mongoose = require("mongoose");

const CustomSchema = new mongoose.Schema({
  base: {
    Classic: { type: Number, required: true },
    ThinCrust: { type: Number, required: true },
    ThickCrust: { type: Number, required: true },
    GlutenFree: { type: Number, required: true },
    WoodFire: { type: Number, required: true },
  },
  veggies: {
    Mushrooms: { type: Number, required: true },
    BellPeppers: { type: Number, required: true },
    Onions: { type: Number, required: true },
    Olives: { type: Number, required: true },
    BabyCorn: { type: Number, required: true },
  },
  sauce: {
    Marinara: { type: Number, required: true },
    Alfredo: { type: Number, required: true },
    Pesto: { type: Number, required: true },
    BBQ: { type: Number, required: true },
    SpicyRed: { type: Number, required: true },
  },
  cheese: {
    Mozzarella: { type: Number, required: true },
    Cheddar: { type: Number, required: true },
    Parmesan: { type: Number, required: true },
    Swiss: { type: Number, required: true },
    Gouda: { type: Number, required: true },
  },
});

module.exports = mongoose.model("items", CustomSchema);
