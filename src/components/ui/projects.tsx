import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div className="mt-20 p-10">
      {/* Projects Section */}
      <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
   
      </motion.div>

      <div className="container mx-auto pt-20 mt-100px">
        <ul id="cards" className="list-none p-0">
          <li id="card1" className="card mb-8 sticky top-32 h-[87vh] flex">
            <div className="card-body bg-gray-100 rounded-2xl shadow-lg p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl text-gray-900 dark:text-white mb-3">STOCK ANALYZER</h2>
                <p className="text-xl text-gray-500 mb-3">JANUARY 2025</p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  ∠ Developed RESTful APIs using Flask and Express for real-time stock data retrieval and price prediction<br />
                  ∠ Integrated News API and Scikit-Learn regression algorithms for data analysis, enhancing investment decision-making<br />
                  ∠ Built a responsive front-end with React, Plotly, and Tailwind CSS for displaying stock trends and forecasts<br />
                  ∠ Implemented secure user authentication with Axios and SQL for data storage and login
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="badge">Python</span>
                  <span className="badge">Flask</span>
                  <span className="badge">Pandas</span>
                  <span className="badge">Scikit-Learn</span>
                  <span className="badge">React</span>
                  <span className="badge">Tailwind CSS</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">NodeJS</span>
                  <span className="badge">Express</span>
                  <span className="badge">NewsAPI</span>
                  <span className="badge">Alpha Vantage API</span>
                  <span className="badge">JavaScript</span>
                  <span className="badge">HTML</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/your-username/stock-analyzer" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <div className="w-1/2 p-6">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <img src="/path/to/stock-analyzer-image.jpg" alt="Stock Analyzer" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li id="card2" className="card mb-8 sticky top-40 h-[87vh] flex">
            <div className="card-body bg-[#E5A36F] rounded-2xl shadow-lg p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl text-white mb-3">CLUB COORDINATION AND INTERACTION PORTAL</h2>
                <p className="text-xl text-gray-200 mb-3">MAY 2024</p>
                <p className="text-lg text-gray-100 mb-4">
                  ∠ Streamlined student-teacher interactions for school clubs by collaborating to create a Node.js database system<br />
                  ∠ Enhanced usability with dynamic content and filtering mechanisms using JavaScript and CSS<br />
                  ∠ Secured data handling with user authentication, access control, and CSS-based feedback
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="badge">Node.js</span>
                  <span className="badge">Express.js</span>
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                  <span className="badge">JavaScript</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/your-username/club-portal" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <div className="w-1/2 p-6">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <img src="/path/to/club-portal-image.jpg" alt="Club Coordination and Interaction Portal" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li id="card3" className="card mb-8 sticky top-48 h-[87vh] flex">
            <div className="card-body bg-[#9CADCE] rounded-2xl shadow-lg p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl text-white mb-3">AUTONOMOUS PLANT MONITORING SYSTEM</h2>
                <p className="text-xl text-gray-200 mb-3">NOVEMBER 2024</p>
                <p className="text-lg text-gray-100 mb-4">
                  ∠ Developed a multi-microcontroller system using STM32 to monitor plant health, integrating UART and I2C communication protocols to connect various sensors, alarms, and LCD modules<br />
                  ∠ Implemented real-time tracking of moisture and light with 95% accuracy, and an alarm system that notifies users of critical conditions, using PuTTY for troubleshooting serial communication and monitoring data flow
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="badge">C++</span>
                  <span className="badge">STM32</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/your-username/plant-monitoring" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <div className="w-1/2 p-6">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <img src="/path/to/plant-monitoring-image.jpg" alt="Autonomous Plant Monitoring System" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li id="card4" className="card mb-8 sticky top-56 h-[87vh] flex">
            <div className="card-body bg-[#D4AFB9] rounded-2xl shadow-lg p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl text-white mb-3">MATRIX OPERATIONS CALCULATOR</h2>
                <p className="text-xl text-gray-200 mb-3">DECEMBER 2025</p>
                <p className="text-lg text-gray-100 mb-4">
                  ∠ Developed a web application for matrix operations using 2D arrays in JavaScript, providing an intuitive interface for academic use in Linear Algebra.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="badge">JavaScript</span>
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/your-username/matrix-calculator" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <div className="w-1/2 p-6">
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <img src="/path/to/matrix-calculator-image.jpg" alt="Matrix Operations Calculator" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;