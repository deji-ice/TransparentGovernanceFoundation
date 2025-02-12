"use client";
import Link from "next/link";
import { useState, memo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DonationPopup from "./DonationPopup";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/memberships", label: "Membership" },
  { href: "/projects-program", label: "Programs" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

const LOGO_URL =
  "https://res.cloudinary.com/dhvwthnzq/image/upload/v1734355553/Transparent%20Governance%20Foundation/IMG_8356_xtbhut.png";

// Memoized NavLink component
const NavLink = memo(
  ({
    href,
    label,
    pathname,
    onClick,
  }: {
    href: string;
    label: string;
    pathname: string;
    onClick?: () => void;
  }) => (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`text-green-800 hover:text-green-900 hover:underline hover:transition hover:ease-in-out hover:duration-300 underline-offset-4 transition-all duration-300 ease-in-out ${
          pathname === href ? "font-semibold" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  )
);

NavLink.displayName = "NavLink";

// Memoized DonateButton component
const DonateButton = memo(
  ({
    className = "",
    onClick,
  }: {
    className?: string;
    onClick?: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`bg-[#166534] text-white px-6 py-2.5 rounded-lg
    hover:bg-green-700 transition-all duration-300 
    hover:shadow-lg active:scale-95 ${className}`}
    >
      Donate
    </button>
  )
);
DonateButton.displayName = "DonateButton";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDonate = () => setIsDonateOpen((prev) => !prev);

  return (
    <>
      <nav className="w-screen bg-white text-black shadow fixed py-2 z-50 top-0 font-programme">
        <div className="flex justify-between items-center px-4 md:px-14 mx-auto md:max-w-7xl">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Image
                src={LOGO_URL}
                alt="logo ice"
                className="h-12 w-12"
                height={300}
                width={300}
                priority
              />
            </Link>

            <ul className="hidden lg:flex gap-6 lg:ml-8 items-center">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} {...link} pathname={pathname} />
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <DonateButton onClick={toggleDonate} />
          </div>

          <button
            className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
                className="w-6 h-6"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-white">
            <ul className="space-y-10 mt-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  {...link}
                  pathname={pathname}
                  onClick={toggleMenu}
                />
              ))}
              <li>
                <DonateButton className="w-full" onClick={toggleDonate} />
              </li>
            </ul>
          </div>
        )}
      </nav>

      <DonationPopup
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />
    </>
  );
}
