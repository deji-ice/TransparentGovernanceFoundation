import React from "react";
import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 sm:px-16 lg:px-32 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Title with decorative elements */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[2px] w-10 bg-green-600"></div>
          <h3 className="font-dm_sans text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Join Us
          </h3>
          <div className="h-[2px] w-10 bg-green-600"></div>
        </div>

        {/* Content with better typography and spacing */}
        <div className="space-y-6">
          <p className="text-center text-gray-700 text-lg leading-relaxed">
            Our members are dedicated professionals who are passionate about
            making a difference. If you share our commitment to good governance,
            transparency, and social justice, we invite you to join us.
          </p>

          {/* Call to action button */}
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/membership"
              className="inline-block px-8 py-3 bg-green-700 hover:bg-green-700 
                text-white font-semibold rounded-lg transition-colors duration-200
                shadow-md hover:shadow-lg cursor-pointer"
            >
              Become a Member
            </Link>
            <span className="text-gray-500 text-sm">
              Learn more about membership benefits
            </span>
          </div>

          {/* Tagline with subtle styling */}
          <div className="mt-12 text-center">
            <p
              className="italic text-green-600 font-medium text-sm sm:text-base
              border-t border-gray-200 pt-6 max-w-md mx-auto"
            >
              Transparent Governance Foundation –
              <br />
              Together, We Can Make a Difference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
