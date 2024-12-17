import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="flex bg-white flex-col items-center gap-14 h-[100dvh] py-10 px-10">
      <h3 className="font-dm_sans text-xl text-center font-semibold">
        Introduction to Our Organization
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 lg:items-start ">
        <Image
          className="object-cover "
          src={
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="people holding hands"
          width={500}
          height={800}
        />
        <div className="flex flex-col items-start gap-5">
          <p>
            Welcome to the Transparent Governance Foundation (TGF), where we
            champion good governance for equity, fairness, and justice. Founded
            in 2023 by visionaries united by shared values and a common purpose,
            TGF believes that promoting good governance is essential for
            sustainable progress, social harmony, and inclusive development.
          </p>
          <p>
            At TGF, we advocate for transparency, accountability, and ethical
            leadership. Our mission is to strengthen institutions, empower
            citizens to participate in decision-making processes, and foster a
            society where justice, fairness, and respect for human rights are
            paramount.
          </p>
          <p>
            <strong>
              Join us as we work towards a brighter, more equitable future for
              all.
            </strong>
          </p>
          <button className="border-white border-2 bg-green-800 px-6 py-2 text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
