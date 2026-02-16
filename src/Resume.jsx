import React from "react";
import FadeIn from "./components/FadeIn";

const Resume = () => {
  return (
    <FadeIn>
         <section
      id="resume"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 md:py-20 py-12 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-100 mb-12 text-center">
          Resume
        </h2>

        {/* Resume Card */}
        <div className="w-full max-w-4xl bg-black/40 rounded-2xl shadow-lg p-2 sm:p-8 md:p-10 text-orange-100">
          {/* Name */}
          <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
            Umang Singh
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-orange-300 mb-6">
            Frontend Developer · React.js · Tailwind · UI/UX Enthusiast
          </p>

          {/* Education */}
          <div className="mb-8">
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">
              Education
            </h4>
            <p className="text-sm sm:text-base">
              B.Tech – Information Technology
            </p>
            <p className="text-sm sm:text-base text-orange-300">
              Swarnim Startup and Innovation University
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">
              Technical Skills
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              <li>React.js, JavaScript, HTML, CSS, Tailwind CSS</li>
              <li>UI/UX Design Principles</li>
              <li>Responsive Web Design</li>
              <li>Git & GitHub (Version Control)</li>
            </ul>
          </div>

          {/* Projects */}
          <div className="mb-10">
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">
              Projects
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                 <li>E-Commerce Website (Next.js)</li>
              <li>Portfolio Website (React + Tailwind)</li>
              <li>Password Generator</li>
            </ul>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <a
              href="/resume/umangcv.pdf"
              download
              className="relative inline-flex items-center px-6 py-3 text-sm sm:text-base font-semibold text-orange-50 border border-white rounded-lg overflow-hidden group"
            >
              Download Resume
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-500 group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
 
  );
};

export default Resume;
