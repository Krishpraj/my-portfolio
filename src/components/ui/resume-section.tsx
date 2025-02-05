import React, { useState } from "react";
import { motion } from "framer-motion";
import kumonImage from "@/assets/Kumon-Emblem.png";
import freelanceWebDeveloperImage from "@/assets/K.jpg";
import vexRoboticsImage from "@/assets/VEX-Robotics_Full-Color-1.png";
import universityOfWaterlooImage from "@/assets/University_of_Waterloo_seal.svg.png";

interface ResumeProps {
  darkMode: boolean;
}

const skillLevels = [
  { skill: "React", level: 90 },
  { skill: "Next.js", level: 85 },
  { skill: "TypeScript", level: 80 },
  { skill: "Node.js", level: 75 },
  { skill: "Python", level: 95 },
  { skill: "Go", level: 70 },
  { skill: "Postgres", level: 80 },
  { skill: "Docker", level: 85 },
  { skill: "Kubernetes", level: 70 },
  { skill: "Java", level: 80 },
  { skill: "C++", level: 90 },
];
const skillColors: { [key: string]: string } = {
  React: "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  "Node.js": "#339933",
  Python: "#3776AB",
  Go: "#00ADD8",
  Postgres: "#336791",
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  Java: "#007396",
  "C++": "#00599C",
};

const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  const [audienceType, setAudienceType] = useState<'recruiter' | 'engineer' | 'classmate'>('recruiter');

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-gray-900"} min-h-screen flex items-center justify-center`}>
      <div className="max-w-4xl w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Header */}
  
        {/* Audience Selector */}
        <section className="mb-6 text-center">
          <div className="flex justify-center gap-2">
            <button 
              onClick={() => setAudienceType('recruiter')}
              className={`px-3 py-1 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors ${audienceType === 'recruiter' ? 'underline' : ''}`}
            >
             [ For Recruiters ]
            </button>
            <button 
              onClick={() => setAudienceType('engineer')}
              className={`px-3 py-1 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors ${audienceType === 'engineer' ? 'underline' : ''}`}
            >
             [ For Engineers ]
            </button>
            <button 
              onClick={() => setAudienceType('classmate')}
              className={`px-3 py-1 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors ${audienceType === 'classmate' ? 'underline' : ''}`}
            >
            [ For Classmates ]
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 max-w-md mx-auto">
            {audienceType === 'recruiter' 
              ? "Hi, I'm Krish. A Computer Engineering student with a passion for building innovative, scalable solutions and leveraging cutting-edge technologies to drive impact in real-world applications."
              : audienceType === 'engineer'
              ? "Hi, I'm Krish. Fellow developer passionate about clean code, system design, and exploring cutting-edge technologies to build robust solutions."
              : "Hi, I'm Krish. Computer Engineering student at Waterloo, always eager to collaborate on interesting projects and share knowledge with peers."
            }
          </p>
        </section>

        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Experience and Skills Section */}
        <section className="mb-6 flex">
          <div className="w-1/2 pr-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span>[ EXPERIENCE ]</span>
            <span className="flex-1 mx-2 "></span>
            <span>[1]</span>
            </h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <img src={freelanceWebDeveloperImage.src} alt="Freelance Web Developer" className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="text-md font-semibold">¹ Freelance Web Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">Jan 2023 - Present</p>
                  <ul className="list-disc ml-5 mt-1 text-sm">
                    <li>Developed and maintained web applications using React, Node.js, and Tailwind CSS.</li>
                    <li>Integrated RESTful APIs and optimized performance for improved user experience.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img src={vexRoboticsImage.src} alt="VEX Robotics Team" className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="text-md font-semibold">² VEX Robotics Team | Programmer</h3>
                  <p className="text-gray-500 dark:text-gray-400">Sep 2022 - Jun 2024</p>
                  <ul className="list-disc ml-5 mt-1 text-sm">
                    <li>Programmed robot behavior with C++ on VEX Cortex microcontrollers.</li>
                    <li>Optimized sensor integration, improving autonomy and performance by over 30%.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img src={kumonImage.src} alt="Kumon" className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="text-md font-semibold">³ Kumon | Teaching Assistant</h3>
                  <p className="text-gray-500 dark:text-gray-400">Sep 2021 - Jun 2024</p>
                  <ul className="list-disc ml-5 mt-1 text-sm">
                    <li>Supported 200+ students in math and reading.</li>
                    <li>Recorded and analyzed student performance data in Excel.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-px bg-gray-300 dark:bg-gray-700 mx-4"></div>

          <div className="w-1/2 pl-4">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span>[ SKILLS ]</span>
            <span className="flex-1 mx-2 "></span>
            <span>[2]</span>
            </h2>
            <div className="space-y-2">
              {skillLevels.map(({ skill, level }) => (
                <div key={skill} className="flex items-center space-x-3">
                  <span className="w-4 h-4 " style={{ backgroundColor: skillColors[skill] }}></span>
                  <span className="w-24 text-gray-600 dark:text-gray-300 text-sm">{skill}</span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-1 rounded-full max-w-[100px]">
                    <div
                      className="bg-blue-500 dark:bg-blue-600 h-1 rounded-full"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-right text-gray-600 dark:text-gray-300 text-sm">{level}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Education Section */}
        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span>[ EDUCATION ]</span>
            <span className="flex-1 mx-2 "></span>
            <span>[3]</span>
            </h2>
          <div className="flex items-center space-x-3">
            <img src={universityOfWaterlooImage.src} alt="University of Waterloo" className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="text-md font-semibold">University of Waterloo</h3>
              <p className="text-gray-500 dark:text-gray-400">Sep 2024 - May 2029</p>
              <p className="text-sm">Candidate for BASc in Computer Engineering, Co-op</p>
              <p className="text-sm">Relevant Coursework: Fundamentals of Programming, Project Studio</p>
            </div>
          </div>
        </section>

        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Footer */}
        <footer className="text-center mt-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm"> Content From: 2025 Krish-Resume </p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;


