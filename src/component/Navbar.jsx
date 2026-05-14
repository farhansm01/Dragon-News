"use client";

import userAvatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  // console.log(session, "session");
  const user = session?.user;
  // console.log(user?.image, "user image");
  return (
    <nav className="w-full my-8 py-3 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Center: Nav Links */}
        <div className="flex-1 flex justify-center gap-8">
          <NavLink
            href="/"
            className="text-gray-600 hover:text-black text-sm font-medium transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            href="/about"
            className="text-gray-600 hover:text-black text-sm font-medium transition-colors"
          >
            About
          </NavLink>
          <NavLink
            href="/career"
            className="text-gray-600 hover:text-black text-sm font-medium transition-colors"
          >
            Career
          </NavLink>
        </div>

        {/* Right: Icon + Login Button */}
        {isPending ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : user ? (
          <div className="flex items-center gap-3">
            <h2>Welcome, {user?.name}</h2>
            <Image
              src={user?.image || userAvatar}
              alt="user avatar"
              width={40}
              height={40}
            />

            <button
              onClick={async () => await authClient.signOut()}
              className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
