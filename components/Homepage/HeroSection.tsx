"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DonationPopup from "../DonationPopup";

const HeroSection = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const toggleDonate = () => {
    // console.log("first");
    setIsDonateOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative bg-green-800 flex flex-col items-center justify-center gap-5 px-4 md:px-[10%] h-[94dvh] w-screen text-white">
        <Image
          className="absolute top-0  h-full w-[70rem] md:w-[50rem] right-0 object-cover opacity-50"
          src={
            "https://res.cloudinary.com/dhvwthnzq/image/upload/v1720023999/Transparent%20Governance%20Foundation/wave_nvvvyj.png"
          }
          alt={"wave"}
          height={1000}
          width={500}
          priority
        />
        <p className="font-semibold text-center font-dm_sans italic md:text-xl">
          Empowering Communities for a Brighter Future
        </p>
        <div className="flex flex-col gap-3 md:gap-8 justify-center items-center">
          <h1 className="text-3xl md:text-4xl  w-full font-playfair font-semibold text-center">
            Heroes of Transparent Governance Foundation
          </h1>
          <p className="text-center px-4 lg:px-16 font-light text-sm md:text-lg">
            At Transparent Governance Foundation, we promote good governance for
            sustainable progress and social harmony. Join us to bridge the gap
            between governments and the people.
          </p>
        </div>
        <div className="mt-3 flex relative z-10 flex-col md:flex-row gap-3 md:gap-10">
          <button
            onClick={toggleDonate}
            className="bg-white text-green-800 px-6 py-2.5 rounded-lg
              hover:bg-gray-100 transition-all duration-300 
              hover:shadow-lg active:scale-95"
          >
            Donate Now
          </button>

          <button className="border-white border-2  bg-green-800 px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
            <Link href="/who-we-are">Know About Us</Link>
          </button>
        </div>
      </div>

      <DonationPopup
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />
    </>
  );
};

export default HeroSection;
