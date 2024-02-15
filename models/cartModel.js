const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: String,
      default: "0",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", cartSchema);
