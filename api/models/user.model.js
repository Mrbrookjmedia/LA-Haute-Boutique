import mongoose from "mongoose";

// models/user.model.js
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    default: ""
  },
  address: {
    type: String,
    default: ""
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  wishlist: [
    {
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product',
        required: true 
      },
      addedAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
}, { timestamps: true });


const User = mongoose.model("User", userSchema);
export default User;
