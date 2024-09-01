"use client";

import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function ConfettiComponent() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      });
    };

    // Only set dimensions on client side
    if (typeof window !== "undefined") {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      // Detect if the browser is Safari
      const userAgent = window.navigator.userAgent;
      const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);
      setIsSafari(isSafariBrowser);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateDimensions);
      }
    };
  }, []);

  return (
    <div className="z-1">
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      gravity={isSafari ? 0.1 : 0.02}
    />
    </div>
  );
}
