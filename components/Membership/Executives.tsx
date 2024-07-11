"use client";
import { Leader } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Modal from "../Modal";

const Executives = ({ leaders }: { leaders: Leader[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState<Leader | null>(null);

  const handleToggle = (i: React.SetStateAction<Leader | null>) => {
    setShowModal(!showModal);
    setUserData(i);
    console.log(showModal, "showModal");
  };
  return (
    <div className="relative flex flex-col items-center">
      <h3 className="absolute top-[-19px] bg-white px-5 text-2xl font-semibold font-playfair">
        The Executives
      </h3>
      <hr className="w-screen border-b border-b-black" />
      <div className="mt-16 grid grid-cols-4  justify-center mb-10 gap-10 h-full ">
        {leaders.map((item: Leader) => (
          <div
            key={item.id}
            className="group relative flex w-[200px] cursor-pointer flex-col gap-4 "
          >
            <div className="transition duration-300 ease-in-out transform hover:scale-105">
              <div className="group-hover:border-slate-100 border-transparent absolute top-4 left-1/2 transform -translate-x-1/2  h-44 w-44 border-2 rounded-full "></div>
              <div
                onClick={() => {
                  handleToggle(item);
                }}
                className="w-full h-[300px] absolute bg-transparent group-hover:bg-green-900  opacity-30 rounded-none transition-all duration-700 ease-in-out group-hover:rounded-2xl"
              ></div>
              <FaArrowRight className=" group-hover:bg-white group-hover:text-green-500 rounded-full text-xs p-4 h-12 w-12 text-transparent bg-transparent absolute top-3/4 right-2 transform -translate-y-1/2 transition-all duration-500 ease-in-out" />
              <Image
                width={200}
                height={300}
                src={item.pic ?? ""}
                alt={item.name ?? ""}
                className="rounded-none transition-all duration-700 ease-in-out group-hover:rounded-2xl"
              />
            </div>

            <span className="text-xs flex flex-col group-hover:text-white group-hover:absolute bottom-[17%]  transition-all duration-500 ease-in-out rounded-2xl group-hover:px-2 ">
              <p className="font-semibold transition-all duration-500 ease-in">
                {item.title}
              </p>
              <p> {item.name}</p>
            </span>
            <Modal
              data={userData}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executives;
