import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToMongoDB = async () => {
  try {
    dotenv.config();

    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("Error connecting mongodb: ", error.message);
  }
};
export default connectToMongoDB;
