"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="w-screen bg-white text-black shadow fixed py-2 z-50 top-0 font-programme">
      <div className="flex justify-between items-center px-4 md:px-14 mx-auto md:max-w-7xl">
        {/* Logo and NavLinks */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={`https://res.cloudinary.com/dhvwthnzq/image/upload/v1734355553/Transparent%20Governance%20Foundation/IMG_8356_xtbhut.png`}
              alt="logo ice"
              className="h-12 w-12"
              height={300}
              width={300}
              priority
            />
          </Link>

          {/* NavLinks (hidden on small screens) */}
          <ul className="hidden lg:flex gap-6 lg:ml-8 items-center">
            {[
              // { href: "/", label: "Home" },
              { href: "/who-we-are", label: "Who we are" },
              { href: "/membership", label: "Membership" },
              { href: "/projects-programs", label: "Programs" },
              { href: "/contact-us", label: "Contact Us" },
            ].map((link) => (
              <li
                key={link.href}
                className={`text-green-800 hover:text-green-900 hover:underline hover:transition hover:ease-in-out hover:duration-300 underline-offset-4 transition-all duration-300 ease-in-out ${
                  pathname === link.href ? "font-semibold" : ""
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Donate CTA Button (visible on lg screens) */}
        <div className="hidden lg:block">
          <Link href="/donate">
            <button className="bg-green-800 text-white px-5 py-2 rounded hover:bg-green-900 transition duration-300 ease-in-out">
              Donate
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className=" flex lg:hidden">
          <button
            className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden px-4 pt-4 pb-6 ${
          navbar ? "block" : "hidden"
        } bg-white shadow-lg`}
      >
        <ul className="space-y-4">
          {[
            // { href: "/", label: "Home" },
            { href: "/who-we-are", label: "Who we are" },
            { href: "/membership", label: "Membership" },
            { href: "/projects-programs", label: "Programs" },
            { href: "/contact-us", label: "Contact Us" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setNavbar(false)}
                className={`text-green-800 hover:text-green-900 hover:underline underline-offset-4 block`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Donate Button for Mobile */}
          <li>
            <Link href="/donate">
              <button className="bg-green-800 text-white px-4 py-2 w-full rounded hover:bg-green-900 transition duration-300">
                Donate
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
