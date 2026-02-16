import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AutoScrollRow from "./AutoScrollrow";
import { FaGithub } from "react-icons/fa";
import FadeIn from "./components/FadeIn";

import image from "../src/assets/imagee.png";
import image2 from "../src/assets/password generator.png";
import image3 from "../src/assets/music.png";
import image4 from "../src/assets/blog.png";
import image5 from "../src/assets/ecommerce1.png";
import image6 from "../src/assets/login.png";

const dummyScreenshots = [
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
];

/* -------------------- PROJECT CARD -------------------- */
const ProjectCard = ({ project }) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="relative bg-black/40 rounded-2xl shadow-lg overflow-hidden p-5 sm:p-6 flex flex-col transition-transform duration-300 hover:scale-[1.03]">
      {!showAbout ? (
        <>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 sm:h-48 object-cover rounded-xl mb-4"
          />

          <h3 className="text-xl sm:text-2xl text-orange-100 font-semibold mb-2">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-50 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              <FaGithub /> Code
            </a>

            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm font-semibold text-orange-50 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Live
            </a>

            <button
              onClick={() => setShowAbout(true)}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#C14600] rounded-lg hover:bg-[#a83c00] transition"
            >
              About
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl sm:text-2xl text-orange-400 font-semibold mb-4">
            About Project
          </h3>

          <p className="text-sm sm:text-base text-orange-100 leading-relaxed mb-6">
            {project.about}
          </p>

          <button
            onClick={() => setShowAbout(false)}
            className="self-start px-5 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
};

/* -------------------- PROJECTS SECTION -------------------- */
const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const mainProjects = [
    {
      title: "Cartify - e-commerce website",
      description: "Cartify is a full-stack eCommerce app built with Next.js and MongoDB.",
      about:
        "Cartify is a modern full-stack eCommerce platform built with Next.js and MongoDB. It provides a seamless shopping experience with product browsing, cart management, and secure admin controls.",
      image: image,
      codeLink: "https://github.com/umango8/cartify",
      liveLink: "https://cartify-l9j2.vercel.app/",
    },
    {
      title: "Password Generator",
      description: "A Password Generator creates strong, random passwords to enhance security.",
      about:
        "A Password Generator is a simple tool that creates strong and secure passwords using random combinations of letters, numbers, and symbols to improve online safety.",
      image:image2,
      codeLink: "https://github.com/umango8/password-generator",
      liveLink: "https://password-generator-chi-liard-84.vercel.app/",
    },
    {
      title: "my protfollio",
      description: "My portfolio showcases my projects, skills, and experience in web development.",
      about:
        "This portfolio project showcases my web development skills, projects, and experience through a clean, responsive, and modern design.",
      image: image4,
      codeLink: "#",
      liveLink: "#",
    },
  ];

  // const moreProjects = [
  //   {
  //     title: "Food Delivery App",
  //     description: "Food ordering UI with modern UX.",
  //     about: "Responsive UI, smooth animations, and clean layout.",
  //     image: image2,
  //     codeLink: "#",
  //     liveLink: "#",
  //   },
  //   {
  //     title: "Music App UI",
  //     description: "Music streaming app interface.",
  //     about: "Creative UI design with responsive layout.",
  //     image: image3,
  //     codeLink: "#",
  //     liveLink: "#",
  //   },
  //   {
  //     title: "Login System UI",
  //     description: "Authentication UI screens.",
  //     about: "Login, signup, and validation screens.",
  //     image: image6,
  //     codeLink: "#",
  //     liveLink: "#",
  //   },
  // ];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-gradient-to-b from-black to-gray-900 overflow-hidden scroll-mt-20"
    >
      {/* Background Animation */}
      <div className="hidden md:grid absolute inset-0 z-0 opacity-10 pointer-events-none grid-cols-2 lg:grid-cols-3 gap-4 px-12">
        <AutoScrollRow images={dummyScreenshots} direction="up" />
        <AutoScrollRow images={dummyScreenshots} direction="down" />
        <AutoScrollRow images={dummyScreenshots} direction="up" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-100 mb-12 text-center">
            Projects
          </h2>
        </FadeIn>

        <div className=" grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mainProjects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}

          {showMore &&
            moreProjects.map((project, index) => (
              <FadeIn key={`more-${index}`} delay={index * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
        </div>

        {/* <FadeIn delay={0.2}>
          <div className="flex justify-center mt-14">
          
                 <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               
                 onClick={() => setShowMore(!showMore)}
                className="relative px-6 py-3 text-sm sm:text-base font-semibold text-orange-50 border border-white rounded-full overflow-hidden group"
              >
                  {showMore ? "Show Less Projects" : "More Projects"}
                   <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-500 group-hover:w-full" />
              </motion.button>
            
        
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
};

export default Projects;
