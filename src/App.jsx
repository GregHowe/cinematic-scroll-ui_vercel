// App.jsx
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollController from "./components/ScrollController";

function App() {
  return (
    <>
      <ParticlesBackground /> {/* ← SIEMPRE AQUÍ */}
      <ScrollController />
    </>
  );
}

export default App;
