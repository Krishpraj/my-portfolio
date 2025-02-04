"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faCar, faPen, faCode, faBurger, faBasketball } from "@fortawesome/free-solid-svg-icons";

const tasks = [
  "INITIALIZING",
  "LOADING",
  "SETTING UP",
  "FETCHING",
  "RENDERING",
  "FINALIZING"
];

const icons = [faMusic, faCar, faPen, faCode, faBurger, faBasketball];

export default function Loading() {
  const [value, setValue] = useState(0);
  const [currentTask, setCurrentTask] = useState(tasks[0]);
  const [currentIcon, setCurrentIcon] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < 100) {
          const newValue = prevValue + 1;
          const taskIndex = Math.floor((newValue / 100) * tasks.length);
          setCurrentTask(tasks[taskIndex]);
          return newValue;
        }
        clearInterval(interval);
        return 100;
      });
    }, 50); // Simulated progress bar update interval

    return () => clearInterval(interval);
  }, []);

  // Rotate icons
  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIcon((prevIcon) => (prevIcon + 1) % icons.length);
    }, 1000); // Icon rotation interval

    return () => clearInterval(iconInterval);
  }, []);

  // Display loading page until value reaches 100
  if (value < 100) {
    return (
      <div className="relative h-screen bg-white cursor-crosshair overflow-hidden flex flex-col items-center justify-center space-y-8">
        {/* Rotating Icons */}
        <motion.div
          key={currentIcon}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="text-black text-6xl"
        >
          <FontAwesomeIcon icon={icons[currentIcon]} />
        </motion.div>

        {/* Header */}
        <div className="text-black font-mono text-5xl">
          [KRISH PORTFOLIO]
        </div>

        {/* Loading Bar */}
        <div className="w-1/4 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-black"
            style={{ width: `${value}%` }}
          />
        </div>

        {/* Terminal-like text in the center */}
        <div className="text-black font-mono text-2xl text-center">
          <p>{currentTask}</p>
          <p className="text-4xl">{value}%</p>
        </div>
      </div>
    );
  }

  // Once loading is complete, render the children
  return null;  // Will allow the actual page content (children) to be displayed
}
