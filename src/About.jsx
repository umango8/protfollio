import React from "react";
import { motion } from "framer-motion";
import FadeIn from "./components/FadeIn";
import image from "../src/assets/ecommerce.png";
import image2 from "../src/assets/fooddelivery.png";
import image3 from "../src/assets/music.png";
import image4 from "../src/assets/blog.png";
import image5 from "../src/assets/ecommerce1.png";
import image6 from "../src/assets/login.png";

const screenshots = [image, image2, image3, image4, image5, image6];

const AutoScrollRow = ({ direction = "up" }) => {
  const isUp = direction === "up";
  const distance =
    typeof window !== "undefined" && window.innerWidth < 768
      ? screenshots.length * 140
      : screenshots.length * 220;

  return (
    <div className="relative  overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-4"
        animate={{ y: isUp ? [0, -distance] : [-distance, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...screenshots, ...screenshots].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`project-${idx}`}
            className="w-40 h-28 sm:w-52 sm:h-36 md:w-[260px] md:h-[180px] object-cover rounded-2xl shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative  w-full bg-gradient-to-b from-black to-gray-900 overflow-hidden scroll-mt-20"
    >
      {/* Background animation (desktop only) */}
      <div className="hidden md:grid absolute inset-0 z-0 opacity-10 pointer-events-none grid-cols-2 lg:grid-cols-3 gap-4 px-12">
        <AutoScrollRow direction="up" />
        <AutoScrollRow direction="down" />
        <AutoScrollRow direction="up" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 md:py-20 py-16 text-center">
        {/* Heading */}
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-100 mb-10">
            About Me
          </h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <FadeIn direction="left">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-dotted border-orange-300 shadow-2xl">
              <img
                src="/image.jpeg"
                alt="Umang Singh"
                className="w-full h-full object-cover object-[0%_90%] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </FadeIn>

          {/* Text Content */}
          <FadeIn direction="right">
            <div className="flex flex-col gap-6 max-w-3xl text-center lg:text-left">
              <p className="text-orange-100 text-base sm:text-lg md:text-2xl leading-relaxed">
                Hi, I’m{" "}
                <span className="font-semibold text-orange-400">
                  Umang Singh
                </span>{" "}
                — a passionate Frontend Developer focused on building modern,
                responsive, and user-friendly web applications using React,
                JavaScript, Tailwind CSS, and strong UI/UX principles.
              </p>

              <p className="text-orange-400 text-base sm:text-lg md:text-2xl">
                “Let’s build something amazing together!”
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Browse My Work Button */}
        <FadeIn delay={0.2}>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-10 px-6 py-3 text-sm sm:text-base font-semibold text-orange-50 border border-white rounded-full relative overflow-hidden group"
          >
            Browse My Work
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white -translate-x-1/2 transition-all duration-500 group-hover:w-full" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;