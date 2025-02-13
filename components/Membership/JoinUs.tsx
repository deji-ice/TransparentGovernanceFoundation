import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const JoinUs = () => {
  return (
    <div className="min-h-[400px] bg-linear-to-b from-gray-50 to-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join Our <span className="text-green-700">Mission</span>
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-green-600"></div>
            <p className="text-lg text-gray-600">Become a Member Today</p>
            <div className="h-[2px] w-12 bg-green-600"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Our members are dedicated professionals who are passionate about
            making a difference. If you share our commitment to good governance,
            transparency, and social justice, we invite you to join us.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/memberships"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-green-700 
                       text-white font-semibold rounded-lg hover:bg-green-800 
                       transition-all duration-300 border-2 border-transparent
                       hover:border-green-600"
            >
              <span>Become a Member</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <span className="text-gray-500">
              Learn more about membership benefits
            </span>
          </div>

          {/* Tagline */}
          <div className="mt-16 text-center">
            <p
              className="italic text-green-700 font-medium border-t-2 border-gray-100 
                         pt-8 max-w-md mx-auto"
            >
              Together, We Can Make a Difference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
