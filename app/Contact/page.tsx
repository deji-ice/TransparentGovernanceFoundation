import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-24 bg-gray-100 p-6">
      <section className="flex flex-col items-center bg-white rounded-lg w-full max-w-4xl">
        <div className="flex flex-col items-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold font-playfair text-center text-black">
            Contact Us 
          </h2>
        </div>
        <p className="mb-8 text-center text-black max-w-2xl">
          The Transparent Governance Foundation aims to promote good governance through integrity, transparency, accountability, civic engagement, inclusivity, education, research, partnerships, and monitoring public project execution. Reach out to us with your questions, suggestions, or to get involved.
        </p>
        <form className="p-8 rounded-lg border-2 border-gray-300 bg-white w-full">
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-green-500"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-green-500"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:border-green-500"
              id="message"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded focus:outline-none"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </section>


      <section className="flex flex-col items-center bg-white rounded-lg w-full max-w-4xl mt-10 mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold font-playfair text-center text-black mb-4">
          Frequently Asked Questions (FAQs)
        </h3>
        <div className="text-black max-w-2xl">
          <h4 className="font-bold">Q: How can I get involved?</h4>
          <p className="mb-4">A: You can get involved by reaching out to us through the contact form or by attending our events.</p>
          <h4 className="font-bold mt-4">Q: What is your mission?</h4>
          <p className="mb-4">A: Our mission is to promote good governance through various initiatives and community engagement.</p>
          <h4 className="font-bold mt-4">Q: How can I donate?</h4>
          <p>A: You can donate by visiting our donation page or contacting us directly for more information.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
