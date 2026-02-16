import React from "react";
import FadeIn from "./components/FadeIn";
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const email = "umangsingh0008@gmail.com"; // replace with your real email

  return (
    <FadeIn>
      <section
        id="contact"
        className="relative  w-full bg-black overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-[120%] h-[120%] bg-gradient-to-r from-purple-800 via-black to-blue-800 opacity-20 animate-floatingGlow rounded-full blur-3xl mx-auto" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24  text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-100 mb-4">
            Contact Me
          </h2>

          {/* Quote */}
          <p className="text-orange-400 italic text-base sm:text-lg mb-10">
            “Hard work beats talent when talent doesn’t work hard.”
          </p>

          {/* CTA */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-100 mb-10 tracking-widest uppercase">
            Let’s Connect Together
          </p>

          {/* Email display */}
         

          {/* Contact Actions */}
          <div className="flex flex-col items-center gap-6">
            
            {/* Call + LinkedIn */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="tel:+919313324366" // replace with your number
                className="flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-medium text-orange-50 bg-black/50 rounded-full backdrop-blur-md border border-white/20 hover:bg-green-700 transition"
              >
                <FaPhoneAlt /> Call
              </a>

              <a
                href="https://www.linkedin.com/in/umang-singho8"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-medium text-orange-50 bg-black/50 rounded-full backdrop-blur-md border border-white/20 hover:bg-blue-600 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>

            {/* OR divider */}
            <div className="flex items-center gap-3 text-orange-400 text-sm tracking-widest">
              <span className="h-px w-10 bg-orange-400/40"></span>
              OR
              <span className="h-px w-10 bg-orange-400/40"></span>
            </div>

            {/* Email button */}
             <p className="text-orange-300 text-sm sm:text-base mb-1">
            {email}
          </p>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-orange-50 bg-black/50 rounded-full backdrop-blur-md border border-white/20 hover:bg-red-600 transition"
            >
              <FaEnvelope /> Connect via Email
            </a>
          </div>
        </div>

        {/* Floating Animation */}
        <style>
          {`
            @keyframes floatingGlow {
              0% { transform: translate(0, 0); }
              50% { transform: translate(-50px, 50px); }
              100% { transform: translate(0, 0); }
            }
            .animate-floatingGlow {
              animation: floatingGlow 40s ease-in-out infinite;
            }
          `}
        </style>
      </section>
    </FadeIn>
  );
};

export default Contact;
