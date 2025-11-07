// OverlayScene.jsx
import React from "react";
import "./OverlayScene.css";
import { motion, useScroll, useTransform } from "framer-motion";

const OverlayScene = () => {
  // Scroll global
  const { scrollY } = useScroll();

  // Movimiento vertical parallax del texto
  const textY = useTransform(scrollY, [0, 400], [0, -120]);

  // Texto se desvanece mientras scrollea
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // La escena completa se desvanece lentamente
  const sceneOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <motion.div
      className="overlay-container"
      style={{ opacity: sceneOpacity }} // ⬅️ transición global suave
    >
      <div className="gradient-layer" />
      <div className="blur-layer" />

      <motion.div
        className="parallax-text"
        style={{
          opacity: textOpacity,
          y: textY,          // ⬅️ sutil parallax
        }}
      >
        <h1>Zero Limits</h1>
        <p>Experience the cinematic scroll</p>
      </motion.div>
    </motion.div>
  );
};

export default OverlayScene;
