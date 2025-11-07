import React from 'react';
import './TransitionLayer.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const TransitionLayer = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.2, 0.4], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  return (
    <motion.div className="transition-container" style={{ scale, opacity }}>
      <div className="parallax-layer layer-back" />
      <div className="parallax-layer layer-front" />
      <div className="transition-text">
        <h2>Break the limits</h2>
      </div>
    </motion.div>
  );
};

export default TransitionLayer;
