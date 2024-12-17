import React from "react";

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-6 sm:px-16 lg:px-32  py-10 gap-6 md:gap-10">
      {/* Title */}
      <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
        Join Us
      </h3>

      {/* Content */}
      <p className="text-center text-sm sm:text-base lg:text-lg leading-relaxed">
        Our members are dedicated professionals who are passionate about making
        a difference. If you share our commitment to good governance,
        transparency, and social justice, we invite you to join us.
        <br />
        <br />
        Visit our <span className="text-green-600 font-semibold">Membership Page</span> to learn more about how you can become a part of TGF and contribute to our mission.
      </p>

      {/* Tagline */}
      <span className="italic text-green-600 font-semibold text-sm sm:text-base">
        Transparent Governance Foundation – Together, We Can Make a Difference
      </span>
    </div>
  );
};

export default JoinUs;
