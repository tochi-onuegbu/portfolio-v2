import DarkModeButton from "~/components/DarkModeButton";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const App = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
  
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
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
                
                fpsLimit: 120,
                interactivity: {
                    events: {
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
                            distance: 50,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#474747",
                    },
                    links: {
                        color: "#838282",
                        distance: 150,
                        enable: true,
                        opacity: 0.10,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.4,
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
                        value: 0.09,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
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

            <div className="flex justify-center items-center">
                <h1 className="text-slate-800 dark:text-white prose prose-h1 subpixel-antialiased leading-tight text-6xl font-bold">
                    coming soon!
                </h1>
            </div>
        </div>






    )
}