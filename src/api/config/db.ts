import mongoose from "mongoose";
import { MONGODB_URI } from "../../../env";

const DB_NAME = "green-pulse";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI as string, {
      dbName: DB_NAME,
    });
    console.log(`MongoDB Connected: ${db.connection.host}`);
    return db;
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
