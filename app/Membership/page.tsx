import Executives from "@/components/Membership/Executives";
import JoinUs from "@/components/Membership/JoinUs";
import { leaders } from "@/lib/data";
import React from "react";

const Membership = () => {
  return (
    <div className=" flex flex-col w-screen overflow-x-clip items-center justify-between mt-24 px-20">
      <h2 className="mb-14 font-playfair text-3xl font-semibold">Meet Our Visionaries Members</h2>
      <div className="flex flex-col items-center gap-12">
        <p className="px-32">
          At the Transparent Governance Foundation (TGF), our members are the
          heart and soul of our mission to promote good governance, 
          accountability, and social justice. We are proud to introduce you to
          some of the dedicated individuals who are working tirelessly to create
          a better future for all. Each member brings unique skills,
          experiences, and a shared passion for making a positive impact in our
          society.
        </p>
        <div>
          <p className="px-32 mb-16">
            While the TGF foundation members include the following visionaries,
            we hope to grow our membership for effectiveness. The following are
            the visionary members with their portfolios and brief background
            information. The names are in the last name-alphabetical order:
          </p>
          <div className=" h-full flex flex-col items-center">
          <Executives leaders={leaders} />
          </div>
        </div>
        <div>
          <JoinUs />
        </div>
      </div>
    </div>
  );
};

export default Membership;
