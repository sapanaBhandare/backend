const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    unit: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isProductAvailable: {
      type: Boolean,
      required: true,
    },
    suplierName: {
      type: String,
      required: true,
    },
    userId:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
