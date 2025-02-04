// // models/product.model.js
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String, required: true },
//   image: { type: String, required: true },
//   category: { type: String, required: true },
//   subcategory: { type: String },
//   colors: [String],
//   sizes: [String],
//   images: [String],
//   stock: { type: Number, default: 0 },
//   isActive: { type: Boolean, default: true }
// }, { timestamps: true });

// export default mongoose.model("Product", productSchema);



import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["bags", "shoes", "apparel", "accessories"],
      required: true,
    },
    subcategory: {
      type: String,
    },

    Colors: {
      type: [String],
    },
    Sizes: {
      type: [String],
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },


    images: {
      type: [String],
      validate: {
        validator: (v) => v.length <= 5,
        message: "Maximum five images allowed",
      },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;


