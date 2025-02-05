"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer className={`w-full py-4 ${darkMode ? "bg-black text-white" : "bg-white text-black"} flex flex-col items-center`}>
      <div className="flex space-x-4 mb-4">
        <a href="https://github.com/krishpraj" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-gray-500" />
        </a>
        <a href="https://www.linkedin.com/in/krish-prajapati6" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-gray-500" />
        </a>
        <a href="mailto:krishpraj6@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl hover:text-gray-500" />
        </a>
      </div>
      <div className="text-center">
        <p className="text-sm"> [ 2025 KRISH PRAJAPATI ] </p>
      </div>
    </footer>
  );
}
