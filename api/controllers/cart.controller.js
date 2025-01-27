// controllers/cart.controller.js
import Cart from "../models/cart.model.js";

// Get cart for the logged-in user
export const getCart = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from verified token
    const cart = await Cart.findOne({ userId }).populate("items.product");
    if (!cart) {
      return res.status(200).json({ items: [] }); // Return empty cart
    }
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).send({ message: "Error fetching cart" });
  }
};

// Add an item to the cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.userId; // Extracted from verified token

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).send({ message: "Error adding to cart" });
  }
};

// Clear the cart
export const clearCart = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from verified token
    const cart = await Cart.findOneAndDelete({ userId });
    res.status(200).send({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).send({ message: "Error clearing cart" });
  }
};
