"use client";
import { navLinks } from "@/types";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks: navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Events", href: "/events" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
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
          <Link href="/Login" className="hover:underline">
            Login
          </Link>
          <Link
            href="/Register"
            className="rounded-lg bg-green-500 px-4 py-2 text-white"
          >
            Register
          </Link>
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
              onClick={() => setMenuOpen(!menuOpen)}
              href={link.href}
              key={link.name}
              className="block hover:underline"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#" className="block hover:underline">
            Login
          </Link>
          <Link
            href="#"
            className="block rounded-lg bg-green-500 px-4 py-2 text-white"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
