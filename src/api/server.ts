import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db";
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  }
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
