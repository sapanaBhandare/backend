const cartModel = require("../models/cartModel");

const insertCart = async (req, res) => {
  const { userId, name, price, quantity, productId } = req.body;
  const newCart = new cartModel({
    userId: userId,
    name: name,
    price: price,
    quantity: quantity,
    productId: productId,
  });
  try {
    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    console.log(error);
    res.status(5000).json({ message: "something went wrong" });
  }
};

const getCart = async (req, res) => {
  try {
    const cartProducts = await cartModel.find({ userId: req.userId });
    res.status(200).json(cartProducts);
  } catch (error) {
    console.log(error);
    res.status(5000).json({ message: "something went wrong" });
  }
};

module.exports = {
  insertCart,
  getCart,
};
