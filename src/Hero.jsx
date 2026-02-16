// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      d: Math.random() * 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "white";
      for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      update();
    };

    const update = () => {
      for (let star of stars) {
        star.y += star.d;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      }
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 md:px-8">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-400 drop-shadow-lg leading-tight pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-100 ">Hey ,</span> I'm Umang Singh 
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-orange-100 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
         "Every design starts with heart, every line of code carries my passion."
        </motion.p>
        <motion.button
          onClick={scrollToAbout}
          // className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition duration-300 shadow-md"
          className="relative mt-8 px-6 py-3 font-semibold text-o border border-white rounded-full overflow-hidden group"
          whileHover={{ scale: 1.05 }}
        >
          Get to Know Me
           <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
 
        </motion.button>
      


    
      </div>
    </section>
  );
};

export default Hero;
