import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div className="flex flex-col items-center gap-14 h-[100dvh] py-10 px-20">
      <h3 className="font-playfair text-2xl font-semibold">Introduction to Our Organization</h3>
      <div className="flex justify-center gap-20 items-start ">
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
        <p className="text-sm leading-6 tracking-wide">
          Welcome to the <span className="font-semibold">Transparent Governance Foundation (TGF)</span>, where we are
          dedicated to championing good governance for equity, fairness, and
          justice. Founded in 2023 by a group of visionaries united by shared
          values and a common purpose,<span className="font-semibold">TGF</span> was established on the belief that
          promoting good governance is fundamental to sustainable progress,
          social harmony, and inclusive development.
          <br></br>At <span className="font-semibold">TGF</span>, we actively
          advocate for and advance principles and practices that uphold
          transparency, accountability, and ethical leadership. Our mission is
          to create an environment where institutions are strengthened and held
          accountable, and where citizens are empowered to participate
          meaningfully in decision-making processes, regardless of their
          background, gender, or socioeconomic status.
          <br/> We are committed to
          fostering a society where justice, fairness, and respect for human
          rights are paramount. Our initiatives and programs are designed to
          ensure that every individual has a voice and that our governance
          systems operate with the highest standards of integrity and
          transparency. <br/> Join us at <span className="font-semibold">TGF</span> as we work towards a brighter, more
          equitable future for all. Together, we can build a world where good
          governance leads to lasting positive change and a better quality of
          life for everyone.
        </p>
        <button className="border-white border-2 bg-green-800 px-6 py-2 text-white">Learn More</button>
        </div>

      </div>
    </div>
  );
};

export default Introduction;
