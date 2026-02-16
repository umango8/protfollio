
// src/components/AutoScrollRow.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AutoScrollRow = ({ images, direction = 'up', speed = 10 }) => {
  const animationDistance = images.length * 220; 
  const scrollUp = direction === 'up';

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-5 items-center"
        animate={{
          y: scrollUp ? [`0%`, `-${animationDistance}px`] : [`-${animationDistance}px`, `0%`]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...images, ...images].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`scroll-${idx}`}
            className="w-[300px] h-[200px] object-cover rounded-2xl shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScrollRow;
