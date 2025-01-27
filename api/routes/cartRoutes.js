// const express = require("express");
// const Cart = require("../models/cart.model"); // Import the Cart schema
// const authMiddleware = require("../middleware/authMiddleware"); // Middleware to check if the user is authenticated
// const router = express.Router();


// router.post("/add", authMiddleware, async (req, res) => {
//     const { productId, quantity } = req.body; // Get productId and quantity from request
//     const userId = req.user.id; // Extract the user ID from the authenticated request
  
//     try {
//       let cart = await Cart.findOne({ userId }); // Find the user's cart
//       if (!cart) {
//         // If no cart exists, create a new one
//         cart = new Cart({ userId, items: [] });
//       }
  
//       // Check if the product already exists in the cart
//       const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);
  
//       if (itemIndex > -1) {
//         // If item exists, update its quantity
//         cart.items[itemIndex].quantity += quantity;
//       } else {
//         // Otherwise, add the new product to the cart
//         cart.items.push({ productId, quantity });
//       }
  
//       await cart.save(); // Save the cart back to the database
//       res.status(200).json({ message: "Item added to cart", cart });
//     } catch (error) {
//       res.status(500).json({ error: "Error adding item to cart" });
//     }
//   });
  


//   router.get("/", authMiddleware, async (req, res) => {
//     const userId = req.user.id;
  
//     try {
//       const cart = await Cart.findOne({ userId }).populate("items.productId"); // Populate product details
//       if (!cart) {
//         return res.status(404).json({ message: "Cart is empty" });
//       }
//       res.status(200).json(cart);
//     } catch (error) {
//       res.status(500).json({ error: "Error fetching cart" });
//     }
//   });

  


//   router.delete("/clear", authMiddleware, async (req, res) => {
//     const userId = req.user.id;
  
//     try {
//       const cart = await Cart.findOneAndDelete({ userId });
//       if (!cart) {
//         return res.status(404).json({ message: "Cart not found" });
//       }
//       res.status(200).json({ message: "Cart cleared successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Error clearing cart" });
//     }
//   });

  

//   module.exports = router;


// routes/cartRoutes.js
import express from "express";
import { getCart, addToCart, clearCart } from "../controllers/cart.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getCart); // Fetch cart
router.post("/add", verifyToken, addToCart); // Add item to cart
router.delete("/clear", verifyToken, clearCart); // Clear cart

export default router;