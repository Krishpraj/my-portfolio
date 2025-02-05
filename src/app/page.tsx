"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faEnvelope, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Particles } from "@/components/ui/particles";
import { Separator } from "@/components/ui/separator";
import { MorphingText } from "@/components/ui/morphing-text";
import { ScrollButton } from "@/components/ui/ScrollButton";
import Resume from "@/components/ui/resume-section";
import { TextReveal } from "@/components/ui/text-reveal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import GetInTouch from "@/components/ui/contact";
import ProjectList from "@/components/ui/list";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date());
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 5000);
  }, []);

  if (!loadingComplete) {
    return null;
  }

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen cursor-crosshair relative`}>
      <Particles className="absolute inset-0 -z-51" color={darkMode ? "#ffffff" : "#000000"} quantity={1000} staticity={50} />
      
      <div id="hero-section" className="flex flex-col font-mono text-[18px] items-start ml-2 p-10">
        <p>BASED IN</p>
        <p>TORONTO, CANADA</p>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEarthAmericas} className="text-xl" />
          <p className="font-mono">{time.toLocaleTimeString()}</p>
        </div>
      </div>

      <ProjectList darkMode={darkMode} />

      <div className="fixed mt-[-137px] left-0 w-full z-50 hover:w-full transition-all duration-300">
        <Dock iconMagnification={60}>
          <DockIcon>
            <button onClick={() => setDarkMode(!darkMode)} className="text-3xl text-gray-400 hover:text-gray-600">
              {darkMode ? <FontAwesomeIcon icon={faSun} color="white" /> : <FontAwesomeIcon icon={faMoon} color="black" />}
            </button>
          </DockIcon>
          <Separator orientation="vertical" className={`h-full ${darkMode ? "bg-white" : "bg-black"}`} />
          <DockIcon>
            <a href="https://github.com/krishpraj" target="_blank" rel="noopener noreferrer">
              <button className="text-3xl text-gray-400 hover:text-gray-600">
                <FontAwesomeIcon icon={faGithub} color={darkMode ? "white" : "black"} />
              </button>
            </a>
          </DockIcon>
          <DockIcon>
            <a href="https://www.linkedin.com/in/krish-prajapati6" target="_blank" rel="noopener noreferrer">
              <button className="text-3xl text-gray-400 hover:text-gray-600">
                <FontAwesomeIcon icon={faLinkedin} color={darkMode ? "white" : "black"} />
              </button>
            </a>
          </DockIcon>
          <DockIcon>
            <a href="mailto:krishpraj6@gmail.com">
              <button className="text-3xl text-gray-400 hover:text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} color={darkMode ? "white" : "black"} />
              </button>
            </a>
          </DockIcon>
        </Dock>
      </div>

      <motion.div className="mt-[100px] text-center">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-[150px] font-bold tracking-wide">
          Krish
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-[150px] font-bold tracking-wide mt-[-80px]">
          Prajapati
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-[24px] mt-[-10px] font-mono mt-4">
          Waterloo Computer Engineering Student
        </motion.h2>
        
        <div className="mt-2 text-[12px] font-mono mb-[100px] mx-auto text-center flex items-center justify-center max-w-[rem] z-0 text-blue-700-400 ">
          <motion.div id="introduction" className="mt-[100px] text-center"></motion.div>
          <TextReveal className={`mt-[150px] ${darkMode ? 'dark' : ''}`} text="Innovation thrives where curiosity meets action. The most powerful solutions come from those who dare to challenge the norm, push boundaries, and turn ideas into reality. Keep building, keep learning, and keep creating impact"/>
        </div>
        <ScrollButton />
      </motion.div>

      <motion.div id="resume-section" className="mt-[100px] text-center"></motion.div>
      <div className="flex justify-center">
        <h1 className="text-3xl text-[150px] font-bold">About Me</h1>
      </div>
      <div className="flex justify-center">
        <p className="text-md mt-[50px] text-[40px] mb-[-5px] ">[પોર્ટફોલિયો]</p>
      </div>
      <Resume darkMode={darkMode} />

      <motion.div id="personal-projects" className="mt-[100px] text-center"></motion.div>
      <MorphingText texts={["Projects" ,"View My Work"]}/>
      <div>
        <div className="flex justify-center">
          <a href="https://github.com/krishpraj" target="_blank" rel="noopener noreferrer">
            <InteractiveHoverButton className="text-black mt-[10px]"> Github </InteractiveHoverButton>
          </a>
        </div>

        <motion.div id="contact-section" className="mt-[100px] text-center"></motion.div>
        <GetInTouch/>
      </div>
    </div>
  );
}
