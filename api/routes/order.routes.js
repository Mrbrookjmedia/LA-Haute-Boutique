// import express from "express";
// import { verifyToken } from "../middleware/verifyToken.js";
// import { admin } from "../middleware/admin.js";
// import {
//   createOrder,
//   getUserOrders,
//   getAllOrders,
//   updateOrderStatus
// } from "../controllers/order.controller.js";
// import Order from "../models/order.model.js";


// const router = express.Router();

// router.post("/", verifyToken, createOrder);
// router.get("/user", verifyToken, getUserOrders);
// router.get("/all", verifyToken, getAllOrders);
// router.put("/:orderId/status", verifyToken,  updateOrderStatus);

// // router.get("/user/orders", verifyToken, async (req, res) => {
// //   try {
// //     const orders = await Order.find({ user: req.userId })
// //       .populate('orderItems.product')
// //       .sort('-createdAt');
// //     res.status(200).json(orders);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching orders" });
// //   }
// // });

// export default router;


import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { admin } from "../middleware/admin.js";
import {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
} from "../controllers/order.controller.js";

const router = express.Router();

// Order routes
router.get("/user", verifyToken, getUserOrders);      // Get user's orders
router.post("/", verifyToken, createOrder);           // Create new order
router.get("/all", verifyToken, admin, getAllOrders); // Get all orders (admin only)
router.put("/:orderId/status", verifyToken, admin, updateOrderStatus); // Update order status (admin only)

export default router;
