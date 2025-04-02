import { Request, Response } from "express";
import { User } from "../models/user.model";

export const userController = {
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
      const user = new User(req.body);
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  },
};
