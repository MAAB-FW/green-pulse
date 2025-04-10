import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const MONGODB_URI = process.env.MONGODB_URI;
export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET;

export const NEXT_PUBLIC_APIKEY = process.env.NEXT_PUBLIC_AUTH_APIKEY;
export const NEXT_PUBLIC_AUTHDOMAIN = process.env.NEXT_PUBLIC_AUTH_AUTHDOMAIN;
export const NEXT_PUBLIC_PROJECTID = process.env.NEXT_PUBLIC_AUTH_PROJECTID;
export const NEXT_PUBLIC_STORAGEBUCKET = process.env.NEXT_PUBLIC_AUTH_STORAGEBUCKET;
export const NEXT_PUBLIC_MESSAGINGSENDERID = process.env.NEXT_PUBLIC_AUTH_MESSAGINGSENDERID;
export const NEXT_PUBLIC_APPID = process.env.NEXT_PUBLIC_AUTH_APPID;
export const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
export const NEXT_PUBLIC_STRIPE_SECRET_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;