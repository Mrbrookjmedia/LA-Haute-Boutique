// import express from "express";
// import { verifyToken } from "../middleware/verifyToken.js";
// import { 
//   getWishlist,
//   addToWishlist,
//   removeFromWishlist
// } from "../controllers/wishlist.controller.js";

// const router = express.Router();

// router.get("/", verifyToken, getWishlist);
// router.post("/wishlist", verifyToken, addToWishlist);
// router.delete("wishlist/:productId", verifyToken, removeFromWishlist);

// router.get("/orders", verifyToken, (req, res) => {
//   res.status(200).json([]); // Return an empty array for now
// });

// export default router;


import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { 
  getWishlist,
  addToWishlist,
  removeFromWishlist
} from "../controllers/wishlist.controller.js";

const router = express.Router();

// Remove "wishlist" from these paths since it's already included in the base path
router.get("/", verifyToken, getWishlist);
router.post("/", verifyToken, addToWishlist);
router.delete("/:productId", verifyToken, removeFromWishlist); // Fix: missing forward slash



export default router;
