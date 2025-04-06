export type NavLinks = { name: string; href: string }[];

export type User = {
  _id: string;
  name: string;
  email: string;
  isLoading: boolean;
  isError: boolean;
  error: string;
};
