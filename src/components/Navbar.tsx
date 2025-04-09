"use client";
import { RootState } from "@/redux/store";
import ReduxProvider from "@/services/ReduxProvider";
import { NavLinks } from "@/types";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks: NavLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Events", href: "/events" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];
  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ReduxProvider>
      <div className="flex items-center justify-between bg-gray-900 p-4 text-white">
        <div className="text-xl font-bold">Green Pulse</div>
        <div className="hidden items-center space-x-4 md:flex">
          {navLinks.map((link) => (
            <Link
              onClick={closeMenu}
              href={link.href}
              key={link.name}
              className="hover:underline"
            >
              {link.name}
            </Link>
          ))}
          <UserOrLogin />
        </div>
        <div className="md:hidden">
          <button
            className="min-w-5 cursor-pointer text-white focus:outline-none"
            onClick={closeMenu}
          >
            {!menuOpen ? "☰" : "X"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="space-y-2 bg-gray-800 p-4 text-white md:hidden">
          {navLinks.map((link) => (
            <Link
              onClick={closeMenu}
              href={link.href}
              key={link.name}
              className="block hover:underline"
            >
              {link.name}
            </Link>
          ))}
          <UserOrLogin />
        </div>
      )}
    </ReduxProvider>
  );
};

export default Navbar;

function UserOrLogin() {
  const { name } = useSelector((state: RootState) => state.userSlice);

  return (
    <>
      {!name ? (
        <>
          <Link href="/Login" className="hover:underline">
            Login
          </Link>
          <Link
            href="/Register"
            className="rounded-lg bg-green-500 px-4 py-2 text-white"
          >
            Register
          </Link>
        </>
      ) : (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-blue-300">Welcome,</span>
          <span className="font-semibold text-yellow-400">{name}</span>
        </div>
      )}
    </>
  );
}
