import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 bg-green-800 text-white items-center w-screen px-20 py-5">
      <div className="flex gap-3 justify-between w-full py-5">
        <div>Transparent Governance Foundation</div>
        <div className="flex flex-col gap-3">
          <p className=" font-semibold">Links</p>
          <ul className="flex flex-col gap-3  items-start">
            <li>Who We ae</li>
            <li>Programs & Projects</li>
            <li>Members</li>
          </ul>
          {/* <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Work</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul> */}
        </div>
        <div className="flex flex-col items-start gap-3">
        <p className=" font-semibold">Location</p>
          <h6>Denver</h6>
          <div className="space-y-2">
            <p className="underline">info@tgf.com</p>
            <p>123-456-7890</p>
            <p>
              20504 E49 Avenue, Denver, <br /> Colorado 80249 USA
            </p>
          </div>
          <p>See on map</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <h6>Want to join become a member?</h6>
          <p className="underline">Sign up for our Newsletter</p>
          <div className="flex flex-col items-start gap-5">
            <p>Follow Us</p>
            <div className="flex text-lg gap-5">
              <FaFacebookF /> <FaXTwitter /> <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-xs">
        &copy; {new Date().getFullYear()} Transparent Governance Foundation. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
