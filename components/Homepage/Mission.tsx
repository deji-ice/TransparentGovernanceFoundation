import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 rounded-[2.5rem] justify-center gap-8 items-center px-6 py-10 sm:px-16">
      <Image
        alt="Our Mission"
        width={600}
        height={800}
        className=" shadow-lg"
        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex flex-col gap-6 text-gray-700">
        <h3 className="font-playfair text-xl sm:text-2xl font-semibold">
          Our{" "}
          <span className="underline decoration-green-800 decoration-2">
            Mission
          </span>
        </h3>
        <div className="flex flex-col gap-4 leading-relaxed">
          <p>
            Our mission is to uphold the principles of good governance, justice,
            and equity within the political landscape.
          </p>
          <ul className="list-disc ml-5 space-y-4">
            <li>
              We hold politicians and policymakers accountable by promoting
              transparency, integrity, and ethical decision-making.
            </li>
            <li>
              Our goal is to drive policy reforms that ensure social and
              economic justice, protecting human rights, and offering equal
              opportunities for all citizens.
            </li>
            <li>
              We actively engage in transformational projects aimed at advancing
              Nigeria into a globally competitive, well-managed industrial
              nation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;
