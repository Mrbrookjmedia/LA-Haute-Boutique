// import express from "express";
// import { createProduct, getProducts, getProductById } from "../controllers/product.controller.js";
// import { verifyToken } from "../middleware/verifyToken.js";

// const router = express.Router();

// // Admin product creation; verifyToken ensures the user is logged in then controller checks for admin role.
// router.post("/", verifyToken, createProduct);

// // Public routes
// router.get("/", getProducts);
// router.get("/:id", getProductById);

// export default router;


// routes/product.routes.js
import express from "express";
import { createProduct, getProducts, getProductById } from "../controllers/product.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { admin } from "../middleware/admin.js";

const router = express.Router();

// Only an authenticated admin can create a product.
router.post("/", verifyToken, admin, createProduct);

// Public routes: listing and reading products.
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
