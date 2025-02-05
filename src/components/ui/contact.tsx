import React, { useState, useEffect } from "react";

const texts = [
  "[1] Connect with me on LinkedIn",
  "[2] Send me an email",
  "[3] Let's collaborate",
  "[4] Check out my GitHub"
];

const GetInTouch = ({ darkMode }: { darkMode: boolean }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentText((prev) => prev + texts[textIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 100);

    if (charIndex === texts[textIndex].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCharIndex(0);
        setCurrentText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <section className="flex flex-col items-center justify-center text-center py-10 px-5">
      <div className={`max-w-4xl w-full p-4 bg-gray-100 ${darkMode ? "bg-gray-800" : ""} rounded-lg shadow-lg`}>
        <p className={`text-gray-600 text-[20px] font-mono max-w-lg mb-6 ${darkMode ? "text-gray-300" : ""} mx-auto text-center`}>
           Let's keep the conversation going! 
          <a
            href="https://www.linkedin.com/in/krish-prajapati6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mx-1 block text-center"
          >
            {currentText}
          </a>
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md justify-center mx-auto">
          <div className="mb-4">
            <input
              type="email"
              placeholder="¹ Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="² Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Send Message
            {hovered && (
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl">
                &gt;
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
