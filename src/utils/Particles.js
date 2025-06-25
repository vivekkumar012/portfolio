const particlesOptions = {
  background: {
    color: {
      value: "#000000", // black background
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse", // makes particles repel away from cursor
        parallax: { enable: false },
      },
      onClick: {
        enable: false, // optional: can enable "push" or "bubble" here
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 150, // how far particles move away
        duration: 0.4, // how long they repel
        speed: 5,      // speed of repulsion
      },
    },
  },
  particles: {
    number: {
      value: 80,
      density: { enable: true, area: 800 },
    },
    color: { value: "#facc15" }, // yellow
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      random: false,
    },
    size: {
      value: { min: 2, max: 4 },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: { default: "bounce" },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#facc15",
      opacity: 0.5,
      width: 1,
    },
  },
  detectRetina: true,
};
export default particlesOptions;
