export type NavLinks = { name: string; href: string }[];
export type UserType = "admin" | "user" | "publisher";

export type User = {
  _id: string;
  name: string;
  email: string;
  isLoading: boolean;
  isError: boolean;
  error: string;
};

export interface PaymentIntentRequest {
  price: number;
}

export interface PaymentIntentResponse {
  client_secret: string;
}
