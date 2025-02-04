import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconCloud } from "@/components/ui/icon-cloud"; // Assuming you have this component
import kumonImage from "@/assets/Kumon-Emblem.png";
import freelanceWebDeveloperImage from "@/assets/K.jpg";
import vexRoboticsImage from "@/assets/VEX-Robotics_Full-Color-1.png";
import universityOfWaterlooImage from "@/assets/University_of_Waterloo_seal.svg.png";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "android",
  "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
  "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest", "cypress",
  "docker", "git", "jira", "github", "gitlab", "visualstudiocode", "androidstudio",
  "sonarqube", "figma"
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg ">
      <IconCloud images={images} />
    </div>
  );
}

interface ResumeProps {
  darkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-gray-900"} max-w-2xl mx-auto p-6 min-h-screen font-mono`}>
      {/* Experience Section */}
      <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex justify-between">
          <span>[EXPERIENCE]</span>
          <span>[1]</span>
        </h2>
        <div className="flex items-center space-x-4 mb-4">
          <label htmlFor="icon-upload" className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-300 cursor-pointer">
            <img src={freelanceWebDeveloperImage.src} alt="Freelance Web Developer" className="w-16 h-16 object-cover rounded-full" />
          </label>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Freelance Web Developer</h3>
            <p className="text-gray-500 dark:text-gray-200">Jan 2023 - Present</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Developed and maintained web applications using React, Node.js, and Tailwind CSS.</li>
              <li>Integrated RESTful APIs and optimized performance for improved user experience.</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <label htmlFor="icon-upload2" className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer">
            <img src={vexRoboticsImage.src} alt="VEX Robotics Team" className="w-16 h-16 object-cover rounded-full" />
          </label>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">VEX Robotics Team | Programmer</h3>
            <p className="text-gray-500 dark:text-gray-400">Sep 2022 - Jun 2024</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Programmed robot behavior with C++ on VEX Cortex microcontrollers.</li>
              <li>Optimized sensor integration, improving autonomy and performance by over 30%.</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <label htmlFor="icon-upload3" className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer">
            <img src={kumonImage.src} alt="Kumon" className="w-16 h-16 object-cover rounded-full" />
          </label>
          <div>
            <h3 className="text-lg font-semibold">Kumon | Teaching Assistant</h3>
            <p className="text-gray-500 dark:text-gray-400">Sep 2021 - Jun 2024</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Supported 200+ students in math and reading.</li>
              <li>Recorded and analyzed student performance data in Excel.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards and Achievements */}
      <section className="mb-8"></section>
      {/* Awards and Achievements */}
      <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex justify-between">
          <span>[AWARDS]</span>
          <span>[2]</span>
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">DECA Provincial Winner</h3>
          <p className="text-gray-500 dark:text-gray-400">April 2023</p>
          <p>Placed 1st in DECA’s PMFL Event, playing a key role in developing Undetbify, a digital financial literacy platform with over 200 users.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">FBLA Top 10 Finalist</h3>
          <p className="text-gray-500 dark:text-gray-400">May 2024</p>
          <p>Placed in the top 10 in FBLA’s Coding and Programming event at the Canadian National Leadership Conference.</p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex justify-between">
          <span>[EDUCATION]</span>
          <span>[3]</span>
        </h2>
        <div className="flex items-center space-x-4">
          <label htmlFor="icon-upload4" className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer">
            <img src={universityOfWaterlooImage.src} alt="University of Waterloo" className="w-16 h-16 object-cover rounded-full" />
          </label>
          <div>
            <h3 className="text-lg font-semibold">University of Waterloo</h3>
            <p className="text-gray-500 dark:text-gray-400">Sep 2024 - May 2029</p>
            <p>Candidate for BASc in Computer Engineering, Co-op</p>
            <p>Relevant Coursework: Fundamentals of Programming, Project Studio</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex justify-between">
          <span>[SKILLS]</span>
          <span>[4]</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "TypeScript", "Node.js", "Python", "Go", "Postgres", "Docker", "Kubernetes", "Java", "C++"].map(skill => (
            <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-sm">
              {skill}
            </span>
          ))}
          <IconCloudDemo />
        </div>
      </section>
    </div>
  );
};

export default Resume;

