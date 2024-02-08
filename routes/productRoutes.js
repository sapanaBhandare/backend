const express = require("express");
const productRouter = express.Router();
const auth= require("../middlewares/auth");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById
} = require("../controller/productController");

productRouter.post("/",auth, createProduct);
productRouter.put("/:id",auth, updateProduct);
productRouter.delete("/:id",auth, deleteProduct);
productRouter.get("/",auth, getProducts);
productRouter.get("/:id",auth, getProductById);

module.exports = productRouter;
