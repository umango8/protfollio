import React, { useState } from "react";
import FadeIn from "./components/FadeIn";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [showAbout, setShowAbout] = useState(false);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={46} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={46} /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" size={46} /> },
    { name: "React", icon: <FaReact className="text-cyan-400" size={46} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={46} /> },
    { name: "GitHub", icon: <FaGithub className="text-white" size={46} /> },
  ];

  return (

     <section
      id="skills"
      className=" w-full bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 md:py-20 py-6 sm:py-12 flex justify-center">
        {/* Card Container */}
        <div className="w-full bg-gray-900/90 rounded-3xl p-6 sm:p-10 sm:p-10 md:p-14 flex flex-col items-center">
          {/* Heading */}
         <FadeIn>
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-100 mb-10 text-center">
            Skills
          </h2>
         </FadeIn>

          {/* Skills Grid */}
        <FadeIn>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl w-full mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="flex flex-col items-center justify-center bg-black/40 p-5 sm:p-6 rounded-xl shadow-lg transition-transform"
              >
                {skill.icon}
                <p className="mt-3 text-sm sm:text-base text-orange-100 font-medium">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

          {/* Button */}
        <FadeIn>
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAbout(!showAbout)}
            className="relative px-6 py-3 text-sm sm:text-base font-semibold text-orange-50 border border-white rounded-full overflow-hidden group"
          >
            {showAbout ? "Hide About Skills" : "About My Skills"}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-500 group-hover:w-full" />
          </motion.button>
        </FadeIn>

          {/* About Section */}
          <AnimatePresence>
            {showAbout && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 bg-black/40 p-6 sm:p-8 rounded-xl shadow-lg max-w-3xl text-center"
              >
                <p className="text-orange-100 text-base sm:text-lg leading-relaxed">
                  I’m a passionate developer with strong experience in React,
                  JavaScript, and modern web technologies. I focus on building
                  responsive, animated, and performance-driven applications with
                  clean UI/UX and scalable code.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>

  );
};

export default Skills;
