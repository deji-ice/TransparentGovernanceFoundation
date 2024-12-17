import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 bg-green-800 text-white w-full px-10 md:px-20 py-8">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
        {/* Foundation Info with Logo */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1734355553/Transparent%20Governance%20Foundation/IMG_8356_xtbhut.png"
              alt="Transparent Governance Foundation Logo"
              height={50}
              width={50}
              className="h-12 w-12"
            />
            <h2 className="text-lg font-bold">
              Transparent Governance Foundation
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            Promoting transparency, accountability, and civic engagement to
            build a fair and just society.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Who We Are</li>
            <li className="hover:underline cursor-pointer">Programs & Projects</li>
            <li className="hover:underline cursor-pointer">Members</li>
          </ul>
        </div>

        {/* Location Section */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Location</h3>
          <p>Denver</p>
          <p className="text-sm">
            20504 E49 Avenue, Denver, <br /> Colorado 80249, USA
          </p>
          <p className="underline text-sm cursor-pointer hover:text-gray-300">
            See on map
          </p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:info@tgf.com" className="underline hover:text-gray-300">
              info@tgf.com
            </a>
          </p>
          <p>Phone: 123-456-7890</p>
        </div>

        {/* Membership and Social Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Want to Join?</h3>
          <p className="hover:underline cursor-pointer">Sign up for our Newsletter</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md placeholder:text-sm placeholder:px-3 bg-white text-gray-800"
          />
          <div className="flex flex-col gap-3">
            <p className="font-semibold">Follow Us</p>
            <div className="flex gap-4 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-300 text-xs border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Transparent Governance Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
