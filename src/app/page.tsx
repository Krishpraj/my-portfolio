"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faEnvelope, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Particles } from "@/components/ui/particles";
import { Separator } from "@/components/ui/separator";
import { MorphingText, useMorphingText } from "@/components/ui/morphing-text";
import { ScrollButton } from "@/components/ui/ScrollButton";
import Resume from "@/components/ui/resume-section";
import { TextReveal } from "@/components/ui/text-reveal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Projects from "@/components/ui/projects";
import GetInTouch from "@/components/ui/contact";
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
      
      <div className="flex flex-col font-mono items-start ml-10 p-10">
        <p>Based in</p>
        <p>Toronto, Canada</p>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEarthAmericas} className="text-xl" />
          <p className="font-mono">{time.toLocaleTimeString()}</p>
        </div>
        
      </div>

      

      <div className="fixed mt-[-137px]  left-0 w-full z-50">
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
      
      <motion.div className="mt-[100px]  text-center">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-[120px] font-bold tracking-wide">
          Krish
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-[120px] font-bold tracking-wide mt-[-80px]">
          Prajapati
        </motion.h1>
        <div className="mt-2 text-[12px] font-mono mb-[100px] mx-auto text-center flex items-center justify-center max-w-[30rem] z-0 text-blue-700-400 ">
          <TextReveal className={`mt-[150px] ${darkMode ? 'dark' : ''}`} text="An aspiring software developer passionate about creating innovative open-source software solutions."/>
        </div>
        <ScrollButton />
      </motion.div>
      
      <MorphingText  texts={["About Me" ,"Quick Overview"]}/>
  
      <Resume darkMode={darkMode} />
      <MorphingText  texts={["Projects" ,"View My Work"]}/>
      <div>
      <div className="flex justify-center">
      <a href="https://github.com/krishpraj" target="_blank" rel="noopener noreferrer">
        <InteractiveHoverButton  className="text-black mt-[10px]"> Github </InteractiveHoverButton>
     </a>
      </div>

    <GetInTouch/>




      </div>
    </div>
  );
}
