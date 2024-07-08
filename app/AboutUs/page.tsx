import Mission from "@/components/Homepage/Mission";
import { IoLocationOutline } from "react-icons/io5";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-10">
      <section className="flex flex-col items-center px-10 md:px-20 py-8 bg-white">
        <div className="flex flex-col items-center gap-3 mb-14">
          <IoLocationOutline className="text-4xl text-green-600" />
          <h2 className="text-3xl md:text-4xl font-bold  font-playfair text-center text-black">
            Who We Are
          </h2>
        </div>

        <div className="flex gap-10 items-center">
          <Image
            alt="kk"
            width={584}
            height={289}
            className="rounded-tl-[3rem]"
            src={
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <div className="flex flex-col items-start ">
          <p className="mb-3 text-start text-black max-w-6xl">
          The Transparent Governance Foundation is a Non-Governmental Organization dedicated to promoting good governance as a cornerstone for sustainable progress, social harmony, and inclusive development.
        </p>
        <p className="mb-3 text-start text-black max-w-6xl">
          We advance principles of transparency, accountability, and ethical leadership, recognizing the critical role of governance in shaping nations and communities.
        </p>
        <p className="mb-3 text-start text-black max-w-6xl">
          Our mission is to strengthen institutions and empower citizens to participate meaningfully in decision-making, regardless of their background.
        </p>
        <p className="text-start text-black max-w-6xl">
          Inspired by diverse cultures, we strive to foster a society where justice, fairness, and respect for human rights prevail.
        </p>
          </div>
        </div>

        {/* <p className="text-center text-black max-w-6xl">
          Drawing inspiration from the collective wisdom of diverse cultures and
          civilizations, the Foundation aspires to foster an enlightened and
          harmonious society where the principles of justice, fairness, and
          respect for human rights prevail.
        </p> */}
      </section>
      <Mission />
    </div>
  );
};

export default AboutUs;
