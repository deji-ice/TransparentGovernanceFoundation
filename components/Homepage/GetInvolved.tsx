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
    <section className="flex flex-col items-center px-6 md:px-20 py-12 bg-white">
      {/* Section Heading */}
      <h2 className="text-2xl lg:text-3xl font-bold mb-7 font-dm_sans text-center text-gray-900">
        Get{" "}
        <span className="underline decoration-green-600 underline-offset-4">
          Involved
        </span>
      </h2>
      {/* Engagement Options */}
      <div className="flex flex-col gap-6 mb-12 items-center w-full">
        <h3 className="md:text-lg  text-base font-semibold text-center text-gray-800">
          We Challenge You to Get Involved and Make a Difference:
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {items.map((item: Item, index: number) => (
            <li
              key={index}
              className="flex flex-col justify-between h-64 p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              <span className="text-3xl text-green-700 bg-gray-50 w-fit rounded-full p-3">
                {item.icon}
              </span>
              <div className="mt-4 flex flex-col gap-2">
                <strong className="text-lg text-gray-900">{item.title}</strong>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6 items-center text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Why Your Involvement Matters
        </h3>
        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Your participation ensures our leaders are held accountable,
          institutions remain transparent, and every citizen has the opportunity
          to thrive. By joining TGF, you stand for justice, fairness, and human
          rights protection.
        </p>
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact-us"
            className="bg-green-700 text-white px-6 py-3 w-fit hover:bg-green-900 transition duration-300"
          >
            Take Action Now
          </Link>
          <Link
            href="/projects-program"
            className="bg-white text-green-700 px-6 py-3 w-fit border-2 border-green-700 hover:bg-green-50 transition duration-300"
          >
            Check Out Our Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
