import Executives from "@/components/Membership/Executives";
import JoinUs from "@/components/Membership/JoinUs";
import { leaders } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Membership = () => {
  return (
    <div className="relative flex flex-col bg-white gap-10 text-black w-full overflow-x-hidden items-center justify-between mt-16">
      <Image
        className="absolute z-30 w-screen h-screen top-0 object-cover opacity-40 "
        width={1920}
        height={1080}
        alt="background grid lines"
        src={`/Grid 2(1).svg`}
      />

      <div className="h-screen w-full flex flex-col items-center justify-start lg:mt-0 lg:justify-center mt-20 gap-6">
        {/* Heading */}
        <h2 className="relative z-10   font-playfair text-2xl lg:text-3xl font-semibold text-center ">
          Meet Our Visionary Members
        </h2>
        {/* Intro Paragraph */}
        <div className=" z-10 flex flex-col items-center gap-6 text-center">
          <p className="px-4 md:px-16 lg:px-48 text-sm md:text-base leading-relaxed">
            At the Transparent Governance Foundation (TGF), our members are the
            heart and soul of our mission to promote good governance,
            accountability, and social justice. We are proud to introduce you to
            some of the dedicated individuals who are working tirelessly to
            create a better future for all. Each member brings unique skills,
            experiences, and a shared passion for making a positive impact in
            our society.
          </p>

          {/* Detailed Description */}
          <p className="px-4 md:px-8 lg:px-12 mb-8 md:mb-16 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto">
            These visionary members bring diverse skills and experiences to
            support TGF&apos;s mission of good governance and transparency. Their
            contributions are instrumental to our collective impact.
          </p>
        </div>
      </div>

      {/* Executives Section */}
      <div className="relative z-40 w-full flex flex-col items-center mb-12">
        <Executives leaders={leaders} />
      </div>

      {/* Join Us Section */}
      <div className="relative z-10 w-full flex justify-center">
        <JoinUs />
      </div>
    </div>
  );
};

export default Membership;