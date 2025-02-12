"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "HERO SECTION", id: "hero-section" },
  { name: "INTRODUCTION", id: "introduction" },
  { name: "RESUME SECTION", id: "resume-section" },
  { name: "PROJECTS SECTION", id: "personal-projects" },
  { name: "CONTACT SECTION", id: "contact-section" },
];

export default function ProjectList({ darkMode }: { darkMode: boolean }) {
  const [selectedProject, setSelectedProject] = useState(1);

  const handleProjectClick = (index: number, id: string) => {
    setSelectedProject(index + 1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    projects.forEach((project, index) => {
      const element = document.getElementById(project.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setSelectedProject(index + 1);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <div className="min-h-screen relative">
        {/* Large Number */}
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute top-[-30px] right-10 text-[120px] font-mono font-bold ${darkMode ? "text-white" : "text-black"}`}
        >
          {String(selectedProject).padStart(2, '0')}
        </motion.div>

        {/* Project List */}
        <div className="absolute text-[20px] bottom-10 left-12 font-mono pointer-events-auto">
          {projects.map((project, index) => (
            <div key={index} className={`flex hover:underline items-center ${index + 1 === selectedProject ? (darkMode ? "text-white" : "text-black") : "text-gray-500"}`}>
              <span className="mr-2">N.{String(index + 1).padStart(2, '0')}</span>
              <span className="cursor-pointer" onClick={() => handleProjectClick(index, project.id)}>
                {project.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
