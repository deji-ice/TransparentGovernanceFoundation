import { programsAndProjects } from "@/lib/data";
import React from "react";
import Image from "next/image";
import {
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaChalkboardTeacher,
  FaVoteYea,
  FaGlobeAmericas,
  FaBookReader,
  FaLaptopCode,
  FaClinicMedical,
  FaSeedling,
  FaUserGraduate,
} from "react-icons/fa";

const programs = [
  {
    title: "Seminars, webinars, and capacity building conferences",
    icon: <FaChalkboardTeacher className="w-6 h-6" />,
  },
  {
    title: "Orientation on Democratic Processes and Adjustments",
    icon: <FaVoteYea className="w-6 h-6" />,
  },
  {
    title: "Diaspora Voting Lobby",
    icon: <FaGlobeAmericas className="w-6 h-6" />,
  },
  {
    title: "Community Education Support on Ethical Re-orientation",
    icon: <FaBookReader className="w-6 h-6" />,
  },
  {
    title: "Entrepreneurship Coaching and Mentoring",
    icon: <FaUserGraduate className="w-6 h-6" />,
  },
  {
    title:
      "E-Commerce Support (ICT) and Establishment of Regional Tech-Business Incubation Centers",
    icon: <FaLaptopCode className="w-6 h-6" />,
  },
  {
    title: "Medical Support Trips in collaboration with AMPA & CAMPA",
    icon: <FaClinicMedical className="w-6 h-6" />,
  },
  {
    title: "Agricultural Value-addition Training",
    icon: <FaSeedling className="w-6 h-6" />,
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 w-full h-full">
        <Image
          priority
          className="w-full h-full object-contain lg:object-cover lg:opacity-85"
          fill
          alt="background grid lines"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1734619158/Transparent%20Governance%20Foundation/Grid_layers_fryyuw.png"
        />
      </div>

      {/* Content Container - Add relative positioning and background opacity */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[45vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Abstract background representing transparency and technology"
            fill
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />{" "}
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <span className="text-green-400 font-medium tracking-wider uppercase mb-4">
              Transforming Communities
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 font-playfair">
              Programs and Projects
            </h1>
            <span className="text-green-400 font-semibold tracking-wider text-lg">
              2024-2026
            </span>
          </div>
        </section>

        {/* Introduction Section - Add semi-transparent background */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8 bg-white/95 rounded-2xl p-8">
            <div className="text-center space-y-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At Transparent Governance Foundation, we believe in implementing
                practical solutions that address real community needs.
              </p>
              <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            </div>
            <p className="text-gray-600 leading-relaxed text-center">
              Each initiative is developed through extensive consultation with
              community stakeholders, ensuring that our projects align with
              local priorities and create sustainable outcomes.
            </p>
          </div>
        </section>

        {/* Projects Grid - Add semi-transparent background */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsAndProjects?.map((item) => (
              <div
                key={item.title}
                className="group bg-white/95 rounded-2xl overflow-hidden border-2 border-gray-100 backdrop-blur-sm"
              >
                <div className="relative h-64">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Programs List Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 bg-white/95 rounded-xl py-4">
            Our <span className="text-green-700">Initiatives</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group flex items-start p-6 bg-white/95 rounded-xl border-2 border-gray-200 
                         hover:border-green-500 transition-all duration-300 backdrop-blur-sm"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl 
                              flex items-center justify-center text-green-600
                              group-hover:bg-green-100 transition-colors duration-300"
                >
                  {program.icon}
                </div>
                <p className="ml-4 text-gray-700 font-medium">
                  {program.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;
