import Mission from "@/components/Homepage/Mission";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-14">
      <h1 className="font-playfair text-2xl font-semibold">Who We Are</h1>

      <Mission/>
    </div>
  );
};

export default AboutUs;