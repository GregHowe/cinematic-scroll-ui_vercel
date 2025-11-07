// ParticlesBackground.jsx
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-global"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 1 },
        detectRetina: true,

        /* ✅ Comportamiento Responsive */
        responsive: [
          {
            maxWidth: 768, // móviles
            options: {
              particles: {
                number: { value: 20 },
                size: { value: { min: 4, max: 18 } },
                move: { speed: 0.45 }
              }
            }
          }
        ],

        particles: {
          /* ✅ Número balanceado (cine suave) */
          number: { value: 50, density: { enable: true, area: 900 } },

          /* ✅ Color ahora neutral — combina con todas las escenas */
          color: { value: "#ffffff" },

          /* ✅ Opacidad con respiración sutil */
          opacity: {
            value: 0.28,
            animation: {
              enable: true,
              speed: 0.6,
              minimumValue: 0.12
            }
          },

          /* ✅ Tamaño un poco más grande, pero NO globos */
          size: {
            value: { min: 4.5, max: 22 },
            animation: {
              enable: true,
              speed: 1.2,
              minimumValue: 4.5
            }
          },

          /* ✨ Glow cinematográfico */
          blur: { enable: true, value: 6 },

          /* 🌬 Movimiento suave atmosférico */
          move: {
            enable: true,
            speed: 0.55,
            direction: "none",
            outModes: "out"
          }
        }
      }}

      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none"
      }}
    />
  );
};

export default ParticlesBackground;
