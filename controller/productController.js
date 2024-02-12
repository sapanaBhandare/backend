const productModel = require("../models/productModel");

const createProduct = async (req, res) => {
  const {
    name,
    description,
    banner,
    unit,
    price,
    isProductAvailable,
    suplierName,
  } = req.body;
  const newProduct = new productModel({
    name: name,
    description: description,
    banner: banner,
    unit: unit,
    price: price,
    isProductAvailable: isProductAvailable,
    suplierName: suplierName,
    userId: req.userId,
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(5000).json({ message: "something went wrong" });
  }
};

const getProducts = async (req, res) => {
  try {
    // const products = await productModel.find({ userId: req.userId });
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(5000).json({ message: "something went wrong" });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    description,
    banner,
    unit,
    price,
    isProductAvailable,
    suplierName,
  } = req.body;
  const newProduct = {
    name: name,
    description: description,
    banner: banner,
    unit: unit,
    price: price,
    isProductAvailable: isProductAvailable,
    suplierName: suplierName,
    userId: req.userId,
  };
  try {
    await productModel.findByIdAndUpdate({_id:id}, newProduct, { new: true });
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Something went wrong" });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productModel.findByIdAndRemove(id);
    res.status(202).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getProductById = async (req, res) => {
    const id = req.params.id;
    try {
      const product = await productModel.findOne({ _id: id });
      res.status(202).json(product);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById
};
