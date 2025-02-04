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

    const { name, category, subcategory, description, price, images, Colors, Sizes } = req.body;
    const product = new Product({
      name,
      category,
      subcategory,
      Colors,
      Sizes,
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

export const deleteProduct = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.error("Error deleting product:", error);  
    res.status(500).json({ message: "Server error" });
  }
};


export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the existing product
    let product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update only provided fields
    const updatedData = req.body;
    Object.keys(updatedData).forEach((key) => {
      if (updatedData[key] !== undefined) {
        product[key] = updatedData[key];
      }
    });

    // Save the updated product
    const updatedProduct = await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({
      success: false,
      message: "Server error, unable to update product",
    });
  }
};

