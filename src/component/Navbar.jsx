import userAvatar from "@/assets/user.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
const Navbar = () => {
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
        <div className="flex items-center gap-3">
          <Image src={userAvatar} alt="user avatar" width={40} height={40} />

          <Link
            href="/login"
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
