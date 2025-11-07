
import React from "react";
import "./OverlayScene.css";
import { motion, useScroll, useTransform } from "framer-motion";

const OverlayScene = () => {
  const { scrollY } = useScroll();

  // Parallax hacia arriba cuando se desplaza
  const textY = useTransform(scrollY, [0, 400], [0, -120]);

  // Texto desaparece al hacer scroll → Fade-Out
  const textOpacityScroll = useTransform(scrollY, [0, 300], [1, 0]);
  const sceneOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <motion.div
      className="overlay-container"
      style={{ opacity: sceneOpacity }}
    >
      <div className="gradient-layer" />
      <div className="blur-layer" />

      {/* Fade-In + Parallax + Fade-Out */}
      <motion.div
        className="parallax-text"
        style={{
          y: textY,
          opacity: textOpacityScroll,
        }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        >
          Zero Limits
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
        >
          Experience the cinematic scroll
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default OverlayScene;
