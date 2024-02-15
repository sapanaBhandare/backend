const express = require("express");
const productRouter = express.Router();
const auth = require("../middlewares/auth");
const { insertCart, getCart } = require("../controller/cartController");

productRouter.post("/", auth, insertCart);
productRouter.get("/", auth, getCart);

module.exports = productRouter;
