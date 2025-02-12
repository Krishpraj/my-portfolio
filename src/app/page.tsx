"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas, faEnvelope, faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Particles } from "@/components/ui/particles";
import { Separator } from "@/components/ui/separator";
import { ScrollButton } from "@/components/ui/ScrollButton";
import Resume from "@/components/ui/resume-section";
import { TextReveal } from "@/components/ui/text-reveal";
import GetInTouch from "@/components/ui/contact";
import ProjectList from "@/components/ui/list";
import Projects from "@/components/ui/projects";
import Footer from "@/components/ui/footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date());
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showExtras, setShowExtras] = useState(true); // Button on by default

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
      {/* Hide Particles on small and tablet screens */}
      <div className="hidden lg:block">
        <Particles className="absolute inset-0 -z-51" color={darkMode ? "#ffffff" : "#000000"} quantity={1000} staticity={50} />
      </div>
      
      <div id="hero-section" className="flex flex-col font-mono text-[18px] items-start ml-2 p-10 sm:items-start sm:p-4">
        <p>BASED IN</p>
        <p>TORONTO, CANADA</p>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEarthAmericas} className="text-xl" />
          <p className="font-mono">{time.toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Hide ProjectList on small and tablet screens */}
      {showExtras && (
        <div className="hidden lg:block">
          <ProjectList darkMode={darkMode} />
        </div>
      )}

      {/* Hide Dock on small and tablet screens */}
      {showExtras && (
        <div className="fixed bottom-[200px] left-12 z-50 w-auto hidden lg:block">
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
      )}

      <motion.div className="mt-[50px] text-center sm:mt-[20px]">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-[85px] sm:text-[200px] font-bold ">
          Krish
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-[85px] font-bold  mt-[-50px] sm:mt-[-100px] sm:text-[200px] ">
          Prajapati
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-[16px] sm:mt-[-10px] font-mono mt-4 sm:text-[24px] mt-2">
          Waterloo Computer Engineering Student
        </motion.h2>
        
        <div className="mt-2 text-[12px] font-mono mb-[100px] mx-auto text-center flex items-center justify-center max-w-[rem] z-0 text-blue-700-400 sm:text-[10px] sm:mb-[50px]">
          <motion.div id="introduction" className="mt-[100px] text-center sm:mt-[50px]"></motion.div>
          <TextReveal className={`mt-[150px] ${darkMode ? 'dark' : ''} sm:mt-[75px]`} text="Innovation thrives where curiosity meets action. The most powerful solutions come from those who dare to challenge the norm, push boundaries, and turn ideas into reality. Keep building, keep learning, and keep creating impact"/>
        </div>
        <div className="hidden sm:block">
          <ScrollButton />
        </div>
      </motion.div>
<div className={`${darkMode ? 'bg-black' : 'bg-white'} relative z-10`}>
  <motion.div id="resume-section" className="mt-[100px] text-center sm:mt-[50px]"></motion.div>
  <div className="flex justify-center">
    <h1 className="text-3xl text-[40px] font-bold sm:text-[100px]">About Me</h1>
  </div>
  <div className="flex justify-center">
    <p className="text-md mt-[10px] text-[30px] mb-[-30px] sm:text-[40px] sm:mt-[30px] sm:mb-[10px]">[મારા વિશે]</p>
  </div>
  <div className=" sm:justify-center flex-col items-center scale-75 sm:scale-100 mt-[-220px] sm:mt-0">
    <Resume darkMode={darkMode} />
  </div>

  <motion.div id="personal-projects" className="mt-[100px] text-center sm:mt-[50px]"></motion.div>
  <div className="flex justify-center">
    <h1 className="mt-[-300px] text-3xl text-[40px] font-bold sm:text-[100px] sm:mt-[100px]">View My Projects</h1>
  </div>
  <div className="flex justify-center">
    <p className="text-md mt-[-250px] text-[30px]  sm:text-[40px] sm:mt-[40px] ">[પ્રોજેક્ટ્સ]</p>
  </div>

  <div className="sm:justify-center scale-75 mt-[-350px]  sm:mt-[-10px] sm:scale-100 z-50">
    <Projects darkMode={darkMode}/>
  </div>

  <motion.div id="contact-section" className="mt-[-300px] text-center sm:mt-[50px]"></motion.div>
  <div className="flex justify-center">
    <h1 className="mt-[200px] text-3xl text-[40px] font-bold sm:text-[100px] sm:mt-[100px]">Contact Me</h1>
  </div>
  <div className="flex justify-center">
    <p className="text-md sm:mt-[50px] text-[30px] sm:mb-[-20px] sm:text-[40px] mt-[25px] mb-[-10px]">[સંપર્ક]</p>
  </div>
  <GetInTouch darkMode={darkMode}/>
</div>
      <Footer darkMode={darkMode} />
      <button 
        onClick={() => setShowExtras(!showExtras)} 
        className="fixed bottom-8 right-8 z-50 p-4 bg-blue-600 text-white rounded-full hover:bg-blue-500 hidden lg:block"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}
