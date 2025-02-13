import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBalanceScale, FaHandshake, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  const features = [
    {
      icon: <FaBalanceScale className="w-8 h-8 text-green-600" />,
      title: "Ethical Governance",
      description: "Promoting transparency and accountability in public institutions",
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-green-600" />,
      title: "Community Engagement",
      description: "Building bridges between government and citizens",
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-green-600" />,
      title: "Innovation",
      description: "Implementing modern solutions for transparent governance",
    },
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-linear-to-b from-white to-gray-50">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute right-1/2 bottom-0 -mb-8 -mr-24 w-[200px] h-[200px] rounded-full bg-green-700 blur-3xl" />
        <div className="absolute left-1/2 top-0 -mt-8 -ml-24 w-[200px] h-[200px] rounded-full bg-green-700 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            About Our Foundation
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with Overlay */}
          <div className="relative group">
            <div className="absolute inset-0 bg-green-600 rounded-lg transform rotate-6 transition-transform group-hover:rotate-8"></div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470"
                alt="Governance and Equity"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Championing Transparency Since 2023
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At <span className="font-semibold text-green-700">Transparent Governance Foundation (TGF)</span>,
                we are committed to fostering accountability, transparency, and equity in governance.
                Our mission is to empower citizens, strengthen institutions, and drive sustainable progress.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through strategic programs, advocacy campaigns, and collaborations,
                we work to ensure ethical leadership and social fairness in communities.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/who-we-are"
                className="inline-flex items-center px-8 py-3 bg-green-700 text-white rounded-lg
                          hover:bg-green-800 transition-colors duration-300 shadow-lg hover:shadow-xl
                          transform hover:-translate-y-0.5"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;