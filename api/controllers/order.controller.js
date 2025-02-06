// import Order from "../models/order.model.js";
// import User from "../models/user.model.js";

// // Create new order
// export const createOrder = async (req, res) => {
//   try {
//     const { orderItems, shippingAddress, paymentMethod } = req.body;
    
//     // Calculate total amount
//     const totalAmount = orderItems.reduce((sum, item) => 
//       sum + (item.price * item.quantity), 0);

//     const order = new Order({
//       user: req.userId,
//       orderItems,
//       shippingAddress,
//       totalAmount,
//       paymentMethod
//     });

//     const savedOrder = await order.save();
    
//     // Populate user and product details
//     const populatedOrder = await Order.findById(savedOrder._id)
//       .populate('user', 'fullname email')
//       .populate('orderItems.product');

//     res.status(201).json(populatedOrder);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating order" });
//   }
// };

// // Get user's orders
// export const getUserOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.userId })
//       .populate('orderItems.product')
//       .sort('-createdAt');
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching orders" });
//   }
// };

// // Admin: Get all orders
// export const getAllOrders = async (req, res) => {
//   try {
//     // Verify admin status
//     const user = await User.findById(req.userId);
//     if (!user?.isAdmin) {
//       return res.status(403).json({ message: "Admin access required" });
//     }
//     const orders = await Order.find()
//       .populate('user', 'fullname email')
//       .populate('orderItems.product')
//       .sort('-createdAt');
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching orders" });
//   }
// };

// // Admin: Update order status
// export const updateOrderStatus = async (req, res) => {
//   try {
//     const { status } = req.body;
//     const order = await Order.findByIdAndUpdate(
//       req.params.orderId,
//       { status },
//       { new: true }
//     ).populate('user').populate('orderItems.product');
    
//     res.status(200).json(order);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating order" });
//   }
// };



import Order from "../models/order.model.js";
import User from "../models/user.model.js";

// Create new order
export const createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod } = req.body;
    
    // Calculate total amount
    const totalAmount = orderItems.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );

    const order = new Order({
      user: req.userId,
      orderItems,
      shippingAddress,
      totalAmount,
      paymentMethod
    });

    const savedOrder = await order.save();
    
    // Populate user and product details
    const populatedOrder = await Order.findById(savedOrder._id)
      .populate('user', 'fullname email')
      .populate('orderItems.product');

    res.status(201).json(populatedOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Error creating order" });
  }
};

// Get user's orders
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId })
      .populate('orderItems.product')
      .populate('user', 'fullname email')
      .sort('-createdAt');
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// Admin: Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'fullname email phone address')
      .populate('orderItems.product')
      .sort('-createdAt');
      console.log("Fetched orders:", orders); // For debugging
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ message: "Error fetching orders" });
  }
};

// Admin: Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status },
      { new: true }
    )
    .populate('user', 'fullname email')
    .populate('orderItems.product');
    
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    
    res.status(200).json(order);
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Error updating order status" });
  }
};
