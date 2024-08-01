"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  theme?: string;
}

const Home: React.FC<Props> = (props) => {
  // const [rotateIndex, setRotateIndex] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [bgBlur, setBgBlur] = useState(true);

  const rotateStates = [25, -15, 20, -20, 15, -15, 25, 15, -15];

  const scrollToSectionRef = useRef<HTMLDivElement>(null);
  const scrollToSection = () => {
    scrollToSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let rotateIndex = 0;
    let intervalMs = 2500;
    setBgBlur(true);

    // first rotation
    setRotate(rotateStates[rotateIndex]);
    rotateIndex++;

    const interval = setInterval(() => {
      setRotate(rotateStates[rotateIndex]);
      if (rotateIndex < rotateStates.length) {
        rotateIndex++;
      } else {
        console.log("true");
        rotateIndex = 0;
      }
    }, intervalMs);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="relative hero min-h-screen bg-[url('/bg1.webp')] overflow-hidden bg-cover bg-center backdrop-blur-sm backdrop-filter flex justify-center">
        <div
          className={`absolute inset-0 backdrop-filter ${
            bgBlur ? "backdrop-blur-lg" : ""
          }`}
        ></div>
        <motion.div
          animate={{ rotate: rotate }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-white border-2 flex items-center justify-center w-96 h-96 md:w-120 md:h-120 lg:w-150 lg:h-150"
        >
          <div
            className={`bg-[url('/bg1.webp')] bg-center bg-cover w-full h-full flex items-center justify-center`}
          >
            <div className="relative">
              <h1
                className="text-white text-6xl md:text-7xl lg:text-9xl cursor-pointer"
                onClick={scrollToSection}
              >
                <div className="text-white font-bold text-center flex flex-col items-center">
                  <div>
                    <span className="underline">
                      Hi!
                      <br />
                    </span>
                    👋
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="" ref={scrollToSectionRef}></div>
    </div>
  );
};

export default Home;
