import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          {/* Mouse Shape */}
          <div className="w-10 h-16 border-2 border-gray-400 rounded-full flex justify-center items-start relative">
            {/* Scrolling Dot */}
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full absolute top-2"
              animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </div>

          {/* Scroll Text */}
          <p className="text-gray-400 text-sm mt-2 font-semibold">Scroll</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
