"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      className={`${
        isActive ? "text-pink-500 border-b-2 border-pink-500" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
