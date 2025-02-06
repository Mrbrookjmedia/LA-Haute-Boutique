// controllers/userController.js
import User from "../models/user.model.js"; // Adjust the import based on your file structure

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};


// controllers/user.controller.js
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from verified token
    // Fetch orders for the user (replace with actual database query)
    const orders = []; // Example: await Order.find({ userId });
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};