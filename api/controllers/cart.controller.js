// controllers/cart.controller.js
import mongoose from 'mongoose';
// import Cart from "../models/cart.model.js";
// import Product from "../models/product.model.js"; // Ensure this is imported

// // Get cart for the logged-in user
// export const getCart = async (req, res) => {
//   try {
//     const userId = req.userId;

//     // Validate userId as a MongoDB ObjectID
//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       return res.status(400).json({ message: "Invalid User ID" });
//     }

//     // Fetch user's cart and populate product details
//     const cart = await Cart.findOne({ userId }).populate("items.product");
    
//     if (!cart) {
//       return res.status(200).json({ items: [] }); // Return empty cart if none exists
//     }

//     res.status(200).json(cart);
//   } catch (error) {
//     console.error("Error fetching cart:", error.message);
//     res.status(500).json({ message: "Internal Server Error", error: error.message });
//   }
// };


// // Add an item to the cart
// export const addToCart = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     const userId = req.userId; // Extracted from verified token

//     // Validate inputs
//     if (!productId || !quantity) {
//       return res.status(400).json({ message: "Product ID and quantity are required" });
//     }

//     // Ensure productId is a valid ObjectId
//     if (!mongoose.Types.ObjectId.isValid(productId)) {
//       return res.status(400).json({ message: "Invalid Product ID" });
//     }

//     // Use `new` keyword to create ObjectId
//     const productObjectId = new mongoose.Types.ObjectId(productId);

//     // Find or create cart
//     let cart = await Cart.findOne({ userId });
//     if (!cart) {
//       cart = new Cart({ userId, items: [] });
//     }

//     // Check if product already exists in cart
//     const itemIndex = cart.items.findIndex(
//       (item) => item.productId.toString() === productObjectId.toString()
//     );

//     if (itemIndex > -1) {
//       // Update quantity if product exists
//       cart.items[itemIndex].quantity += quantity;
//     } else {
//       // Add new product to cart
//       cart.items.push({ productId: productObjectId, quantity });
//     }

//     await cart.save();
//     res.status(200).json(cart);
//   } catch (error) {
//     console.error("Error adding to cart:", error.message);
//     res.status(500).json({ message: "Error adding to cart", error: error.message });
//   }
// };

// // Clear the cart
// export const clearCart = async (req, res) => {
//   try {
//     const userId = req.userId; // Extracted from verified token
//     const cart = await Cart.findOneAndDelete({ userId });
//     res.status(200).send({ message: "Cart cleared successfully" });
//   } catch (error) {
//     console.error("Error clearing cart:", error);
//     res.status(500).send({ message: "Error clearing cart" });
//   }
// };



import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

// Get the current user's cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.userId }).populate("items.product");
    res.status(200).json(cart || { user: req.userId, items: [] });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add product to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product)
      return res.status(404).json({ message: "Product not found" });
    
    let cart = await Cart.findOne({ user: req.userId });
    if (!cart) {
      // Create new cart if does not exist
      cart = new Cart({ user: req.userId, items: [] });
    }
    // Check if product already exists in cart
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      // Update quantity
      cart.items[itemIndex].quantity += quantity || 1;
    } else {
      cart.items.push({ product: productId, quantity: quantity || 1 });
    }
    await cart.save();
    // Populate product details before sending response
    cart = await cart.populate("items.product");
    res.status(200).json({ message: "Added to cart", cart });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne({ user: req.userId });
    if (!cart)
      return res.status(404).json({ message: "Cart not found" });
    
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );
    await cart.save();
    res.status(200).json({ message: "Removed from cart", cart });
  } catch (error) {
    console.error("Error removing from cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update item quantity in the cart
export const updateCartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne({ user: req.userId });
    if (!cart)
      return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex === -1)
      return res.status(404).json({ message: "Product not in cart" });
    
    if (quantity <= 0) {
      // Remove item if quantity is zero or less
      cart.items.splice(itemIndex, 1);
    } else {
      cart.items[itemIndex].quantity = quantity;
    }
    await cart.save();
    res.status(200).json({ message: "Cart updated", cart });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ message: "Server error" });
  }
};
