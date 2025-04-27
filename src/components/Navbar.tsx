"use client";
import { auth } from "@/firebase/firebase.config";
import { logOut } from "@/redux/features/user/userSlice";
import { RootState } from "@/redux/store";
import ReduxProvider from "@/services/ReduxProvider";
import { NavLinks, UserType } from "@/types";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const navLinks: NavLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Events", href: "/events" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];
const adminNav: NavLinks = [
  { name: "Donations", href: "/dashboard/admin/donations" },
  { name: "Event Management", href: "/dashboard/admin/event-management" },
  { name: "Manage Users", href: "/dashboard/admin/manage-users" },
  { name: "Overview", href: "/dashboard/admin/overview" },
  {
    name: "Reports And Analytics",
    href: "/dashboard/admin/reports-n-analytics",
  },
];
const publisherNav: NavLinks = [
  { name: "Available Events", href: "/dashboard/publisher/available-events" },
  {
    name: "My Assigned Events",
    href: "/dashboard/publisher/my-assigned-events",
  },
  { name: "Progress Reports", href: "/dashboard/publisher/progress-reports" },
];

const Navbar = (): React.ReactNode => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ReduxProvider>
      <div className="flex items-center justify-between bg-gray-900 p-4 text-white">
        <div className="text-xl font-bold">Green Pulse</div>
        <div className="hidden items-center space-x-4 md:flex">
          <Navs closeMenu={closeMenu} menuOpen={menuOpen} />
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
          <Navs closeMenu={closeMenu} menuOpen={menuOpen} />
          <UserOrLogin />
        </div>
      )}
    </ReduxProvider>
  );
};

export default Navbar;

function UserOrLogin() {
  const { name } = useSelector((state: RootState) => state.userSlice);
  const dispatch = useDispatch();
  const logout = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
    });
  };

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
        <div className="flex items-center justify-between space-x-2">
          <div className="space-x-1">
            <span className="text-sm text-blue-300">Welcome,</span>
            <span className="font-semibold text-yellow-400">{name}</span>
          </div>
          <button
            onClick={logout}
            className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}

function Navs({
  closeMenu,
  menuOpen,
}: {
  closeMenu: React.MouseEventHandler<HTMLAnchorElement>;
  menuOpen: boolean;
}): React.ReactNode {
  const { role }: { role: UserType } = useSelector(
    (state: RootState) => state.roleSlice
  );

  return (
    <>
      {role === "user" &&
        navLinks.map((link) => (
          <Link
            onClick={closeMenu}
            href={link.href}
            key={link.name}
            className={`${menuOpen && "block"} hover:underline`}
          >
            {link.name}
          </Link>
        ))}
      {role === "admin" &&
        adminNav.map((link) => (
          <Link
            onClick={closeMenu}
            href={link.href}
            key={link.name}
            className={`${menuOpen && "block"} hover:underline`}
          >
            {link.name}
          </Link>
        ))}
      {role === "publisher" &&
        publisherNav.map((link) => (
          <Link
            onClick={closeMenu}
            href={link.href}
            key={link.name}
            className={`${menuOpen && "block"} hover:underline`}
          >
            {link.name}
          </Link>
        ))}
    </>
  );
}
