import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-24 bg-gray-100 ">
      <section className="flex flex-col items-center px-10 md:px-20 bg-white">
        <div className="flex flex-col items-center gap-3 mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold font-playfair text-center text-black">
            Contact Us
          </h2>
        </div>
        <p className="mb-8 text-center text-black max-w-6xl px-20">
          The Transparent Governance Foundation aims to promote good governance through integrity, transparency, accountability, civic engagement, inclusivity, education, research, partnerships, and monitoring public project execution. Reach out to us with your questions, suggestions, or to get involved.
        </p>
        <form className="bg-white p-8 my-10 rounded-lg border-2  border-black -lg max-w-md w-full font-montserrat">
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="  appearance-none  border border-black rounded w-full py-3 px-4  leading-tight focus:outline-none focus: -outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="  appearance-none  border border-black rounded w-full py-3 px-4  leading-tight focus:outline-none focus: -outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="  appearance-none  border border-black rounded w-full py-3 px-4  leading-tight focus:outline-none focus: -outline"
              id="message"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus: -outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
