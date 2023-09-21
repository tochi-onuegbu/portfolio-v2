import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useEffect } from 'react';
import DarkModeButton from "~/components/DarkModeButton";
import Constellation from "~/components/Constellation";




export const meta: MetaFunction = () => [{ title: "Tochi Onuegbu Personal Website" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <html className="dark:bg-gray-900 bg-stone-50">
    <main className="dark:bg-gray-900 bg-stone-50">
    <div className="mb-25 !scroll-smooth " >
      
      {/* side dashboard */}
      <div className="mt-14 h-screen flex items-start justify-start dark:bg-gray-900 bg-stone-50 text-white h-screen w-[50%] p-4 fixed overflow-y-auto">
        <div className="ml-20 p-4">
        
          <div className="mt-0 pt-0 pl-0 ml-0"><DarkModeButton /> </div>
          {/* <div className="noscript-hidden hidden lg:block"><button className="border-secondary hover:border-primary focus:border-primary inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none w-14"><div className="relative h-8 w-8"><span className="absolute inset-0 rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white" ><svg className="w-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993" fill="currentColor"></path></svg></span><span className="absolute inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"><svg className="w-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 21.4194C13.0123 21.4194 10.5813 18.9874 10.5813 15.9994C10.5813 13.0114 13.0123 10.5804 16.0003 10.5804C18.9883 10.5804 21.4193 13.0114 21.4193 15.9994C21.4193 18.9874 18.9883 21.4194 16.0003 21.4194M16.0003 8.64136C11.9423 8.64136 8.64233 11.9414 8.64233 15.9994C8.64233 20.0574 11.9423 23.3574 16.0003 23.3574C20.0573 23.3574 23.3583 20.0574 23.3583 15.9994C23.3583 11.9414 20.0573 8.64136 16.0003 8.64136" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0004 7.08447C16.5364 7.08447 16.9704 6.64946 16.9704 6.11446V3.34546C16.9704 2.81046 16.5364 2.37646 16.0004 2.37646C15.4644 2.37646 15.0304 2.81046 15.0304 3.34546V6.11446C15.0304 6.64946 15.4644 7.08447 16.0004 7.08447" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.11559 15.0298H3.34559C2.81059 15.0298 2.37659 15.4648 2.37659 15.9998C2.37659 16.5348 2.81059 16.9688 3.34559 16.9688H6.11559C6.65159 16.9688 7.08459 16.5348 7.08459 15.9998C7.08459 15.4648 6.65159 15.0298 6.11559 15.0298" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0004 24.9146C15.4644 24.9146 15.0304 25.3496 15.0304 25.8846V28.6536C15.0304 29.1886 15.4644 29.6236 16.0004 29.6236C16.5364 29.6236 16.9704 29.1886 16.9704 28.6536V25.8846C16.9704 25.3496 16.5364 24.9146 16.0004 24.9146" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6542 15.0298H25.8842C25.3492 15.0298 24.9152 15.4648 24.9152 15.9998C24.9152 16.5348 25.3492 16.9688 25.8842 16.9688H28.6542C29.1902 16.9688 29.6242 16.5348 29.6242 15.9998C29.6242 15.4648 29.1902 15.0298 28.6542 15.0298" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9896 9.97995C23.2376 9.97995 23.4856 9.88495 23.6756 9.69595L24.7036 8.66795C25.0816 8.28995 25.0816 7.67495 24.7036 7.29595C24.3246 6.91795 23.7106 6.91795 23.3316 7.29595L22.3036 8.32495C21.9256 8.70295 21.9256 9.31695 22.3036 9.69595C22.4926 9.88495 22.7416 9.97995 22.9896 9.97995" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32507 9.69593C8.51407 9.88493 8.76207 9.97993 9.01107 9.97993C9.25907 9.97993 9.50707 9.88493 9.69607 9.69593C10.0751 9.31693 10.0751 8.70293 9.69607 8.32493L8.66807 7.29693C8.28907 6.91893 7.67507 6.91893 7.29707 7.29693C6.91807 7.67493 6.91807 8.28993 7.29707 8.66793L8.32507 9.69593Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32507 22.3043L7.29707 23.3313C6.91807 23.7093 6.91807 24.3243 7.29707 24.7023C7.48607 24.8923 7.73407 24.9873 7.98207 24.9873C8.23007 24.9873 8.47807 24.8923 8.66807 24.7023L9.69607 23.6753C10.0751 23.2973 10.0751 22.6833 9.69607 22.3043C9.31807 21.9253 8.70307 21.9253 8.32507 22.3043" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.6752 22.3043C23.2962 21.9253 22.6822 21.9253 22.3032 22.3043C21.9252 22.6833 21.9252 23.2973 22.3042 23.6753L23.3322 24.7023C23.5212 24.8923 23.7692 24.9873 24.0182 24.9873C24.2662 24.9873 24.5142 24.8923 24.7032 24.7023C25.0822 24.3243 25.0822 23.7093 24.7032 23.3313L23.6752 22.3043Z" fill="currentColor"></path></svg></span></div><span className="ml-4 text-black dark:text-white sr-only">switch to light mode</span></button></div> */}
          <h1 className="text-slate-800 dark:text-white prose prose-h1:{utility} subpixel-antialiased mt-16 leading-tight text-3xl md:text-4xl text-2xl font-bold">Hi! I'm Tochi (Elvina) Onuegbu</h1>
          <div>
            <h3 className="leading-loose font-extralight text-slate-600 dark:text-slate-300 py-5 leading-tight text-2xl md:text-larg
            e text-2xl">I develop accessible and visually stimulating web application and software</h3>
          </div>
          <nav className="nav hidden lg:block pb-20" aria-label="In-page jump links">
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
              
              <li>
                <Link to="/blog" className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-600 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-100 group-focus-visible:text-slate-200">Blog</span> 
                </Link>
              </li>
            </ul>
          </nav> 
          <div className=" flex items-center space-x-4">
              {/* GitHub */}
              <a href="https://github.com/tochi-onuegbu" className="">
                <svg className="fill-slate-700 dark:fill-white" width="36" height="36" fill="none" viewBox="0 0 24 24"><title>GitHub</title>
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/tochi-onuegbu-83a60223b/" className="">
                <svg className="fill-slate-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 448 512"><title>LinkedIn</title>
                  <path  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
              </a>
              {/* Email */}
              <a href="mailto:tochi.onuegbu@duke.edu" className="">
                <svg className="fill-slate-700 dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 512 512"><title>Email</title>
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 mb-16 ml-24 pl-4" >
            <div className="pb-16 col-span-full text-base text-gray-400 dark:text-gray-600"><span>All rights reserved</span> <span className="block md:inline">© Tochi Onuegbu 2023</span></div>
          </div>
        </div>
      </div>
      <div className="ml-[50%] p-4 ">
        
        {/* main dashboard */}
        <h1 id="about-me" className="scroll-mt-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-cyan-300 prose prose-h1:{utility} subpixel-antialiased mt-20 pt-19 leading-tight text-3xl md:text-4xl text-2xl font-semibold">a little bit about me</h1>

        <div className="font-extralight prose leading-loose text-slate-900 dark:text-gray-400">
          <p className="">I am a third-year student at <a className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">Duke University </a>studying <a className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">Computer Science </a> with a minor in Visual Media Studies and a certificate in Digital Intelligence. I am a  <a className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">Rubenstein Scholar, </a> a prestigious full-ride scholarship awarded to selected students. </p>
          <p className="mt-5 mb-24 ">I am a part of  <a className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">DTech Scholars,</a> a program that uplifts women in STEM, equipping me with a network of individuals who I have as a support system. I am also a member of  <a className="font-normal text-slate-950 dark:text-gray-300 underline-offset-8 no-underline ">National Society of Black Engineers (NSBE). </a>  I am passionate about inclusivity in the tech industry and the promotion of resources to underrepresented communities.</p>
        </div>
        {/* <iframe className="rounded-lg w-full aspect-video" src="https://www.youtube.com/embed/rQ4pUc-5xTE?si=tdQFTkaNIzczHE7A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> */}

        <div className="snap-x snap-mandatory pt-8">
          <h1 id="tech" className="scroll-mt-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-cyan-600 prose prose-h1:{utility} subpixel-antialiased  pt-18 leading-tight text-3xl md:text-4xl text-2xl font-semibold">techstack</h1>
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="mt-6 mb-20 pb-15 flex flex-wrap justify-center gap-8">
              {[
              
                {
                  src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
                  alt: "Fly.io",
                  href: "https://fly.io",
                  title: "Fly.io",
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
                  alt: "SQLite",
                  href: "https://sqlite.org",
                  title: "SQLite",
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
                  alt: "Prisma",
                  href: "https://prisma.io",
                  title: "Prisma",
                },
                {
                  src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
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
                // {
                //   src: "https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg",
                //   alt: "Remix",
                //   href: "https://remix.run",
                //   title: "Remix",
                // },
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
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                  alt: "Java",
                  href: "https://www.java.com/en/",
                  title: "Java",
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
          <h1 id="projects" className="scroll-mt-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-cyan-600 prose prose-h1:{utility} subpixel-antialiased mt-10 leading-tight text-3xl md:text-4xl text-2xl font-semibold">featured projects</h1>
          <div className="font-extralight prose leading-loose text-slate-900 dark:text-gray-400 mb-20 pb-12">
            <div>
              <h1 className="mt-12 mb-0"><a className="prose text-gray-950 dark:text-gray-300 font-semibold  text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 hover:text-cyan-800 dark:hover:text-cyan-100 after:content-['_↗'] !no-underline text-lg" href="https://www.youtube.com/watch?v=YjH5zGIsbrE&t=1s" target="_blank">DukeAttend</a></h1>
              <div className="flex space-x-4">
                <p className="mt-0 ">An attendance tracking app that encapsulates an iOS app, which students uses to check in, and a web app, which is the professor's primary interface. <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 hover:text-cyan-800 dark:hover:text-cyan-100 !no-underline" href="https://www.youtube.com/watch?v=PHaLQnKrUZQ" target="_blank">View the Demo</a></p>
                <img></img>
              </div>
              <div className="flex flex-wrap items-start justify-start space-x-4">
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
                <button className="items-start justify-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Fullstack
                </button>
              </div>
            </div>
            <div>
              <h1 className="prose text-gray-950 dark:text-gray-300 font-semibold mt-12 mb-0 text-lg">Mini Amazon</h1>
              <div className="flex items-center space-x-4">
                <p className="mt-0">Online marketplace users can browse to shop. Simply sign in to your account to purchase the items in your cart.</p>
                <img></img>
              </div>
              <div className="flex flex-wrap items-center space-x-4">
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
                  Fullstack
                </button>
              </div>
            </div>
            <div>
              <h1 className="prose text-gray-950 dark:text-gray-300 font-semibold mt-12 mb-0 text-lg">CrunchTime</h1>
              <div className="flex items-center space-x-4">
                <p className="mt-0">App that helps students utilize their time by breaking big projects down into smaller "bites" — excuse the pun. </p>
                <img></img>
              </div>
              <div className="flex flex-wrap space-x-4 items-start">
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Xcode
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Git
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Frontend
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Figma
                </button>
              </div>
            </div>
            <div>
              <h1 className="prose text-gray-950 dark:text-gray-300 font-semibold mt-12 mb-0 text-lg">tochionuegbu.com (v2)</h1>
              <div className="flex items-center space-x-4">
                <p className="mt-0">Second iteration of my personal portoflio website. </p>
                <img></img>
              </div>
              <div className="flex flex-wrap items-center space-x-4">
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Remix
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Tailwind
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Prisma
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Git
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Fullstack
                </button>
              </div>
            </div>


            {/* <div>
              <h1 className="prose text-gray-300 font-normal mt-12 mb-0">Noted</h1>
              <div className="flex items-center space-x-4">
                <p>Online note-taking app that has authentication. Once a user is authenticated, they will be able to create a new note.</p>
                <img></img>
              </div>
              <div className="flex flex-wrap items-center space-x-4">
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-cyan-700 text-white hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Remix
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-cyan-700 text-white hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Tailwind
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-cyan-700 text-white hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Prisma
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-cyan-700 text-white hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Figma
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-cyan-700 text-white hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Git
                </button>
              </div>
            </div> */}

            <div>
              <h1 className="prose text-gray-950 dark:text-gray-300 font-semibold mt-12 text-lg">Snake Game</h1>
              <div className="flex items-start space-x-4">
                <p className="mt-0 pt-0">Simple program that enables the active user to control a snake
                  and eat as many apples as possible. Just don't run into the walls
                  or it's game over!</p>
                  
                  
              </div>
              <div className="flex flex-wrap items-center space-x-4">
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Java
                </button>
                <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow hover:shadow-lg text-sm rounded-full px-2 py-1 bg-gray-400 dark:bg-cyan-700 text-white hover:bg-gray-700 dark:hover:bg-gray-700 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Git
                </button>
              </div>
            </div>

          </div>

          <div>
            <div>
              <h1 id="experiences" className="scroll-mt-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-cyan-600 prose prose-h1:{utility} subpixel-antialiased mt-15 pt-15 leading-tight text-3xl md:text-4xl text-2xl font-semibold">relevant experiences</h1>
              <div className="flex flex-wrap space-x-16 mt-10">
                <div>
                  <small className="uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">2023 - PRESENT</small>
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 after:content-['_↗'] hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" href="https://codeplus.duke.edu" target="_blank">Code+ | Software Developer</a>
                  <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose mr-20 pr-10 text-base" >
                    <li className="">Collaborate with a <a className="dark:text-white text-slate-800 underline-offset-8 no-underline hover:underline " href="https://codeplus.duke.edu/projects/managing-events-and-attendance" target="_blank">team of six students</a> using Xcode's Storyboard interface to develop an attendance tracking app with NFC technology to boost classroom  attendance by at least 75% </li>
                    <li>Using Ruby on Rails and PostgreSQL to implement the back-end web application</li>
                    <li>Researching optimal user interface design to streamline attendance records for professors and students</li>
                    <li>Meet with <a className="dark:text-white text-slate-800 underline-offset-8 no-underline hover:underline" href="https://ece.duke.edu/faculty/andrew-hilton" target="_blank">stakeholders</a> every week to refine the minimal viable product</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap space-x-14 mt-10">
                <div>
                  <small className="uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">2023 - PRESENT</small>
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 after:content-['_↗'] hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" href="https://gitlab.oit.duke.edu/ak561/mini-amazon-skeleton" target="_blank">Project | Web Developer</a>
                  <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose mr-20 pr-10 text-base" >
                    <li>Building a database-driven website (using Python, Flask, and PostgreSQL) from the ground up that mimics the functionalities of an online marketplace such as Amazon</li>
                    <li>Collaborate closely with my team on the overall database and website designs, and on integrating the APIs</li>
                    <li>Conduct weekly stand-up meetings on Microsoft Teams with project team</li>


                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap space-x-14 mt-10">
                <div>
                  <small className="uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">2023 - PRESENT</small>
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 after:content-['_↗'] hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" href="https://codingmindsacademy.com" target="_blank">Coding Minds | Instructor</a>
                  <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0overflow-wrap break-word font-extralight leading-loose mr-20 pr-10 text-base" >
                    <li>Lead weekly one-on-one, project-based HTML, CSS, JS, and Roblox classes to clients using Replit IDE</li>
                    <li>Guide clients to deploy their website</li>
                    <li>Revise the HTML curriculum development and web prototyping</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap space-x-20 mt-10">
                <div>
                  <small className="uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">2022 - 2023</small>
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" target="_blank">CrunchTime | Software Developer</a>
                  <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose mr-20 pr-10 text-base" >
                    <li>Designed CrunchTime's UI/UX front-end in Figma</li>
                    <li>Programmed the app's login page on Xcode and implemented user authentication</li>
                    <li>Met with co-developer weekly for progress checks</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap space-x-32 mt-10">
                <div>
                  <small className="uppercase prose font-sans text-gray-900 dark:text-gray-300 font-extralight mb-0 text-sm">2022 </small>
                </div>
                <div className="flex-1 flex flex-col space-y-1">
                  <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose text-slate-800 dark:text-gray-300 font-medium mb-0 after:content-['_↗'] hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" href="https://hackduke.org" target="_blank">HackDuke | Web Developer</a>
                  <ul className="list-disc list-inside prose text-slate-900 dark:text-gray-400 font-light mt-0 overflow-wrap break-word font-extralight leading-loose mr-20 pr-10 text-base" >
                    <li>Teamed up with a pair of students to design an ADHD-friendly scheduling and journaling website for documenting daily activities</li>
                    <li>Implemented key features and elements that are crucial to enable an inclusive and accessible user experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-10 ">
            <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 duration-300 prose bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-cyan-600 font-medium mb-0 after:content-['_↗'] hover:text-cyan-800 dark:hover:text-cyan-100 text-lg" href="/pdfs/resume.pdf" target="_blank" rel="noopener noreferrer">View full resume</a>
            </div>
          </div>
          <div className="" >
            <div className="prose font-sans mb-16 col-span-full text-base text-gray-400 dark:text-gray-600 md:mt-44"><span>Developed using Remix and Tailwind</span></div>
          </div>
        </div>
        
      </div>
    </main >
  </html>
  );
}