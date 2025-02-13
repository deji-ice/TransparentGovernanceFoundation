import Executives from "@/components/Membership/Executives";

import { leaders } from "@/lib/data";
import Image from "next/image";
import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaLightbulb,
  FaStar,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

const membershipTiers = [
  {
    name: "Individual Member",
    price: "$50",
    period: "annually",
    features: [
      "Access to member-only events",
      "Quarterly newsletter subscription",
      "Voting rights in general assemblies",
      "Access to online resources",
    ],
    recommended: false,
  },
  {
    name: "Professional Member",
    price: "$150",
    period: "annually",
    features: [
      "All Individual Member benefits",
      "Professional development workshops",
      "Committee participation rights",
      "Leadership opportunities",
      "Mentorship program access",
    ],
    recommended: true,
  },
  {
    name: "Corporate Member",
    price: "$500",
    period: "annually",
    features: [
      "All Professional Member benefits",
      "Corporate recognition",
      "Speaking opportunities",
      "Priority event sponsorship",
      "Custom training sessions",
    ],
    recommended: false,
  },
];

const Membership = () => {
  return (
    <div className="relative flex flex-col bg-white gap-10 text-black w-full overflow-x-hidden items-center justify-between">
      {/* Background Image */}
      <Image
        className="fixed inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
        priority
        alt="background grid lines"
        src="/Grid 2(1).svg"
      />

      {/* Hero Section */}
      <div className="relative z-10 min-h-[60vh] w-full flex flex-col items-center justify-center py-20 px-4">
        <span className="text-green-600 font-medium tracking-wider uppercase mb-4">
          Join Our Community
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 font-playfair">
          Our Dedicated Members
        </h1>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At TGF, our members are the backbone of our vision for transparency
            and accountability. Meet the individuals driving change and shaping
            a brighter future for everyone.
          </p>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            With diverse skills and experiences, our members collaborate to
            advance good governance and transparency. Their commitment is the
            key to our shared success.
          </p>
        </div>
      </div>

      {/* Executives Section with enhanced styling */}
      <div className="relative z-20 w-full py-20 bg-white/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-4">
              Meet Our <span className="text-green-700">Visionary Leaders</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to advancing transparency and
              good governance
            </p>
          </div>
          <Executives leaders={leaders} />
        </div>
      </div>

      {/* Enhanced Membership Benefits Section */}
      <section className="relative z-20 w-full py-20 bg-linear-to-b from-white/90 to-gray-50/90 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why <span className="text-green-700">Join Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of being part of a transformative
              community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaHandshake className="w-8 h-8" />,
                title: "Network & Collaborate",
                description:
                  "Connect with like-minded professionals and industry leaders",
              },
              {
                icon: <FaUsers className="w-8 h-8" />,
                title: "Community Impact",
                description:
                  "Contribute to meaningful projects that shape our communities",
              },
              {
                icon: <FaLightbulb className="w-8 h-8" />,
                title: "Professional Growth",
                description:
                  "Access exclusive workshops and training opportunities",
              },
              {
                icon: <FaStar className="w-8 h-8" />,
                title: "Recognition",
                description:
                  "Get acknowledged for your contributions to transparency",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-xs p-8 rounded-xl border-2 border-gray-200
                         hover:border-green-500 transition-all duration-300"
              >
                <div className="text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="relative z-20 w-full py-20 bg-white/80 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Membership <span className="text-green-700">Tiers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the membership level that best suits your goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <div
                key={index}
                className={`
                  relative bg-white rounded-xl border-2 p-8
                  ${
                    tier.recommended
                      ? "border-green-500 shadow-xl scale-105"
                      : "border-gray-200 hover:border-green-500"
                  }
                  transition-all duration-300
                `}
              >
                {tier.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-green-700">
                    {tier.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{tier.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <Link
                    href="/contact-us"
                    className={`
                    w-full py-4 rounded-lg font-semibold 
                    flex items-center justify-center gap-2 
                    transition-all duration-300
                    ${
                      tier.recommended
                        ? "bg-green-600 text-white hover:bg-green-700 hover:scale-105"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105"
                    }
                  `}
                  >
                    Get Started <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Help Text */}
          <p className="text-center mt-12 text-gray-600">
            Have questions about membership?
            <Link
              href="/contact-us"
              className="text-green-600 hover:text-green-700 font-medium ml-2"
            >
              Contact us →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Membership;
