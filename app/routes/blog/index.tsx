import DarkModeButton from "~/components/DarkModeButton";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const App = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);
      await loadSlim(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
    }, []);
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 1500,
              },
            },
            links: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          detectRetina: true,
        }}
      />
    );
  };

export default function Blog() {
    return (
        <div className="h-screen dark:bg-gray-900 bg-stone-50 text-white w-screen p-4 fixed overflow-y-auto">

            <div className="mt-2 pt-16 pl-24">
                <DarkModeButton />
                <App />

            </div>

            <div className="!pt-0 !mt-0 flex justify-center items-center">
                <h1 className="text-slate-800 dark:text-white prose prose-h1 subpixel-antialiased leading-tight text-3xl lg:text-5xl font-bold">
                    coming soon!
                </h1>
            </div>
        </div>






    )
}