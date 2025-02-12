import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaLightbulb, FaUsers } from "react-icons/fa";

const Mission = () => {
  const missionPoints = [
    {
      icon: <FaCheckCircle className="w-6 h-6 text-green-600" />,
      text: "We hold politicians and policymakers accountable by promoting transparency, integrity, and ethical decision-making."
    },
    {
      icon: <FaLightbulb className="w-6 h-6 text-green-600" />,
      text: "Our goal is to drive policy reforms that ensure social and economic justice, protecting human rights, and offering equal opportunities for all citizens."
    },
    {
      icon: <FaUsers className="w-6 h-6 text-green-600" />,
      text: "We actively engage in transformational projects aimed at advancing Nigeria into a globally competitive, well-managed industrial nation."
    }
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gray-50 skew-y-3 transform -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-green-100 rounded-xl -z-10 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="absolute -inset-4 bg-green-600 opacity-20 rounded-xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  alt="Our Mission - Promoting Good Governance"
                  width={600}
                  height={800}
                  className="object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470"
                  priority
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900">
                Our <span className="text-green-700">Mission</span>
              </h2>
              <div className="w-20 h-1 bg-green-600"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our mission is to uphold the principles of good governance, justice,
                and equity within the political landscape.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mt-1 flex-shrink-0">{point.icon}</div>
                  <p className="text-gray-700 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {[
                { number: "100+", label: "Projects" },
                { number: "50K+", label: "Citizens Reached" },
                { number: "25+", label: "Partners" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-green-700">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;