import type { MetaFunction } from "@remix-run/node";
// import { Link } from "@remix-run/react";
import DarkModeButton from "~/components/DarkModeButton";
// import { useCallback } from "react";
// import type { Container, Engine } from "tsparticles-engine";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const App = () => {
//   const particlesInit = useCallback(async (engine: Engine) => {
//     console.log(engine);
//     await loadSlim(engine);
//   }, []);
//   const particlesLoaded = useCallback(async (container: Container | undefined) => {
//     await console.log(container);
//   }, []);
//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//           },
//           modes: {
//             push: {
//               particles_nb: 1,
//             },
//           },
//         },
//         particles: {
//           number: {
//             value: 60,
//             density: {
//               enable: true,
//               area: 1500,
//             },
//           },
//           links: {
//             enable: true,
//             opacity: 0.02,
//           },
//           move: {
//             direction: "bottom",
//             speed: 0.05,
//           },
//           size: {
//             value: 1,
//           },
//           opacity: {
//             anim: {
//               enable: true,
//               speed: 1,
//               opacity_min: 0.05,
//             },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

export const meta: MetaFunction = () => [{ title: "Tochi Onuegbu Porfolio" }];
export default function Index() {
  return (
    <html className="dark:bg-gray-900 bg-stone-50">
      <div className="hidden lg:block">
        {/* <App /> */}
      </div>
      <main className="dark:bg-gray-900 bg-stone-50">
        <div className="mb-25 !scroll-smooth " >
          {/* side dashboard */}
          <div>
            <div className="lg:mt-14 lg:h-screen lg:flex lg:items-start lg:justify-start dark:bg-gray-900 bg-stone-50 text-white lg:w-[50%] p-4 lg:fixed overflow-y-auto">
              <div className="ml-5 sm:ml-20 p-4">
                <div className="align-start mt-0 pt-7 pl-0 ml-0"><DarkModeButton /> </div>
                <h1 className="text-gray-800 dark:text-gray-300 prose prose-h1:{utility} subpixel-antialiased mt-16 leading-tight text-3xl md:text-4xl text-2xl font-bold">Hi! I'm Tochi Onuegbu</h1>
                <div>
                  <h3 className="leading-loose font-extralight text-slate-700 dark:text-sky-100 py-5 leading-tight text-2xl md:text-large text-2xl">A passionate software engineer creating digital solutions that have a global impact</h3>
                </div>
                <nav className="block pb-20" aria-label="In-page jump links">
                  <ul className="mt-2 w-max">
                    <li><a className="group flex items-center py-3" href="#about-me">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100 group-focus-visible:text-slate-200 ">About</span></a>
                    </li>
                    <li><a className="group flex items-center py-3" href="#tech">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100 group-focus-visible:text-slate-200">Techstack</span></a>
                    </li>
                    <li><a className="group flex items-center py-3" href="#projects">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100 group-focus-visible:text-slate-200">Projects</span></a>
                    </li>
                    <li><a className="group flex items-center py-3" href="#experiences">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100 group-focus-visible:text-slate-200">Experience</span></a>
                    </li>
                    {/* <li>
                      <Link to="/blog" className="group flex items-center py-3">
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100 group-focus-visible:text-slate-200">Blog</span>
                      </Link>
                    </li> */}
                  </ul>
                </nav>
                <div className=" flex items-center space-x-4 !mb-22 !pb-24 absolute">
                  <a href="https://github.com/tochi-onuegbu">
                    <svg className="fill-slate-500 dark:fill-slate-50" width="36" height="36" fill="none" viewBox="0 0 24 24"><title>GitHub</title>
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/tochi-o-83a60223b/">
                    <svg className="fill-slate-500 dark:fill-slate-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 448 512"><title>LinkedIn</title>
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                  </a>
                  <a href="mailto:tochi.onuegbu@duke.edu">
                    <svg className="fill-slate-500 dark:fill-slate-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 512 512"><title>Email</title>
                      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main dashboard */}
        <div className="lg:ml-[50%] ml-5 sm:ml-20 p-10">
          <h1 id="about-me" className="scroll-mt-16 text-gray-800 dark:text-gray-300 prose prose-h1:{utility} subpixel-antialiased mt-20 pt-19 leading-tight text-3xl md:text-4xl text-2xl font-semibold">about me</h1>
          <div className="font-extralight prose leading-loose text-slate-900 dark:text-gray-400">
            <p className="">I am a fourth-year student at <span className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">Duke University </span>studying <span className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">Computer Science </span> with a minor in Economics. I am a  <span className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">Rubenstein Scholar, </span> a prestigious full-ride scholarship awarded to selected students. </p>
            <p className="mt-5 mb-16 ">I am a part of  <span className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">DTech Scholars,</span> a program that uplifts women in STEM, equipping me with a network of individuals who I have as a support system. I am also a member of  <span className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">National Society of Black Engineers (NSBE). </span>  I am passionate about inclusivity in the tech industry and the promotion of resources to underrepresented communities.</p>
          </div>
          <div className="hidden sm:block sm:snap-x sm:snap-mandatory pt-0 mt-0">
            <h1 id="tech" className="scroll-mt-16 text-gray-800 dark:text-gray-300 prose prose-h1:{utility} subpixel-antialiased pt-0 mt-0 leading-tight text-3xl md:text-4xl text-2xl font-semibold">techstack</h1>
            <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
              <div className="flex flex-row basis-96 mt-6 mb-20 gap-8 flex-wrap pb-15 sm:flex sm:flex-wrap sm:justify-center sm:gap-8">
                {[
                  {
                    src: "/images/flyio-icon.svg",
                    alt: "Fly.io",
                    href: "https://fly.io",
                    title: "Fly.io",
                  },
                  {
                    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCwwLDI1NiwyNTYiCnN0eWxlPSJmaWxsOiMwMDAwMDA7Ij4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0ibm9uZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48ZyB0cmFuc2Zvcm09InNjYWxlKDIuNTYsMi41NikiPjxwYXRoIGQ9Ik04My4yNDIsNjAuNDgyYy02LjM0OSwxLjkyNCAtOS45NTcsLTAuNDE1IC05Ljk1NywtMC40MTVjMCwwIC0wLjAwNiwwIC0wLjAwNywwbC0wLjM5NCwtMC40ODhjMC4xMzEsLTAuMTE3IDAuMjY0LC0wLjI0MiAwLjQsLTAuMzgxbDAuMDE5LC0wLjAxN2wtMC4wMDEsLTAuMDAyYzUuNjM5LC01Ljc1MyAxNS44MzgsLTI5LjU2MiA5Ljc0OSwtMzcuMzc4Yy04LjU1MywtMTAuOTc5IC0yNS42NiwtNS43NDUgLTI1LjY2LC01Ljc0NWwwLjA2NCwwLjE4M2MtNC44ODksLTEuNjY2IC05Ljk0NywtMS42MjUgLTEzLjg1MSwwLjgzOGMtMC42NjEsMC40MTcgLTEuMjczLDAuODczIC0xLjg0NCwxLjM1N2wwLjAxNCwtMC4xODdjMCwwIC04LjE0OSwtMy4yMTMgLTE1Ljg1MSwtMi4zODNjLTcuOTU0LDAuODU3IC0xMi4zMTksNi44MyAtMTIuMzE5LDE1LjgzYzAsOSA2LjE3LDMwLjU1MyAxMC4xNywzNC41NTNjNCw0IDYsMiA3LDFjMC44OTYsLTAuODk2IDYuNTg4LC03LjM4NyA3Ljc3MSwtOC43MzhjMi4xNDMsMS40IDQuNTc1LDEuNzQzIDUuOTgzLDEuNzQ4Yy0wLjE4NCwwLjk5MSAtMS4zMSw0Ljk4OCAtNy41NjIsNS43MTRjLTIuODA5LDAuNDQ3IC0xLjkxNSwyLjI5OCAwLjEyOCwyLjg3MmMyLjAwMiwwLjU2MyA4LjQxNSwxLjk2NyAxMi4zMzUsLTMuNTA5Yy0wLjA1MiwzLjM5NyAtMC4xODMsOS43NzEgMC4zMDQsMTUuMTI2YzAuNTc0LDYuMzE5IDMuOTgzLDguMzc2IDYuNTExLDguNzEzYzcuODc4LDEuMDQ4IDEwLjYyOCwtNC4zMDggMTEuMzk0LC02LjcwMmMwLjcwMiwtMi4xOTQgMS44MzksLTEwLjgwOSAyLjIxMywtMTYuNTg4bDAuNTAzLC0wLjA4OWwtMC4wMDQsMC4wNWM4LjEwNiwxLjI3NyAxMi43MzQsLTEuNjYgMTQuMzYyLC0zLjE5MWMxLjYyNiwtMS41MzMgMC42MzcsLTIuODA5IC0xLjQ3LC0yLjE3MXoiIGZpbGw9IiNiZmM1ZTMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGQ9Ik0zOSw1OGMwLDAgLTYuNzUsNy41NjIgLTcuNzUsOC41NjJjLTEsMSAtMywzIC03LC0xYy00LC00IC0xMC4yNSwtMjUgLTEwLjI1LC0zNGMwLC05IDQuMjM0LC0xNS41MTggMTIuMTg4LC0xNi4zNzVjNy43MDIsLTAuODI5IDE1LjgxMiwyLjgxMyAxNS44MTIsMi44MTMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMjEyYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGQ9Ik03MS4yMTMsNTYuOTQ3YzIuNjgxLC0yLjEwNiAyLjk2OCwtOC43MTMgMi40ODksLTEyLjczNGMtMC40NzksLTQuMDIxIDAuMzMxLC02LjM5MiAwLjIzNSwtMTEuMjc1Yy0zLjI1NSwtMTMuMzA5IC0yMC4zMjUsLTIyLjA5OSAtMzAuMTg3LC0xNS44NzZjLTkuODYyLDYuMjIzIC04Ljg1NCwyMC4xMzcgLTguMzc1LDI0LjA2MmMwLjQ3OSwzLjkyNSAtMi40NDQsNi41MzkgLTAuNjI1LDEyLjE4OGMxLjgxOSw1LjY0OSA3LjY0NCw2LjY5OCAxMC4wMzcsNi42OThjMi4zOTQsMCA0Ljg4MywwLjk1NyA0Ljg4MywzLjU0M2MwLDIuNTg2IC0wLjI4NywxMC4zNCAwLjI4NywxNi42NmMwLjU3NCw2LjMxOSAzLjk4Myw4LjM3NiA2LjUxMSw4LjcxM2M3Ljg3OCwxLjA0OCAxMC42MjgsLTQuMzA5IDExLjM5NCwtNi43MDJjMC43NjYsLTIuMzkzIDIuMDUyLC0xMi40MzkgMi4yOTgsLTE4LjA5NmMwLjE5MSwtNC40MDQgMy4zNTEsLTQuMzA5IDMuMzUxLC00LjMwOWMwLDAgMy42MDgsMi4zMzkgOS45NTcsMC40MTVjMi4xMDYsLTAuNjM4IDMuMDk2LDAuNjM4IDEuNDY4LDIuMTdjLTEuNjI4LDEuNTMyIC02LjAxNyw0LjU2IC0xNC4xMjQsMy4yODMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMjEyYiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGQ9Ik03NC4wODUsMzMuNjE3YzAsMCAtNi41MjMsLTIuMjQyIC04LjcxLDIuMTk1Yy0xLjg5MywzLjg0MSAzLjk4NywxOC4yOTQgOC4xOTksMjMuNTkyIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjIxMmIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjwvcGF0aD48cGF0aCBkPSJNMzQuNTc0LDM2LjYxN2MwLDAgNy42NTIsLTQuNjEyIDExLjgwMSwtMS44NjdjNC4xNDksMi43NDUgMi41NjEsMTMuMzU2IDAuNzc0LDE3LjI1Yy0xLjc4NywzLjg5NCAtMi4zNjIsNy43ODcgLTIuMzYyLDcuNzg3YzAsMCAtMC40NDcsNS4xMDYgLTcuNTk2LDUuOTM2Yy0yLjgwOSwwLjQ0NyAtMS45MTUsMi4yOTggMC4xMjgsMi44NzJjMi4wNDMsMC41NzQgOC42ODEsMi4wNDMgMTIuNTc0LC0zLjgzIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjIxMmIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjwvcGF0aD48cGF0aCBkPSJNNTcuNjE3LDE1LjgwOWMwLDAgMTcuMzU2LC00LjE3NCAyNS4zODMsNS42MjljNi41NTMsOC4wMDMgLTQuNzY2LDMzLjg4MiAtMTAuMTkxLDM4LjE1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWYyMTJiIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGQ9Ik02OS4xNTQsMzguMDM3Yy0xLjY1MiwwLjE2OCAtMy40MjMsLTEuOTM5IC0wLjA5NiwtMi4zNDZjMy4xMTksLTAuMzgxIDIuMjY1LDIuMTI2IDAuMDk2LDIuMzQ2eiIgZmlsbD0iIzFmMjEyYiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PHBhdGggZD0iTTQzLjIyMywzOC44NDhjLTEuODI0LC0wLjIzIC0zLjIxMiwtMi45NDUgMC40ODEsLTIuNTU2YzMuNDYxLDAuMzY1IDEuOTE1LDIuODU5IC0wLjQ4MSwyLjU1NnoiIGZpbGw9IiMxZjIxMmIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjxwYXRoIGQ9Ik0zOS40OTIsMjcuNDQ3Yy0wLjIzNiwwLjY4OCAtMC40NTEsMS40MjUgLTAuNjQxLDIuMjEzIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjIxMmIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTQ3LjgwOCwxOC40NzljLTIuNzg5LDAuODc2IC01Ljc3MSwyLjkzOSAtNy43MzEsNy40NTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMjEyYiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNNTUuMDY0LDE4LjI5OGMwLDAgLTIuMTEsLTAuNjIxIC00Ljg1MSwtMC4zMTkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMjEyYiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMjAuMTQ4LDIxLjgxN2MtMS45MjEsMi4wNzQgLTMuMzY5LDUuNDUxIC0zLjE3MywxMC45NDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMjEyYiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNMjguMzE5LDE4LjU1M2MwLDAgLTMuNDE3LC0wLjI1OCAtNi41MDMsMS44MzMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMjEyYiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNNTMuNTQ5LDgyLjZjMC42NDksMS43MDIgMS44NTgsMy4yNjYgNC4xLDMuNjEzIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjIxMmIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTTUyLjgzLDc3LjU5NmMwLDAgLTAuMDk1LDEuMzU4IDAuMTg2LDMuMDAxIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZjIxMmIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PC9nPjwvZz4KPC9zdmc+",
                    alt: "PostgreSQL",
                    href: "https://www.postgresql.org",
                    title: "PostgreSQL",
                  },
                  {
                    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGwtb3BhY2l0eT0iMC44NzA1OSIgZmlsbD0iIzg2NzdmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjEyLDUuMTIpIj48cGF0aCBkPSJNNDQuNjc0LDM3LjU2OGwtMTcuMjY5LC0zNi4wNzhjLTAuODksLTEuODU5IC0zLjQ3MywtMi4wMTIgLTQuNTc1LC0wLjI3MWwtMTkuMTUxLDMwLjI0MmMtMC40MTMsMC42NTIgLTAuNDAxLDEuNDg2IDAuMDMsMi4xMjZsOS42NDcsMTQuMzIzYzAuNTk5LDAuODg5IDEuNywxLjI5IDIuNzI5LDAuOTk0bDI2Ljk5NCwtNy43NzVjMS41MTcsLTAuNDM3IDIuMjc4LC0yLjEzNSAxLjU5NSwtMy41NjF6TTQwLjg2LDM4Ljg2NWwtMjIuNzAzLDYuMzY5Yy0wLjUyNiwwLjE0OCAtMS4wMiwtMC4zMTggLTAuOTA2LC0wLjg1M2w4LjA0OSwtMzcuNjMyYzAuMTQ1LC0wLjY3OCAxLjA2NCwtMC43ODggMS4zNjQsLTAuMTYzbDE0Ljg0MywzMC44ODFjMC4yNTksMC41NjYgLTAuMDQ4LDEuMjMgLTAuNjQ3LDEuMzk4eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==",
                    alt: "Prisma",
                    href: "https://prisma.io",
                    title: "Prisma",
                  },
                  {
                    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjEuODYxIiB5MT0iOC4yMzciIHgyPSIyNS43MDMiIHkyPSIzNi41NTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMV94N1hNTkdoMnZkcUFfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3MWViZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNGM1ZTciPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJ1cmwoI2NvbG9yLTFfeDdYTU5HaDJ2ZHFBX2dyMSkiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4zMzMzMyw1LjMzMzMzKSI+PHBhdGggZD0iTTI0LDkuNjA0Yy01LjU4OSwwIC05LjM0NywyLjQzOSAtMTEuMjc2LDcuMzE4Yy0wLjIsMC41MDUgMC40MTcsMC45MiAwLjgxNiwwLjU1MWMyLjAzNSwtMS44ODIgNC4zMjIsLTIuNTA1IDYuODYsLTEuODcxYzEuODI2LDAuNDU2IDMuMTMxLDEuNzgxIDQuNTc2LDMuMjQ3YzIuMzUyLDIuMzg3IDUuMDc1LDUuMTUxIDExLjAyNCw1LjE1MWM1LjU4OSwwIDkuMzQ4LC0yLjQ0IDExLjI3NiwtNy4zMTljMC4yLC0wLjUwNSAtMC40MTcsLTAuOTIgLTAuODE2LC0wLjU1MWMtMi4wMzUsMS44ODIgLTQuMzIyLDIuNTA2IC02Ljg2LDEuODcyYy0xLjgyNSwtMC40NTYgLTMuMTMsLTEuNzgxIC00LjU3NSwtMy4yNDdjLTIuMzUzLC0yLjM4OCAtNS4wNzcsLTUuMTUxIC0xMS4wMjUsLTUuMTUxek0xMiwyNGMtNS41ODksMCAtOS4zNDgsMi40NCAtMTEuMjc2LDcuMzE5Yy0wLjIsMC41MDUgMC40MTcsMC45MiAwLjgxNiwwLjU1MWMyLjAzNSwtMS44ODIgNC4zMjIsLTIuNTA2IDYuODYsLTEuODcxYzEuODI1LDAuNDU3IDMuMTMsMS43ODEgNC41NzUsMy4yNDZjMi4zNTMsMi4zODggNS4wNzcsNS4xNTIgMTEuMDI1LDUuMTUyYzUuNTg5LDAgOS4zNDgsLTIuNDQgMTEuMjc2LC03LjMxOWMwLjIsLTAuNTA1IC0wLjQxNywtMC45MiAtMC44MTYsLTAuNTUxYy0yLjAzNSwxLjg4MiAtNC4zMjIsMi41MDYgLTYuODYsMS44NzFjLTEuODI2LC0wLjQ1NiAtMy4xMzEsLTEuNzgxIC00LjU3NiwtMy4yNDZjLTIuMzUyLC0yLjM4OCAtNS4wNzUsLTUuMTUyIC0xMS4wMjQsLTUuMTUyeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==",
                    alt: "Tailwind",
                    href: "https://tailwindcss.com",
                    title: "Tailwind",
                  },
                  {
                    src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
                    alt: "Prettier",
                    href: "https://prettier.io",
                    title: "Prettier",
                  },
                  {
                    src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
                    alt: "TypeScript",
                    href: "https://typescriptlang.org",
                    title: "TypeScript",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
                    alt: "Swift",
                    href: "https://www.swift.org",
                    title: "Swift",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    alt: "HTML",
                    href: "https://html.spec.whatwg.org/multipage/",
                    title: "HTML",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                    alt: "CSS",
                    href: "https://www.w3.org/Style/CSS/Overview.en.html",
                    title: "CSS",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
                    alt: "Javascript",
                    href: "https://www.javascript.com",
                    title: "Javascript",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                    alt: "Python",
                    href: "https://www.python.org",
                    title: "Python",
                  },
                  {
                    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4zMzMzMyw1LjMzMzMzKSI+PHBhdGggZD0iTTIzLjY1LDI0Ljg5OGMtMC45OTgsLTEuNjA5IC0xLjcyMiwtMi45NDMgLTIuNzI1LC01LjQ1NWMtMS42OTYsLTQuMjQzIDEwLjMxNSwtOC4wNzcgNS40NDUsLTE1LjQ0NGMyLjExMSw1LjA4OSAtNy41NzcsOC4yMzUgLTguNDc3LDEyLjQ3M2MtMC44MjMsMy44OTggNS43NTIsOC40MjYgNS43NTcsOC40MjZ6IiBmaWxsPSIjZmY2NzViIj48L3BhdGg+PHBhdGggZD0iTTIzLjg3OCwxNy4yN2MtMC4xOTIsMi41MTYgMi4yMjksMy44NTcgMi4yOTksNS42OTVjMC4wNTYsMS40OTYgLTEuNDQ3LDIuNzQzIC0xLjQ0NywyLjc0M2MwLDAgMi43MjgsLTAuNTM2IDMuNTc5LC0yLjgxOGMwLjk0NSwtMi41MzQgLTEuODM0LC00LjI2OSAtMS41NDgsLTYuMjk4YzAuMjY3LC0xLjkzOCA2LjAzMSwtNS41NDMgNi4wMzEsLTUuNTQzYzAsMCAtOC40ODEsMC41NjIgLTguOTE0LDYuMjIxeiIgZmlsbD0iI2ZmNjc1YiI+PC9wYXRoPjxnIGZpbGw9IiM2M2M1ZmYiPjxwYXRoIGQ9Ik0zMi4wODQsMjUuMDU1YzEuNzU0LC0wLjM5NCAzLjIzMywwLjcyMyAzLjIzMywyLjAxYzAsMi45MDEgLTQuMDIxLDUuNjQzIC00LjAyMSw1LjY0M2MwLDAgNi4yMjUsLTAuNzQyIDYuMjI1LC01LjUwNWMwLC0zLjE1IC0zLjA1NywtMy45MzcgLTUuNDM3LC0yLjE0OHpNMjkuMTI5LDI3LjM5NWMwLDAgMS45NDEsLTEuMzgzIDIuNDU4LC0xLjkwMmMtNC43NjMsMS4wMTEgLTE1LjYzOCwxLjE0NyAtMTUuNjM4LDAuMjY5YzAsLTAuODA5IDMuNTA3LC0xLjYzOCAzLjUwNywtMS42MzhjMCwwIC03Ljc3MywtMC4xMTIgLTcuNzczLDIuMTgxYzAsMi4zOSAxMC4xNzUsMi41NjEgMTcuNDQ2LDEuMDl6Ij48L3BhdGg+PHBhdGggZD0iTTI3LjkzNSwyOS41NzFjLTQuNTA5LDEuNDk5IC0xMi44MTQsMS4wMiAtMTAuMzU0LC0wLjk5M2MtMS4xOTgsMCAtMi45NzQsMC45NjMgLTIuOTc0LDEuODg5YzAsMS44NTcgOC45ODIsMy4yOTEgMTUuNjMsMC41NzJ6Ij48L3BhdGg+PHBhdGggZD0iTTE4LjY4NiwzMi43MzljLTEuNjM2LDAgLTIuNjk1LDEuMDU0IC0yLjY5NSwxLjgyMmMwLDIuMzkxIDkuNzYsMi42MzIgMTMuNjI3LDAuMjA1bC0yLjQ1OCwtMS42MzJjLTIuODg5LDEuMjcgLTEwLjE0NiwxLjQ0NSAtOC40NzQsLTAuMzk1eiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNi4yODEsMzYuNjMyYzAsLTAuOTM2IC0xLjA1NSwtMS4zNzcgLTEuNDMzLC0xLjU4OGMyLjIyOCw1LjM3MyAtMjIuMzE3LDQuOTU2IC0yMi4zMTcsMS43ODRjMCwtMC43MjEgMS44MDcsLTEuNDI3IDMuNDc3LC0xLjA5M2wtMS40MiwtMC44MzljLTMuMzI4LC0wLjUyMiAtNS41ODgsMC45NDEgLTUuNTg4LDIuMTIxYzAsNS41MDMgMjcuMjgxLDUuMjM4IDI3LjI4MSwtMC4zODV6Ij48L3BhdGg+PHBhdGggZD0iTTM5LDM4LjYwNGMtNC4xNDYsNC4wOTUgLTE0LjY1OSw1LjU4NyAtMjUuMjMxLDMuMDU3YzEwLjU3Miw0LjUwMyAyNS4xODEsMS45NjcgMjUuMjMxLC0zLjA1N3oiPjwvcGF0aD48L2c+PC9nPjwvZz4KPC9zdmc+",
                    alt: "Java",
                    href: "https://www.java.com/en/",
                    title: "Java",
                  },
                  //NEW STUFF
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
                    alt: "Kotlin",
                    //href: "https://www.java.com/en/",
                    title: "Kotlin",
                  },
                  {
                    src: "https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor",
                    alt: "Docker",
                    //href: "https://www.java.com/en/",
                    title: "Docker",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                    alt: "React",
                    //href: "https://www.java.com/en/",
                    title: "React",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
                    alt: "Flutter",
                    //href: "https://www.java.com/en/",
                    title: "Flutter",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
                    alt: "Jenkins",
                    //href: "https://www.java.com/en/",
                    title: "Jenkins",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg",
                    alt: "Ruby on Rails",
                    //href: "https://www.java.com/en/",
                    title: "Ruby on Rails",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg",
                    alt: "Flask",
                    //href: "https://www.java.com/en/",
                    title: "Flask",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
                    alt: "SQL",
                    href: "",
                    title: "SQL",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
                    alt: "Firebase",
                    href: "",
                    title: "Firebase",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain-wordmark.svg",
                    alt: "Angular",
                    href: "",
                    title: "Angular",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
                    alt: "NextJS",
                    href: "",
                    title: "NextJS",
                  },
                ].map((img) => (
                  <a
                    key={img.href}
                    href={img.href}
                    title={img.title}
                    className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                  >
                    <img alt={img.alt} src={img.src} className="object-contain" />
                    <div className="tooltip absolute bg-black text-white text-xs px-2 py-1 rounded-lg opacity-0 transition-opacity ease-in-out duration-200 transform translate-y-1/2 -left-1/2 bottom-0 left-1/2">
                      {img.title}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 id="projects" className="scroll-mt-16 text-gray-800 dark:text-gray-300 prose prose-h1:{utility} subpixel-antialiased mt-10 leading-tight text-3xl md:text-4xl text-2xl font-semibold">featured projects</h1>
            <div className="font-extralight prose leading-loose text-slate-900 dark:text-gray-400 mb-10 pb-12">
              <div className="w-full">
                <h1 className="mt-6 mb-0"><a className="prose text-gray-950 dark:text-gray-300 font-semibold text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 hover:text-cyan-800 dark:hover:text-cyan-100 after:content-['_↗'] !no-underline text-lg" href="https://www.youtube.com/watch?v=YjH5zGIsbrE&t=1s" target="_blank" rel="noreferrer">DukeAttend</a></h1>
                <div className="pb-4">
                  <p className="mt-0 mb-1 ">An attendance tracking app that encapsulates an iOS app, which students uses to check in, and a web app, which is the professor's primary interface. </p>
                  <div className="pt-0">
                    <a className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 hover:text-cyan-800 dark:hover:text-cyan-100 !no-underline" href="https://www.youtube.com/watch?v=PHaLQnKrUZQ" target="_blank" rel="noreferrer">View the Demo</a>
                  </div>
                </div>
                <div className=" flex flex-wrap items-start justify-start gap-2">
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Xcode
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Git
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    PostgresSQL
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    HTML
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    CSS
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    JS
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Ruby on Rails
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Figma
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Kotlin
                  </button>
                  <button className="items-start justify-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Fullstack
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Mobile Development
                  </button>
                </div>
              </div>
              <div>
                <h1 className="mt-12 mb-0"><p className="prose text-gray-950 dark:text-gray-300 font-semibold  text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-70 duration-90 hover:text-cyan-800 dark:hover:text-cyan-100 !no-underline text-lg" >Mini Amazon</p></h1>
                <div className="flex items-center space-x-4">
                  <p className="mt-0">Online marketplace users can browse to shop, with a fully functional and integrated front-end and back-end. Simply sign in to your account to purchase the items in your cart.</p>
                </div>
                <div className="flex flex-wrap items-start justify-start gap-2">
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Python
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Flask
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    PostgreSQL
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Git
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    React
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Fullstack
                  </button>
                </div>
              </div>
              <div>
                <h1 className="mt-12 mb-0"><p className="prose text-gray-950 dark:text-gray-300 font-semibold  text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-70 duration-90 hover:text-cyan-800 dark:hover:text-cyan-100 !no-underline text-lg" >Planet</p></h1>
                <div className="flex items-center space-x-4">
                  <p className="mt-0">An iOS mobile application that uses AI to create the perfect photo dump, presented in a Pinterest-style fashion.</p>
                </div>
                <div className="flex flex-wrap items-start justify-start gap-2">
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Swift
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Kotlin
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Docker
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Firebase
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Figma
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Fullstack
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Mobile Development
                  </button>
                </div>
              </div>
              <div>
                <h1 className="prose text-gray-950 dark:text-gray-300 font-semibold mt-12 mb-0 text-lg">CrunchTime</h1>
                <div className="flex items-center space-x-4">
                  <p className="mt-0">An iOS application that helps students utilize their time by breaking big projects down into manageable tasks </p>
                </div>
                <div className="flex flex-wrap items-start justify-start gap-2">
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Xcode
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Git
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Figma
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Frontend
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 duration-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Mobile Development
                  </button>
                </div>
              </div>
              <div>
                <h1 className="mt-12 mb-0"><a className="prose text-gray-950 dark:text-gray-300 font-semibold  text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-70 duration-90 hover:text-cyan-800 dark:hover:text-cyan-100 after:content-['_↗'] !no-underline text-lg" href="https://tochi-onuegbu.github.io" target="_blank" rel="noreferrer">tochionuegbu.com (v1)</a></h1>
                <div className="flex items-center space-x-4">
                  <p className="mt-0">First iteration of my personal portoflio website. </p>
                </div>
                <div className="flex flex-wrap items-start justify-start gap-2">
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    HTML
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    CSS
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    JS
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Git
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Frontend
                  </button>
                </div>
              </div>
              <div>
                <h1 className="mt-12 mb-0"><a className="prose text-gray-950 dark:text-gray-300 font-semibold  text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-70 duration-90 hover:text-cyan-800 dark:hover:text-cyan-100 !no-underline text-lg">Snake Game</a></h1>
                <div className="flex items-start space-x-4">
                  <p className="mt-0 pt-0">Simple program that enables the active user to control a snake
                    and eat as many apples as possible. Just don't run into the walls
                    or it's game over!</p>
                </div>
                <div className="flex flex-wrap items-start justify-start gap-2">
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Java
                  </button>
                  <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Git
                  </button>
                </div>
              </div>
            </div>
            <div className="!pl-0 !pr-0">
              <div>
                <h1 id="experiences" className="scroll-mt-16 text-gray-800 dark:text-gray-300 prose prose-h1:{utility} subpixel-antialiased !mt-0 !pt-0 leading-tight text-3xl md:text-4xl text-2xl font-semibold">relevant experiences</h1>
                <div className="sm:flex sm:flex-wrap sm:space-x-16 mt-10">
                  <div>
                    <small className="hidden sm:block uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">June - August 2024</small>
                  </div>
                  <div className="flex-1 flex flex-col space-y-1">
                    <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 hover:text-cyan-800 dark:hover:text-cyan-100 text-lg">Software Engineer Intern | Prudential Financial</a>
                    <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose lg:mr-4 lg:pr-0 text-base" >
                      <li className="">Designed and implemented the UI/UX of a full-stack model price calculator web application using React for the front-end and Python/Flask for the back-end, replacing outdated Excel processes with an automated solution
                      </li>
                      <li>Resolved 97% of critical Java vulnerabilities by leading coordinated patching efforts with domestic/offshore teams</li>
                      <li>Diagnosed and resolved recurring server errors, improving system stability and increasing efficiency
                      </li>
                      <li>Streamlined CI/CD pipelines in Jenkins by merging processes into a continuous workflow, reducing pipeline check
                      times, and improving deployment efficiency</li>
                    </ul>
                  </div>
                </div>
                <div className="sm:flex sm:flex-wrap sm:space-x-16 mt-10">
                  <div>
                    <small className="hidden sm:block uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">Jan - May 2024</small>
                  </div>
                  <div className="flex-1 flex flex-col space-y-1">
                    <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 hover:text-cyan-800 dark:hover:text-cyan-100 text-lg">Software Engineer | Duke Office of Information Technology</a>
                    <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose lg:mr-4 lg:pr-0 text-base" >
                      <li>Contributed to the feature expansion for the iOS mobile app, adding key functionalities and optimization for production</li>
                      <li>Utilized Docker to containerize the application's backend services, streamlining development and testing workflows</li>
                      <li>Integrated API calls from cross-functional teams, collaborating closely with back-end developers to align their
                      services with our app requirements</li>
                      <li>Spearheaded the development of the Android app, ensuring feature parity with the iOS version to achieve a
                      seamless user experience across OS platforms</li>
                    </ul>
                  </div>
                </div>
                <div className="sm:flex sm:flex-wrap sm:space-x-16 mt-10">
                  <div>
                    <small className="hidden sm:block uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">May - Aug 2023</small>
                  </div>
                  <div className="flex-1 flex flex-col space-y-1">
                    <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 after:content-['_↗'] hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" href="https://codeplus.duke.edu" target="_blank" rel="noreferrer">Software Engineer Intern | Duke Office of Information Technology</a>
                    <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose lg:mr-4 lg:pr-0 text-base" >
                      <li>Designed the UI/UX and built the front-end of a mobile iOS attendance-tracking app to boost classroom attendance by 75%</li>
                      <li>Developed a full-stack web application using Ruby on Rails, Docker, and PostgreSQL to allow for communication with the web and iOS app</li>
                      <li>Performed code reviews to optimize database query runtime efficiency and improve code quality</li>
                      <li>Incorporated feedback from stakeholders, team leads, and Duke OIT officials to refine the minimum viable product</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="sm:flex sm:flex-wrap sm:space-x-14 mt-10">
                  <div>
                    <small className="hidden sm:block uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">Sep - Feb 2022</small>
                  </div>
                  <div className="flex-1 flex flex-col space-y-1">
                    <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0  hover:text-cyan-800 dark:hover:text-cyan-100 text-lg">Software Developer Intern | Olympic Gold Quest</p>
                    <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose lg:mr-4 lg:pr-0 text-base" >
                      <li>Integrated the front-end and back-end using React, Flask, and Django</li>
                      <li>Refined the database to optimize data management and user interaction</li>
                      <li>Participated in stakeholder meetings to gather feedback, ensuring the product's alignment with key objectives</li>
                      <li>Implemented security measures to safeguard the website against potential threats and vulnerabilities</li>
                    </ul>
                  </div>
                </div>
              </div>


              <div>
                <div className="sm:flex sm:flex-wrap sm:space-x-14 mt-10">
                  <div>
                    <small className="hidden sm:block uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">2023 - 2024</small>
                  </div>
                  <div className="flex-1 flex flex-col sm:space-y-1">
                    <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" >Instructor | Coding Minds</a>
                    <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0overflow-wrap break-word font-extralight leading-loose lg:mr-4 lg:pr-0 text-base" >
                      <li>Led weekly one-on-one, project-based HTML, CSS, JS, and Roblox classes to clients using Replit IDE</li>
                      <li>Guided clients to deploy their website using Fly.io, Replit, and GitHub</li>
                      <li>Revised the HTML curriculum development and web prototyping</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div>
                <div className="sm:flex sm:flex-wrap sm:space-x-20 mt-10">
                  <div>
                    <small className="hidden sm:block uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">2022 - 2023</small>
                  </div>
                  <div className="flex-1 flex flex-col space-y-1">
                    <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 hover:text-cyan-800 dark:hover:text-cyan-100 text-lg">CrunchTime | Software Developer</p>
                    <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose lg:mr-4 lg:pr-0 text-base" >
                      <li>Designed CrunchTime's UI/UX front-end in Figma</li>
                      <li>Programmed the app's login page on Xcode and implemented user authentication</li>
                      <li>Met with co-developer weekly for progress checks</li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* <div>
                <div className="sm:flex sm:flex-wrap sm:space-x-32 mt-10">
                  <div>
                    <small className="hidden sm:block uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">2022 </small>
                  </div>
                  <div className="flex-1 flex flex-col space-y-1">
                    <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 after:content-['_↗'] hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" href="https://hackduke.org" target="_blank" rel="noreferrer">HackDuke | Web Developer</a>
                    <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose lg:mr-4 lg:pr-0 text-base" >
                      <li>Teamed up with a pair of students to design an ADHD-friendly scheduling and journaling website for documenting daily activities</li>
                      <li>Implemented key features and elements that are crucial to enable an inclusive and accessible user experience</li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="mt-10 pt-10 ">
                <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-gray-500 dark:text-slate-300 font-medium mb-0 after:content-['_↗'] hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" href="/pdfs/resumev2.pdf" target="_blank" rel="noreferrer">View resume</a>
              </div>
            </div>
            <div className="text-center pt-10 pb-8 pl-0 pr-0 ml-0 mr-0" >
              <div className="hidden sm:block text-center items-center prose font-sans col-span-full sm:text-base text-sm text-gray-400 dark:text-gray-600 mt-20"><span>Developed using React and Tailwind.</span></div>
              <div className="hidden sm:block text-center items-center prose font-sans mb-12 col-span-full sm:text-base text-sm text-gray-400 dark:text-gray-600"><span>All rights reserved © Tochi Onuegbu 2023</span></div>
              <span className="sm:hidden text-center items-center prose font-sans mb-12 text-xs text-gray-400 dark:text-gray-600">Developed using Remix and Tailwind. All rights reserved © Tochi Onuegbu 2023</span>
            </div>
          </div>
        </div>
      </main >
    </html>
  );
}