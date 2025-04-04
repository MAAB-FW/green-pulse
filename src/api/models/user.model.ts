import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long",
      ],
    },
  },
  {
    timestamps: true,
    collection: "userCollection",
  }
);

export const User = mongoose.model("User", userSchema);
