import React from "react";

const GetInTouch = () => {
  return (
    <section className="flex flex-col items-center text-center py-10 px-5">
    
      <h2 className="text-[100px]  font-bold mb-3">Get in Touch</h2>
      <p className="text-gray-600 text-[20px] font-mono max-w-lg">
        Let’s keep the conversation going!
        <a
          href="https://www.linkedin.com/in/krish-prajapati6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mx-1"
        >
        Connect with me on LinkedIn
        </a>
        and I'll respond whenever I can. 
      </p>
    </section>
  );
};

export default GetInTouch;
