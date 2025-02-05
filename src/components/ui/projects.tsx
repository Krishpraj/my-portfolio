import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  title: string;
  date: string;
  description: string[];
  technologies: string[];
  link?: string;
}

const webProjects: Project[] = [
  {
    title: "STOCK ANALYZER",
    date: "JANUARY 2025",
    description: [
      "Developed RESTful APIs using Flask and Express for real-time stock data retrieval and price prediction",
      "Integrated News API and Scikit-Learn regression algorithms for data analysis, enhancing investment decision-making",
      "Built a responsive front-end with React, Plotly, and Tailwind CSS for displaying stock trends and forecasts",
      "Implemented secure user authentication with Axios and SQL for data storage and login",
    ],
    technologies: ["Python", "Flask", "Pandas", "Scikit-Learn", "React", "Tailwind CSS", "mySQL", "NodeJS", "Express", "NewsAPI", "Alpha Vantage API", "Javascript", "HTML"],
  },
  {
    title: "CLUB COORDINATION AND INTERACTION PORTAL",
    date: "MAY 2024",
    description: [
      "Streamlined student-teacher interactions for school clubs by collaborating to create a Node.js database system",
      "Enhanced usability with dynamic content and filtering mechanisms using JavaScript and CSS",
      "Secured data handling with user authentication, access control, and CSS-based feedback",
    ],
    technologies: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "PORTFOLIO WEBSITE",
    date: "OCTOBER 2023",
    description: [
      "Designed and developed a personal portfolio website to showcase projects and skills",
      "Implemented dark mode toggle and responsive design for better user experience",
      "Used React, Tailwind CSS, and Framer Motion for smooth animations and transitions",
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion"," Nextjs","JavaScript", "HTML", "CSS"],
    link: "https://github.com/krishpraj/portfolio-website",
  },
];

const mobileProjects = [
  {
    title: "AUTONOMOUS PLANT MONITORING SYSTEM",
    date: "NOVEMBER 2024",
    description: [
      "Developed a multi-microcontroller system using STM32 to monitor plant health, integrating UART and I2C communication protocols to connect various sensors, alarms, and LCD modules",
      "Implemented real-time tracking of moisture and light with 95% accuracy, and an alarm system that notifies users of critical conditions, using PuTTY for troubleshooting serial communication and monitoring data flow",
    ],
    technologies: ["C++", "STM32"],
  },
  {
    title: "MATRIX OPERATIONS CALCULATOR",
    date: "DECEMBER 2025",
    description: [
      "Developed a web application for matrix operations using 2D arrays in JavaScript, providing an intuitive interface for academic use in Linear Algebra.",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/krishpraj/matrix-operations-calculator",
  },
];

const projectColors: { [key: string]: string } = {
  "STOCK ANALYZER": "#61DAFB",
  "CLUB COORDINATION AND INTERACTION PORTAL": "#000000",
  "PORTFOLIO WEBSITE": "#38B2AC",
  "AUTONOMOUS PLANT MONITORING SYSTEM": "#339933",
  "MATRIX OPERATIONS CALCULATOR": "#3178C6",
};

export default function Projects({ darkMode }: { darkMode: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState("web");

  const projects = selectedCategory === "web" ? webProjects : mobileProjects;

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-gray-900"} min-h-screen flex items-center justify-center`}>
      <div className="max-w-4xl w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg min-h-[80vh]">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedCategory("web")}
            className={`px-4 py-2 ${selectedCategory === "web" ? "underline" : ""}`}
          >
            [Web Projects]
          </button>
          <button
            onClick={() => setSelectedCategory("mobile")}
            className={`px-4 py-2 ${selectedCategory === "mobile" ? "underline" : ""}`}
          >
            [Mobile Projects]
          </button>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-4 h-4 mr-2" style={{ backgroundColor: projectColors[project.title] }}></span>
                  [{project.title}]               ↗ 
                </span>
                <span>[{index + 1}]</span>
              </h3>
              <p className="text-sm text-gray-500">{project.date}</p>
              <ul className="list-disc ml-5 mt-2">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-500 text-white rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
    
              {index < projects.length - 1 && <hr className="my-6 border-gray-300 dark:border-gray-700" />}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a href="https://github.com/krishpraj" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-3xl text-gray-500 hover:text-gray-700" />
          </a>
        </div>
      </div>
    </div>
  );
}
