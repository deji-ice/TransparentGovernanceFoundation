import { programsAndProjects } from "@/lib/data";
import React from "react";
import Image from "next/image";

const Progarms = () => {
  return (
    <div className="bg-white relative py-10 px-6 max-w-7xl mx-auto">
      <div className="fixed inset-0 w-full h-full">
        <Image
          priority
          className="w-full h-full object-contain lg:object-cover"
          fill
          alt="background grid lines"
          src={`https://res.cloudinary.com/dhvwthnzq/image/upload/v1734609914/Transparent%20Governance%20Foundation/Grid_5_uhrbze.svg`}
        />
      </div>

      <div className="relative"></div>
      <h1 className="flex flex-col items-center justify-center gap-1 text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Programs and Projects
        <span className="block font-montserrat text-green-950 text-xs  font-semibold">
          (2024–2026)
        </span>
      </h1>

      <div className="text-gray-600 mb-12 space-y-4 lg:h-[40vh] lg:flex flex-col justify-center max-w-2xl lg:max-w-4xl  mx-auto">
        <p className="leading-relaxed">
          At Transparent Governance Foundation, we believe in implementing
          practical solutions that address real community needs. Our programs
          are carefully designed to promote transparency, accountability, and
          effective governance at all levels.
        </p>

        <p className="leading-relaxed">
          Each initiative is developed through extensive consultation with
          community stakeholders, ensuring that our projects align with local
          priorities and create sustainable outcomes. We focus on both immediate
          impact and long-term development goals.
        </p>
      </div>
      <hr className=" rounded-3xl h-1 bg-green-800/80 w-[50%] mx-auto mb-12" />

      <div className="text-gray-600 mb-12 max-w-4xl mx-auto ">
        <p className="leading-relaxed md:px-6">
          Explore our range of programs designed for community development, from
          technology solutions to agricultural training. Each initiative aims to
          create meaningful change and shape a better future for our
          communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-6 gap-4 mx-auto justify-items-center">
        {programsAndProjects?.map((items) => (
          <div
            className="bg-[#f2faf6] gap-4 rounded-2xl lg:rounded-3xl w-[80vw] md:w-fit lg:w-fit flex flex-col p-4"
            key={items.title}
          >
            <Image
              className="w-fit md:h-56 lg:h-64 rounded-lg lg:rounded-2xl lg:object-cover"
              src={items.image}
              alt={items.title}
              width={500}
              height={300}
            />
            <div className="flex flex-col gap-1 ">
              <h3 className="text-xl  text-gray-800">{items.title}</h3>
              <p className="text-[13px] md:text-base text-[#090909CC]  lg:font-light ">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ul className="space-y-4 text-gray-700">
        {[
          "Seminars, webinars, and capacity building conferences",
          "Orientation on Democratic Processes and Adjustments",
          "Diaspora Voting Lobby",
          "Community Education Support on Ethical Re-orientation",
          "Entrepreneurship Coaching and Mentoring",
          "E-Commerce Support (ICT) and Establishment of Regional Tech-Business Incubation Centers",
          "Medical Support Trips in collaboration with AMPA & CAMPA",
          "Agricultural Value-addition Training",
        ].map((program, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-600 font-bold mr-2">•</span>
            {program}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progarms;
