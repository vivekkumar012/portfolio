import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import particlesOptions from "./utils/Particles";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  const renderParticles = location.pathname === "/";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {renderParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}

      <Navbar />

      <div className="h-screen-minus-80">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
