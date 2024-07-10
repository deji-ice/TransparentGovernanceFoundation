"use client";
import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(!showModal);
    console.log(showModal,"showModal")
  };

  return (
    <div className="absolute ">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => handleToggle()}>
        open modal
      </button>
      {showModal && (
       
          <div className="bg-slate-800 absolute w-screen h-screen">
            <div className="bg-red-800">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
          </div>
      )}
    </div>
  );
};

export default Modal;
