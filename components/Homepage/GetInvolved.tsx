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

const GetInvolved = () => {
  return (
    <section className="flex flex-col  items-center px-10 md:px-20 py-8 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 font-playfair text-center text-black">
        Get{" "}
        <span className=" underline underline-offset-2 decoration-green-600 decoration-2">
          Involved
        </span>
      </h2>

      <div className="flex flex-col items-center mb-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          Join Us in Creating a Better Future for All
        </h3>
        <p className="mb-6 text-center text-black max-w-5xl">
          At TGF, we believe in the power of every individual to contribute to a
          just, fair, and transparent society. Upholding good governance
          principles, we ensure every voice is heard and every citizen can
          participate in decision-making processes.
        </p>
      </div>

      <section className="flex flex-col gap-3 mb-10 items-center">
        <h3 className="text-xl md:text-xl font-semibold mb-4 text-black">
          We Challenge You to Get Involved and Make a Difference:
        </h3>
        <ul className=" flex flex-col items-center justify-center gap-5  text-black w-full  ">
          <div className="flex *:w-[20rem] gap-5 *:h-[14rem] *:flex *:flex-col *:gap-2 *:border-2 *:p-5 *:border-gray-700 *:rounded-2xl">
            <li className="flex flex-col h-fit">
              <span>
                <FaUserPlus className=" text-2xl text-green-700" />{" "}
              </span>
              <strong>Become a Member:</strong>
              <p className="text-sm">
                Join our community to promote transparency, integrity, and
                equity in governance. Access exclusive resources, events, and
                opportunities to engage with leaders and policymakers.
              </p>
            </li>
            <li>
              <span>
                <FaHandsHelping className=" text-2xl text-green-700" />
              </span>
              <strong>Support Our Initiatives:</strong>
              <p className="text-sm">
                Drive change through donations, volunteering, or spreading the
                word. Your support is vital for policy reforms and
                transformational projects.
              </p>
            </li>
            <li>
              <span>
                <FaUser className=" text-2xl text-green-700" />
              </span>
              <strong>Participate in Our Programs:</strong>
              <p className="text-sm">
                Engage in workshops, seminars, and advocacy campaigns. Equip
                yourself with the tools to actively shape our nation's future.
              </p>
            </li>
          </div>

          <div className="flex *:h-[14rem] *:w-[20rem] gap-5 *:flex *:flex-col *:gap-2 *:border-2 *:p-5 *:border-gray-700 *:rounded-2xl">
            <li className="">
              <span>
                <FaHandshake className=" text-2xl text-green-700" />
              </span>
              <strong>Collaborate with Us:</strong>
              <p className="text-sm">
                If you represent an organization, institution, or community
                group, collaborate with TGF to amplify our collective impact.
              </p>
            </li>
            <li className="">
              <span>
                <FaNewspaper className=" text-2xl  text-green-700 " />
              </span>
              <strong>Stay Informed:</strong>
              <p className="text-sm">
                Subscribe to our newsletter and follow us on social media to
                stay updated on our activities, events, and advocacy efforts.
              </p>
            </li>
          </div>
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
