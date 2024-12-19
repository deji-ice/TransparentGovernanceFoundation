import Mission from "@/components/Homepage/Mission";
import { IoLocationOutline } from "react-icons/io5";
import React from "react";
import Image from "next/image";
import Introduction from "@/components/Homepage/Introduction";
import JoinUs from "@/components/Membership/JoinUs";

const AboutUs = () => {
  return (
    <div className="flex flex-col text-base">
      <section className="flex flex-col  bg-white ">
        <div className="flex gap-10 flex-col">
          <Image
            alt="Group of people in a meeting"
            width={584}
            height={289}
            className=""
            src={`https://images.unsplash.com/photo-1573166675921-076ea6b621ce?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8`}
          />

          <h2 className="text-2xl md:text-3xl font-bold  mb-1 font-dm_sans text-center text-black">
            Who We Are
          </h2>
          <div className="flex flex-col items-start px-8 gap-2">
            <p className="text-start text-black max-w-6xl">
              The Transparent Governance Foundation promotes good governance for
              sustainable progress, social harmony, and inclusivity.
            </p>
            <p className=" text-start text-black max-w-6xl">
              We uphold transparency, accountability, and ethical leadership,
              shaping just and equitable communities.
            </p>
            <p className="text-start text-black max-w-6xl">
              Inspired by diverse cultures, we aim to foster justice, fairness,
              and human rights for all.
            </p>
          </div>
          <div className="bg-gray-50 py-10 px-6 rounded-lg shadow-md max-w-3xl mx-auto text-start">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our <span className="underline decoration-green-700 underline-offset-1 decoration-2">Story</span></h2>
            <p className="text-gray-600 mb-4">
              Established in 2023, the Transparent Governance Foundation (TGF)
              began with a vision to champion good governance, accountability,
              and transparency. Rooted in justice and inclusivity, TGF empowers
              institutions and citizens to build a fairer society.
            </p>
            <p className="text-gray-600">
              Through advocacy, education, and collaboration, we unite
              individuals and organizations to foster leadership and governance
              excellence, working towards a brighter and more equitable future
              for all.
            </p>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <div className="relative z-10 w-full flex justify-center">
        <JoinUs />
      </div>
    </div>
  );
};

export default AboutUs;
