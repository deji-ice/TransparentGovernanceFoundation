import React from "react";
import {
  FaHandshake,
  FaPeopleGroup,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";
import { IoLocationOutline, IoPeople } from "react-icons/io5";
import {
  FaArrowCircleRight,
  FaHandsHelping,
  FaNewspaper,
} from "react-icons/fa";
import { items } from "@/lib/data";

const GetInvolved = () => {
  return (
    <section className="flex flex-col  items-center px-10 md:px-20 py-8 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 font-playfair text-center text-black">
        Get{" "}
        <span className=" underline underline-offset-2 decoration-green-600 decoration-2">
          Involved
        </span>
      </h2>



      <section className="flex flex-col gap-3 mb-10 items-center">
        <h3 className="text-xl md:text-xl font-semibold mb-4 text-black">
          We Challenge You to Get Involved and Make a Difference:
        </h3>
        <ul className="grid grid-cols-3  items-center justify-center gap-5 text-black w-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-between h-[16rem] w-[20rem] gap-2 border p-8 border-gray-700/10 rounded-2xl"
            >
              <span className="text-3xl text-green-700 bg-gray-100 w-fit h-fit rounded-full p-3">{item.icon}</span>
              <div className="flex flex-col gap-2">
                <strong>{item.title}</strong>
                <p className="text-sm">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3 mb-10 items-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          Why Your Involvement Matters
        </h3>
        <p className="mb-6 text-center text-black max-w-5xl">
          Your participation ensures our leaders are held accountable,
          institutions remain transparent, and every citizen has the opportunity
          to thrive. By joining TGF, you stand for justice, fairness, and human
          rights protection.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          Take Action Now
        </h3>
        <p className="mb-6 text-center text-black max-w-3xl">
          Visit{" "}
          <a
            href="http://www.transparentgoodgovernance.org"
            className="text-blue-500 underline"
          >
            www.transparentgoodgovernance.org
          </a>{" "}
          to take action.
        </p>
      </section>
    </section>
  );
};

export default GetInvolved;
