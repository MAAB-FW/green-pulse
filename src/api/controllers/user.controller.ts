import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../../env";
import { User } from "../models/user.model";

interface UserController {
  getAllUsers: (req: Request, res: Response) => Promise<void>;
  createUser: (req: Request, res: Response) => Promise<void>;
  loginUser: (req: Request, res: Response) => Promise<void>;
}

export const userController: UserController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  },

  createUser: async (req: Request, res: Response) => {
    try {
      const { password, ...otherData } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        ...otherData,
        type: "user",
        password: hashedPassword,
      });
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  },

  loginUser: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }

      const token = jwt.sign({ id: user._id }, JWT_SECRET!, {
        expiresIn: "1h",
      });

      res.json({ token, user });
    } catch (error) {
      res.status(500).json({
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  },
};
