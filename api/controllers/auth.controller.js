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
  const { id, fullname, username, email, currentPassword, newPassword } =
    req.body;
  // const tokenUserId = req.userId;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    if (currentPassword && newPassword) {
      const isPasswordCorrect = await bcrypt.compare(
        currentPassword,
        user.password
      );
      if (!isPasswordCorrect) {
        return res.status(400).send({ message: "Incorrect current password." });
      }

      //Hash password here
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
    }

    if (fullname) user.fullname = fullname;
    if (username) user.username = username;
    if (email) user.email = email;

    await user.save();
    res.send({ message: "Profile updated." });
  } catch (error) {
    console.log("Error in updating profile controller: ", error);
    res.status(500).send({ message: "Error in updating profile" });
  }
};
