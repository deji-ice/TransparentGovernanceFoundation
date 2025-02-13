import React from "react";
import { items } from "@/lib/data";
import Link from "next/link";

interface Item {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GetInvolved: React.FC = () => {
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
            Get{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Involved</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-green-200 -rotate-2"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in building a more transparent and accountable future for all.
          </p>
        </div>

        {/* Challenge Section */}
        <div className="flex flex-col gap-8 mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800">
            We Challenge You to Make a Difference
          </h3>
          
          {/* Engagement Cards */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item: Item, index: number) => (
              <li
                key={index}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white
                          border border-gray-100 shadow-sm hover:shadow-xl
                          transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  <span className="text-3xl bg-green-50 text-green-700 w-fit rounded-xl p-4
                                group-hover:bg-green-100 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Why It Matters Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Your Involvement Matters
            </h3>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your participation ensures our leaders are held accountable,
              institutions remain transparent, and every citizen has the opportunity
              to thrive. By joining TGF, you stand for justice, fairness, and human
              rights protection.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-3 bg-green-700 text-white rounded-lg
                          hover:bg-green-800 transition-colors duration-300 shadow-lg hover:shadow-xl
                          transform hover:-translate-y-0.5"
              >
                Take Action Now
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
              <Link
                href="/projects-program"
                className="inline-flex items-center px-8 py-3 border-2 border-green-700 text-green-700
                          rounded-lg hover:bg-green-50 transition-colors duration-300"
              >
                View Our Programs
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
                    d="M9 5l7 7-7 7"
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

export default GetInvolved;