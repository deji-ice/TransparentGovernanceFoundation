import Image from "next/image";
import React from "react";
 
const Mission = () => {
  return (
    <div className="flex flex-row-reverse justify-center gap-20 items-start px-20 py-16">
      <Image
        alt={"mission"}
        width={600}
        height={1000}
        className=" rounded-br-[3rem]"
        src={
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <div className=" flex flex-col gap-5">
        <h3 className="font-playfair text-2xl font-semibold">
          Our{" "}
          <span className=" underline underline-offset-1 decoration-green-800 decoration-2">
            Mission{" "}
          </span>
          Statement
        </h3>
        <div className="flex flex-col gap-4 leading-relaxed">
          <p>
            Our mission is to champion the principles of good governance,
            justice, and equity within the political landscape.
          </p>
          <ol type="a" className="space-y-4 text-sm list-decimal list-inside tracking-wide ml-5">
            <li>
              As a dedicated advocacy group, we work tirelessly to hold
              politicians and policymakers accountable, promoting transparency,
              integrity, and ethical decision-making.
            </li>
            <li>
              We aim to influence policy reforms that advance social and
              economic justice, protect human rights, and ensure equal
              opportunities for all citizens in the spirit of true Federalism.
            </li>
            <li>
              We engage in and support the implementation of transformational
              investment projects that aim to make Nigeria an advanced
              industrial nation, managed in accordance with internationally
              accepted management procedures and best practices.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Mission;
