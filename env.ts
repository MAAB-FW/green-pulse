import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const MONGODB_URI = process.env.MONGODB_URI;
export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET;

export const NEXTAUTH_APIKEY = process.env.NEXTAUTH_APIKEY;
export const NEXTAUTH_AUTHDOMAIN = process.env.NEXTAUTH_AUTHDOMAIN;
export const NEXTAUTH_PROJECTID = process.env.NEXTAUTH_PROJECTID;
export const NEXTAUTH_STORAGEBUCKET = process.env.NEXTAUTH_STORAGEBUCKET;
export const NEXTAUTH_MESSAGINGSENDERID = process.env.NEXTAUTH_MESSAGINGSENDERID;
export const NEXTAUTH_APPID = process.env.NEXTAUTH_APPID;
