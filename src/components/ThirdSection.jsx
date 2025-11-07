// ThirdSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ThirdSection.css";

const ThirdSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section className="third-section" ref={ref}>
      <motion.div
        className="third-section__inner"
        style={{ opacity, y: translateY }}
      >
        <h2>There is more than what we see.</h2>
      </motion.div>
    </section>
  );
};

export default ThirdSection;
