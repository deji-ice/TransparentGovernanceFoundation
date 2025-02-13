/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaQuestionCircle,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Phone",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    details: "info@transparencegovfoundation.org",
    link: "mailto:info@transparencegovfoundation.org",
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Office",
    details: "20504 E49 Avenue, Denver, Colorado 80249, USA",
    link: "https://maps.google.com/?q=20504+E49+Avenue+Denver+Colorado+80249",
  },
];

const faqs = [
  {
    question: "How can I get involved?",
    answer:
      "You can get involved by reaching out through our contact form, attending our events, or joining our volunteer program. We welcome individuals passionate about promoting transparency in governance.",
  },
  {
    question: "What is your mission?",
    answer:
      "Our mission is to promote good governance through various initiatives focusing on transparency, accountability, and civic engagement. We work to strengthen democratic institutions and empower citizens.",
  },
  {
    question: "How can I donate?",
    answer:
      "You can support our cause by making a donation through our secure payment platform or by contacting us directly for bank transfer details. All donations go towards promoting transparency in governance.",
  },
  {
    question: "Do you offer training programs?",
    answer:
      "Yes, we conduct regular training sessions on civic engagement, democratic processes, and good governance principles. Contact us to learn about upcoming programs.",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Enhanced Hero Section with subtle gradient */}
      <div className="w-full bg-gradient-to-r from-green-700 to-[#166534] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-green-50">
            Have questions? We're here to help promote transparency and good
            governance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Refined Contact Form Section */}
          <section className="bg-white rounded-lg border border-gray-300 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-300
                             focus:ring-1 focus:ring-green-500 focus:border-green-500 
                             transition-colors duration-200"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                  id="message"
                  rows={6}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                className="px-8 py-4 bg-green-600 text-white rounded-lg
                          hover:bg-green-700 transition-colors duration-200
                          font-medium w-full md:w-auto"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Refined Contact Info & Map Section */}
          <section className="space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start p-6 bg-white rounded-lg border border-gray-300
                 hover:border-green-500 hover:bg-green-50 transition-all duration-200"
                >
                  <div className="shrink-0 p-3 bg-green-50 rounded-lg text-green-600 border-2 border-green-200">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {info.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map with enhanced border */}
            <div className="bg-white rounded-lg border border-gray-300 p-2 h-[300px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7959899878874!2d-104.7584887!3d39.7863099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5ff587c9c6dd%3A0x7486e0d3d6c5bba2!2s20504+E+49th+Ave%2C+Denver%2C+CO+80249!5e0!3m2!1sen!2sus!4v1708561245095!5m2!1sen!2sus"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>

        {/* Refined FAQs Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-playfair mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our organization and
              how you can get involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-500 p-6
                         hover:border-green-500 hover:bg-green-50 transition-colors duration-200"
              >
                <div className="flex items-start">
                  <FaQuestionCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
