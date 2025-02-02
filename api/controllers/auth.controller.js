import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, email } = req.body;

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    //Hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      email,
    });
    if (newUser) {
      await newUser.save();
      res
        .status(201)
        .send({ message: "User created successfully! Please Login" });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in registering", error);
    res.status(500).send({ message: "Failed to create User!" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).send({ message: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({ message: "Login Successful", user });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).send({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const update = async (req, res) => {
  try {
    const { fullname, username, email, phone, address, currentPassword, newPassword } = req.body;
    const userId = req.userId; // Extracted from token

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update password if provided
    if (currentPassword && newPassword) {
      const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect current password" });
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    // Update other fields
    user.fullname = fullname || user.fullname;
    user.username = username || user.username;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.address = address || user.address;

    const updatedUser = await user.save();

    // Remove sensitive data before sending response
    const { password, ...userData } = updatedUser._doc;

    res.status(200).json({ message: "Profile updated successfully", user: userData });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile" });
  }
};

