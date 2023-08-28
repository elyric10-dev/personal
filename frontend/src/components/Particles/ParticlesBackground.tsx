import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { type Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = async (main: Engine) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 75,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#999999",
            },
            links: {
              color: "#999999",
              distance: 125,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
