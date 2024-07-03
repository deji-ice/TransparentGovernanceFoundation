import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" relative bg-green-800 flex flex-col items-center justify-center gap-5 px-[20%] h-[94dvh] w-screen text-white">
      <Image
      className="absolute top-0 z-20 h-full w-[50rem] right-0"
        src={
          "https://res.cloudinary.com/dhvwthnzq/image/upload/v1720023999/Transparent%20Governance%20Foundation/wave_nvvvyj.png"
        }
        alt={"wave"}
        height={1000}
        width={500}
      />
      <p className="font-semibold">
        Empowering Communities for a Brighter Future
      </p>
      <div className="flex flex-col  gap-3 justify-center items-center">
        <h1 className="text-5xl font-playfair font-semibold text-center">
          Heroes of Transparent Governance Foundation
        </h1>
        <p className="text-center px-16 font-light text-sm ">
          At Transparent Governance Foundation, we promote good governance for
          sustainable progress and social harmony. Join us to bridge the gap
          between governments and the people.
        </p>
      </div>
      <div className=" mt-3 flex gap-10">
        <button className="bg-white text-green-800 px-6 py-2.5">
          Donate Now
        </button>{" "}
        <button className="border-white border-2 bg-green-800 px-6 py-2">
          Know About Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
