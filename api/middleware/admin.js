// middleware/admin.js
import User from "../models/user.model.js";

export const admin = async (req, res, next) => {
  try {
    // req.userId should have been set by verifyToken middleware
    const user = await User.findById(req.userId);
    if (user && user.isAdmin) {
      // User is admin; proceed to the next middleware/controller.
      return next();
    } else {
      return res.status(403).json({ message: "Admin access required" });
    }
  } catch (error) {
    console.error("Admin middleware error:", error);
    return res.status(500).json({ message: "Error verifying admin status" });
  }
};
