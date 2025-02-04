"use client";

import { useEffect, useState } from "react";
import { NumberTicker } from "@/components/ui/number-ticker";  // Assuming you have this component

export default function Loading() {
  const [value, setValue] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 1;
        }
        clearInterval(interval);
        return 100;
      });
    }, 50); // Simulated progress bar update interval

    return () => clearInterval(interval);
  }, []);

  // Display loading page until value reaches 100
  if (value < 100) {
    return (
      <div className="relative h-screen cursor-crosshair overflow-hidden">
        {/* Loading Bar at the top */}
        <div className="absolute top-0 left-0 w-full h-2">
          <div
            className="h-full bg-white"
            style={{ width: `${value}%` }}
          />
        </div>

        {/* Background transition from white to black */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, white ${value}%, black ${value}%)` }}></div>

        {/* Number Ticker at the bottom-right */}
        <div className="absolute right-0 bottom-0 mr-8 mb-8"> 
          <NumberTicker
            delay={0}
            value={100}
            className="whitespace-pre-wrap text-[400px] font-mono font-medium tracking-tighter text-white"
          />
        </div>
      </div>
    );
  }

  // Once loading is complete, render the children
  return null;  // Will allow the actual page content (children) to be displayed
}
