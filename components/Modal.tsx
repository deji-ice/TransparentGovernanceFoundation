"use client";
import { Leader } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";

const Modal = ({
  showModal,
  setShowModal,
  data,
}: {
  data: Leader;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-green-500/50 flex items-center justify-center">
          <div className="flex gap-2 bg-white rounded-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="btn h-12 w-12 bg-white text-green-500 rounded-full font-semibold btn-sm btn-circle btn-ghost absolute right-[-15px] top-[-10px]"
            >
              ✕
            </button>

            <div>
              <Image width={200} src={data.pic ?? ""} alt={""} height={300} />
            </div>
            <div className="flex flex-col gap-10 justify-between px-10">
              <span className="text-lg flex flex-col  ">
                <p className="font-semibold transition-all duration-500 ease-in">
                  {data.title}
                </p>
                <p> {data.name}</p>
              </span>
              <div className="h-[20rem] w-[20rem] overflow-y-scroll ">
                <p className="text-sm">{data.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
