import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProfileNavbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const offset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false); // scroll down → hide
      } else {
        setVisible(true); // scroll up → show
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-3 left-0 w-full z-50 flex justify-center px-3"
    >
      <div className="w-full max-w-md bg-black/60 backdrop-blur-md border border-orange-400/30 rounded-full px-3 py-2 flex items-center justify-between shadow-lg">
        
        {/* Profile */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-9 h-9 rounded-full overflow-hidden ">
            <img
              src="/hello.png"
              alt="Umang Singh"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col leading-tight truncate">
            <span className="text-orange-100 font-semibold text-sm truncate">
              Umang Singh
            </span>
            <span className="text-orange-400 text-[11px] truncate">
              Web Designer
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.a
            href="https://www.linkedin.com/in/umang-singho8"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="text-orange-100 hover:text-orange-400 transition p-1"
          >
            <FaLinkedin size={16} />
          </motion.a>

          <motion.a
            href="https://github.com/umango8"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="text-orange-100 hover:text-orange-400 transition p-1"
          >
            <FaGithub size={16} />
          </motion.a>

          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-1 px-3 py-1 text-[11px] font-semibold text-orange-50 border border-orange-400 rounded-full hover:bg-orange-400 hover:text-black transition"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileNavbar;
