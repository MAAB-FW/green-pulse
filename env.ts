import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const MONGODB_URI = process.env.MONGODB_URI;
export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET;