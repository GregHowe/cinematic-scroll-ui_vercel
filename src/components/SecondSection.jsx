// SecondSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./SecondSection.css";

const SecondSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"], // ⬅️ aparece cuando entra al viewport
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section className="second-section" ref={ref}>
      <motion.h2 style={{ opacity, y: translateY }}>
        Discover the Unknown
      </motion.h2>

      <motion.p style={{ opacity, y: translateY }}>
        Break the boundaries of imagination. Scroll to explore deeper.
      </motion.p>
    </section>
  );
};

export default SecondSection;
