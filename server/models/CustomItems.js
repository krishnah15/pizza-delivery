const mongoose = require("mongoose");

const CustomSchema = new mongoose.Schema({
  itemType: { type: String, required: true },
  items: [
    {
      itemType: { type: String, required: true },
      items: [
        {
          itemName: { type: String, required: true },
          quantity: { type: Number, required: true },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Customize", CustomSchema);
