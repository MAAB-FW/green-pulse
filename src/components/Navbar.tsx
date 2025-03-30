"use client";
import { navLinks } from "@/types";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks: navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Events", href: "/Events" },
    { name: "Donate", href: "/Donate" },
    { name: "Contact", href: "/Contact" },
  ];
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <div className="text-xl font-bold">Green Pulse</div>
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.name} className="hover:underline">
              {link.name}
            </Link>
          ))}
          <Link href="/Login" className="hover:underline">
            Login
          </Link>
          <Link
            href="/Register"
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Register
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none cursor-pointer min-w-5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? "☰" : "X"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
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
            className="block px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
