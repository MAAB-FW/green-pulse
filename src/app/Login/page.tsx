"use client";
import { auth } from "@/firebase/firebase.config";
import ReduxProvider from "@/services/ReduxProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  return (
    <ReduxProvider>
      <div className="login-page flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
          Welcome Back!
        </h1>
        <p className="mb-6 text-center text-base text-gray-600 sm:text-lg">
          Please log in to manage your donations and track your contributions.
        </p>
        <Form />
        <p className="mt-4 text-center text-gray-600">
          New to our platform?{" "}
          <Link href="/Register" className="text-blue-500 hover:underline">
            Create an account
          </Link>{" "}
          to start donating.
        </p>
      </div>
    </ReduxProvider>
  );
};

export default Login;

function Form() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        const user = res.user;
        if (user) {
          toast.success("Login successful!");
          router.push("/");
        }
      })
      .catch((error) => {
        toast.error(
          (error as { response?: { data?: { message?: string } } }).response
            ?.data?.message || "An error occurred during login."
        );
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login-form w-full max-w-sm rounded-lg bg-white p-6 shadow-md sm:max-w-md sm:p-8"
    >
      <div className="form-group mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="form-group mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}
