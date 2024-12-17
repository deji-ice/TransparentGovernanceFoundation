import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen rounded-b-[3rem] gap-14 py-10 px-5 bg-white">
      {/* Section Title */}
      <h2 className="text-2xl lg:text-3xl font-semibold text-center font-dm_sans text-gray-800">
        About Us
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Left: Image */}
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Governance and Equity"
          width={500}
          height={400}
          className="rounded-lg object-cover shadow-lg"
        />

        {/* Right: Text Content */}
        <div className="flex flex-col gap-5 text-gray-700 max-w-lg">
          <p>
            At <strong>Transparent Governance Foundation (TGF)</strong>, we are
            committed to fostering <strong>accountability, transparency</strong>{" "}
            and <strong>equity</strong> in governance. Founded in 2023, our
            mission is to empower citizens, strengthen institutions, and drive
            sustainable progress.
          </p>
          <p>
            Through strategic <strong>programs, advocacy campaigns</strong>, and{" "}
            <strong>collaborations</strong>, we work to ensure ethical
            leadership and social fairness in communities.
          </p>
          <p>
            <strong>
              Together, we can shape a future where governance serves the
              people.
            </strong>
          </p>

          {/* CTA Button */}
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2  shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
