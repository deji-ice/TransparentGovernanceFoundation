import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Foundation Info */}
          <div className="space-y-6">
            <Link
              href="/"
              className="group flex items-center gap-4 transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1734355553/Transparent%20Governance%20Foundation/IMG_8356_xtbhut.png"
                alt="TGF Logo"
                height={56}
                width={56}
                className="rounded-lg shadow-lg"
              />
              <h2 className="text-xl font-bold group-hover:text-green-300 transition-colors duration-300">
                Transparent Governance Foundation
              </h2>
            </Link>
            <p className="text-gray-200 leading-relaxed">
              Promoting transparency, accountability, and civic engagement to
              build a fair and just society for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold relative pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-green-600">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/who-we-are", label: "Who We Are" },
                { href: "/projects-program", label: "Programs & Projects" },
                { href: "/memberships", label: "Members" },
                { href: "/contact-us", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold relative pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-green-600">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="flex-shrink-0 w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-medium">Denver Office</p>
                  <p className="text-gray-200 mt-1">
                    20504 E49 Avenue, Denver,
                    <br />
                    Colorado 80249, USA
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@tgf.com"
                className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope className="w-5 h-5 text-green-600" />
                info@tgf.com
              </a>
              <a
                href="tel:123-456-7890"
                className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors duration-300"
              >
                <FaPhone className="w-5 h-5 text-green-600" />
                123-456-7890
              </a>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold relative pb-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-green-600">
              Stay Connected
            </h3>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg border border-green-600 
                           focus:border-green-400 focus:ring-1 focus:ring-green-400 
                           placeholder:text-gray-400 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 
                           bg-green-600 text-white rounded-md hover:bg-green-500 
                           transition-colors duration-300"
                >
                  Join
                </button>
              </div>
            </form>
            <div className="space-y-4">
              <p className="font-medium">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { Icon: FaFacebookF, href: "#" },
                  { Icon: FaXTwitter, href: "#" },
                  { Icon: FaLinkedinIn, href: "#" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                             bg-white/10 hover:bg-green-600 transition-all duration-300 
                             transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-green-600/30 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Transparent Governance Foundation.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
