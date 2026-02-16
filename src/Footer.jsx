import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-orange-500/20">
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-orange-400">
            Umang Singh
          </h3>
          <p className="text-orange-100/70 text-sm mt-1">
            umangsingh0008@email.com
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-orange-100">
          <a
            href="https://www.linkedin.com/in/umang-singho8"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-orange-400 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/umango8"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-orange-400 transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-orange-100/40 pb-6">
        © {new Date().getFullYear()} Umang Singh
      </div>
    </footer>
  );
};

export default Footer;
