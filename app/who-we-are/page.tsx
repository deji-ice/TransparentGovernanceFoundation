import React from "react";
import Image from "next/image";
import JoinUs from "@/components/Membership/JoinUs";
import {
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaBalanceScale,
} from "react-icons/fa";

const values = [
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Integrity",
    description:
      "We uphold the highest standards of ethics and transparency in all our actions.",
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Innovation",
    description:
      "We seek creative solutions to strengthen democratic institutions.",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Inclusivity",
    description:
      "We champion diversity and ensure all voices are heard and represented.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Foundation Established",
    description: "Launch of TGF with a vision for transparent governance",
  },
  {
    year: "2024",
    title: "Growing Impact",
    description: "Expanded reach and partnerships across multiple states",
  },
];

const focusAreas = [
  {
    title: "Policy Advocacy",
    description:
      "Promoting legislation and policies that enhance transparency and accountability in governance.",
    metrics: "25+ policy recommendations implemented",
  },
  {
    title: "Civic Education",
    description:
      "Empowering citizens with knowledge about their rights and democratic processes.",
    metrics: "10,000+ citizens trained",
  },
  {
    title: "Government Collaboration",
    description:
      "Working with government institutions to implement transparency initiatives.",
    metrics: "15 state partnerships",
  },
];

const impactMetrics = [
  {
    metric: "50+",
    label: "Transparency Projects",
    description: "Successfully implemented across multiple states",
  },
  {
    metric: "100K+",
    label: "Citizens Reached",
    description: "Through advocacy and education programs",
  },
  {
    metric: "30+",
    label: "Partner Organizations",
    description: "Working together for better governance",
  },
];

const storyTimeline = [
  {
    year: "2023",
    title: "The Beginning",
    description:
      "Founded in Denver, Colorado with a mission to transform governance through transparency and accountability.",
  },
  {
    year: "2023",
    quarter: "Q3",
    title: "First Initiative",
    description:
      "Launched our flagship civic education program, reaching over 1,000 citizens in the first month.",
  },
  {
    year: "2023",
    quarter: "Q4",
    title: "Growing Impact",
    description:
      "Established partnerships with 5 key government institutions and expanded to neighboring states.",
  },
  {
    year: "2024",
    quarter: "Q1",
    title: "Digital Transformation",
    description:
      "Introduced digital transparency tools and online training platforms to reach more communities.",
  },
  {
    year: "2024",
    title: "Looking Forward",
    description:
      "Expanding our reach nationwide with innovative programs and stronger partnerships.",
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col text-base">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          alt="Group of people in a meeting"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1573166675921-076ea6b621ce?w=1200"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-green-400 font-medium tracking-wider uppercase mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair text-center max-w-4xl px-4 leading-tight">
            Who <span className="text-green-400">We</span> Are
          </h1>
          <p className="mt-6 text-lg md:text-xl text-center max-w-2xl px-4 text-gray-200">
            Championing transparency and accountability in governance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Vision & Story Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our <span className="text-green-700">Vision</span>
                </h2>
                <div className="w-20 h-1 bg-green-600"></div>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    To create a society where governance is transparent, leaders
                    are accountable, and every citizen has an equal opportunity
                    to thrive.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We envision communities where decisions are made with
                    integrity, policies are inclusive, and public resources
                    serve the common good.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Story Section */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-700">Journey</span>
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-20">
                      <span className="text-green-700 font-bold">
                        {milestone.year}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Story Section */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our <span className="text-green-700">Story</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The journey of creating lasting change in governance
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line - Centered for desktop, left-aligned for mobile */}
                <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform -translate-x-1/2"></div>
                <div className="absolute md:hidden left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {storyTimeline.map((event, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } flex-col md:gap-16`}
                    >
                      {/* Timeline Point - Centered for desktop, left-aligned for mobile */}
                      <div
                        className={`
                          absolute w-4 h-4 rounded-full bg-green-600 border-4 border-green-100
                          md:left-1/2 md:-translate-x-1/2
                          left-8 -translate-x-1/2
                          mt-6 md:mt-8
                        `}
                      ></div>

                      {/* Content */}
                      <div
                        className={`
                        w-fit  md:w-[calc(50%-2rem)] ml-16 md:ml-0 pr-4 md:pr-0
                        ${index % 2 === 0 ? "md:text-right" : "md:text-left"}
                      `}
                      >
                        <div
                          className={`
                          bg-white rounded-xl border-2 border-gray-200 p-6
                          hover:border-green-500 transition-all duration-300
                          ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}
                        `}
                        >
                          <div
                            className={`
                            flex items-center gap-4 mb-4
                            ${
                              index % 2 === 0
                                ? "md:justify-end"
                                : "md:justify-start"
                            }
                          `}
                          >
                            <div className="flex-shrink-0 flex items-center gap-2">
                              <span className="text-green-700 font-bold text-lg">
                                {event.year}
                              </span>
                              {event.quarter && (
                                <span className="text-gray-500 text-sm">
                                  {event.quarter}
                                </span>
                              )}
                            </div>
                            <div className="w-12 h-0.5 bg-green-200"></div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Future Vision */}
                <div className="mt-20 text-center relative">
                  <div className="inline-block bg-green-50 rounded-xl p-8 border-2 border-green-200 max-w-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Looking to the Future
                    </h3>
                    <p className="text-gray-600">
                      As we continue to grow, our commitment to transparent
                      governance remains unwavering. Join us in shaping a future
                      where accountability and integrity are the foundations of
                      leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Values Section */}
          <div className="pt-16 border-t border-gray-200">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core <span className="text-green-700">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These principles guide our actions and shape our impact
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group text-center p-8 rounded-xl border-2 border-gray-200 
                           hover:border-green-500 transition-all duration-300 bg-white
                           hover:bg-green-50"
                >
                  <div
                    className="inline-block p-4 bg-green-50 rounded-xl text-green-600 mb-6
                                group-hover:bg-green-100 transition-colors duration-300"
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic <span className="text-green-700">Focus Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key areas where we drive change and create impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-gray-200
                         hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-green-700 font-medium">{area.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-700">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable progress in promoting transparent governance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactMetrics.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl border-2 border-gray-200
                         hover:border-green-500 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-green-700 mb-2">
                  {item.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.label}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Help Us Create{" "}
              <span className="text-green-700">Lasting Change</span>
            </h2>
            <p className="text-xl text-gray-600">
              Together, we can build a future where transparency and
              accountability are the cornerstones of governance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-green-700 text-white rounded-xl
                         hover:bg-green-800 transition-colors duration-300"
              >
                Contact Us
              </a>
              <a
                href="/projects"
                className="px-8 py-4 border-2 border-green-700 text-green-700 
                         rounded-xl hover:bg-green-50 transition-colors duration-300"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section
      <div className="relative z-10 w-full">
        <JoinUs />
      </div> */}
    </div>
  );
};

export default AboutUs;
