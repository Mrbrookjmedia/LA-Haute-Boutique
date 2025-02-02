import Product from "../models/product.model.js";
import User from "../models/user.model.js";

// Create a new product (Admin only)
export const createProduct = async (req, res) => {
  try {
    // Check if current user is admin
    const user = await User.findById(req.userId);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const { name, category, description, price, images } = req.body;
    const product = new Product({
      name,
      category,
      description,
      price,
      images,
    });

    await product.save();
    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single product by id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
};


