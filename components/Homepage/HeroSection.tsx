import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
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
      <div className="flex flex-col  gap-3 md:gap-8 justify-center items-center m">
        <h1 className="text-3xl md:text-4xl  w-full font-playfair font-semibold text-center">
          Heroes of Transparent Governance Foundation
        </h1>
        <p className="text-center px-4 lg:px-16 font-light text-sm md:text-lg">
          At Transparent Governance Foundation, we promote good governance for
          sustainable progress and social harmony. Join us to bridge the gap
          between governments and the people.
        </p>
      </div>
      <div className="mt-3 flex flex-col md:flex-row gap-3 md:gap-10">
        <button className="bg-white text-green-800 px-6 py-2.5">
          Donate Now
        </button>

        <button className="border-white border-2 relative z-10 bg-green-800 px-6 py-2">
          <Link href="/who-we-are">Know About Us</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
