export type NavLinks = { name: string; href: string }[];
export type UserType = "admin" | "user" | "publisher";

export type User = {
  _id: string;
  name: string;
  email: string;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

export interface PaymentIntentRequest {
  price: number;
}

export interface PaymentIntentResponse {
  clientSecret: string;
}

// Add these interfaces
export interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  address?: string;
  phone?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}
