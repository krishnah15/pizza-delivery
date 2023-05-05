const router = require("express").Router();
const Orders = require("../models/Orders");
const Item = require("../models/CustomItems");
const Razorpay = require("razorpay");

//to order
function manageItems(inventory, order) {
  console.log(order.base);
  inventory.base[order.base] -= 1;
  if (order.veggies) inventory.veggies[order.veggies] -= 1;
  inventory.sauce[order.sauce] -= 1;
  inventory.cheese[order.cheese] -= 1;

  return inventory;
}

// router.post("/add", async (req, res) => {
//   try {
//     var order = new Orders(req.body);
//     var inventory = await Item.findOne();
//     order.orderItems.map((item) => {
//       inventory = manageItems(inventory, item.customItems);
//     });

//     res.status(201).json(inventory);
//   } catch (err) {
//     //
//     console.log(err);
//   }
// });

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

router.post("/addOrder", async (req, res) => {
  var currentDate = new Date();
  instance.orders
    .create({
      amount: req.body.totalPrice * 100,
      currency: "INR",
      receipt:
        currentDate.getDate() +
        "/" +
        (currentDate.getMonth() + 1) +
        "/" +
        currentDate.getFullYear() +
        " @ " +
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds(),
    })
    .then((order) => res.json(order))
    .catch((err) => res.send(err));
});

router.get("/:id", async (req, res) => {
  try {
    const orders = await Orders.find({ user_id: req.params.id });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//to update and status change

router.put("/status", async (req, res) => {
  try {
    const { status, order_id } = req.body;
    Orders.findByIdAndUpdate(order_id, { status: status });
    res.status(200).send("my status is updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
