// api/index.js

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
// import dataRepoRoutes from "./routes/dataRepo.routes.js";
// import ticketRoutes from "./routes/ticket.routes.js";
// import threadRoutes from "./routes/thread.routes.js";
// import eventRegistrationRoutes from "./routes/eventRegistration.js"; // Include the event registration route
import path from "path";
import productRoutes from "./routes/productRoutes.js";

import cartRoutes from "./routes/cartRoutes.js";

import wishlistRoutes from "./routes/wishlist.routes.js";
import connectToDatabase from "./db/connectTodatabase.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

dotenv.config();
const __dirname = path.resolve();
// CORS Configuration
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: false,
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

// app.options("*", cors());

app.use(express.json()); //to parse incoming info with json payloads
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/user/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 4000; // Use process.env.PORT if available, otherwise default to 5001

app.use("/api/auth", authRoutes);
// app.use("/api", dataRepoRoutes);
// app.use("/api/tickets", ticketRoutes);
// app.use("/api/threads", threadRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/events", eventRegistrationRoutes); // Register the event route
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Server started on port ${PORT}`);
});
