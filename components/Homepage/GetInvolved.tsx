import React from "react";

const GetInvolved = () => {
  return (
    <section className="flex flex-col bg-gray-50 items-center px-10 md:px-20 py-8 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 font-playfair text-center text-black">
        Get{" "}
        <span className=" underline underline-offset-2 decoration-green-600 decoration-2">
          Involved
        </span>
      </h2>

      <div>
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

      <section>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          We Challenge You to Get Involved and Make a Difference:
        </h3>
        <ul className=" flex flex-col items-center justify-center gap-10  text-black w-full  ">
          <div className="flex *:w-[20rem] gap-5 *:flex *:flex-col *:gap-1">
            <li>
              <strong>Become a Member:</strong>
              <p>
                Join our community committed to promoting transparency,
                integrity, and equity in governance. Access exclusive resources,
                events, and opportunities to engage with thought leaders and
                policymakers.
              </p>
            </li>
            <li>
              <strong>Support Our Initiatives:</strong>
              <p>
                Drive meaningful change through donations, volunteering, or
                spreading the word. Your support is crucial to advocating for
                policy reforms and implementing transformational projects.
              </p>
            </li>
            <li>
              <strong>Participate in Our Programs:</strong>
              <p>
                Engage in workshops, seminars, and advocacy campaigns. Equip
                yourself with the tools to actively shape our nation's future.
              </p>
            </li>
          </div>

          <div className="flex *:w-[20rem] gap-5 *:flex *:flex-col *:gap-1">
            <li className="col-start-[1.5]">
              <strong>Collaborate with Us:</strong>
              <p>
                If you represent an organization, institution, or community
                group, collaborate with TGF to amplify our collective impact.
              </p>
            </li>
            <li className="col-start-2">
              <strong>Stay Informed:</strong>
              <p>
                Subscribe to our newsletter and follow us on social media to
                stay updated on our activities, events, and advocacy efforts.
              </p>
            </li>
          </div>
        </ul>
      </section>

      <section>
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
