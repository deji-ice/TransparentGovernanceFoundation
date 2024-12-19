import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 bg-green-800 text-white w-full px-6 md:px-20 py-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
        {/* Foundation Info with Logo */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1734355553/Transparent%20Governance%20Foundation/IMG_8356_xtbhut.png"
              alt="Transparent Governance Foundation Logo"
              height={50}
              width={50}
              className="h-14 w-14 md:h-10 md:w-10 lg:h-14 lg:w-14"
            />
            <h2 className="text-xl md:text-base lg:text-xl font-bold">
              Transparent Governance Foundation
            </h2>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            Promoting transparency, accountability, and civic engagement to
            build a fair and just society.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold border-b border-green-700 pb-2">Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-green-300 transition-colors duration-200 cursor-pointer">Who We Are</li>
            <li className="hover:text-green-300 transition-colors duration-200 cursor-pointer">Programs & Projects</li>
            <li className="hover:text-green-300 transition-colors duration-200 cursor-pointer">Members</li>
          </ul>
        </div>

        {/* Location Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold border-b border-green-700 pb-2">Location</h3>
          <div className="space-y-2">
            <p className="font-medium">Denver</p>
            <p className="text-sm text-gray-200">
              20504 E49 Avenue, Denver, <br /> Colorado 80249, USA
            </p>
            <p className="text-sm text-green-300 cursor-pointer hover:text-green-200 transition-colors duration-200">
              See on map
            </p>
            <div className="pt-2">
              <p className="flex items-center gap-2">
                Email:{" "}
                <a href="mailto:info@tgf.com" className="text-green-300 hover:text-green-200 transition-colors duration-200">
                  info@tgf.com
                </a>
              </p>
              <p className="mt-1">Phone: 123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Membership and Social Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold border-b border-green-700 pb-2">Want to Join?</h3>
          <p className="hover:text-green-300 transition-colors duration-200 cursor-pointer">Sign up for our Newsletter</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg placeholder:text-sm bg-white/10 text-white border border-green-700 focus:outline-none focus:border-green-500 transition-colors duration-200"
          />
          <div className="flex flex-col gap-4 mt-2">
            <p className="font-semibold">Follow Us</p>
            <div className="flex gap-6 text-2xl">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`Social Link ${index + 1}`}
                  className="hover:text-green-300 transition-colors duration-200 transform hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-300 text-sm border-t border-green-700 pt-6">
        &copy; {new Date().getFullYear()} Transparent Governance Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
