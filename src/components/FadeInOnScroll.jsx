import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // eslint-disable-line

const FadeInOnScroll = ({ children, delay = 0.2, duration = 0.6, y = 30 }) => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // ⏱️ stagger between children
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // 👈 fade only once on first scroll
    margin: "0px 0px -10% 0px", // optional trigger threshold
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FadeInOnScroll;
