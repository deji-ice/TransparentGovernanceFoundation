"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="w-screen bg-white text-black shadow fixed z-30 top-0 font-programme ">
      <div className="justify-between px-4 mx-auto md:max-w-7xl md:items-center lg:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 lg:py-2 ">
            <Link href={"/"}>
              <Image
                src={`https://res.cloudinary.com/dhvwthnzq/image/upload/v1734355553/Transparent%20Governance%20Foundation/IMG_8356_xtbhut.png`}
                alt="logo ice"
                className="h-14 w-14"
                height={300}
                width={300}
              />
            </Link>

            <div className="lg:hidden">
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
        </div>
        <div >
          <div
            className={`flex-1 justify-self-center pb-3 mb-4 mt-8 lg:block lg:pb-0 md:mt-3 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              className="items-center justify-center md:text-xl lg:text-base space-y-8 lg:flex 
                    lg:flex-row lg:space-x-6 lg:mr-10 lg:space-y-0  md:space-y-10 transition-all duration-300 ease-in-out"
            >
              {[
              { href: "/", label: "Home" },
              { href: "/AboutUs", label: "Who we are" },
              { href: "/Membership", label: "Membership" },
              { href: "#projects", label: "Programs" },
              { href: "/Contact", label: "Contact Us" },
              ].map((link) => (
              <li
                key={link.href}
                className={`text-green-800 md:min-w-fit hover:text-green-900 hover:underline underline-offset-4 transition-all  duration-300 ease-in-out ${
                pathname === link.href ? "font-semibold" : ""
                }`}
              >
                <Link href={link.href}>
                <p onClick={() => setNavbar(!navbar)}>{link.label}</p>
                </Link>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
