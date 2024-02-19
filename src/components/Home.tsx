import React, { useEffect, useRef, useState } from "react";
import { IconArrowDown } from "@tabler/icons-react";

interface Props {
  title?: string;
  theme?: string;
}

const Home: React.FC<Props> = (props) => {
  const scrollToSectionRef = useRef<HTMLDivElement>(null);
  const scrollToSection = () => {
    scrollToSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.title = props.title || "hilars.dev";
  }, [props.title]);

  const [isBounce, setIsBounce] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsBounce(false);
    }, 1510);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div
        className={`relative hero min-h-screen bg-[url('/bg1.webp')] overflow-hidden bg-cover bg-center backdrop-blur-sm backdrop-filter ${
          isBounce ? "animate-bounce" : ""
        }`}
      >
        <div className="absolute inset-0 backdrop-filter backdrop-blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-white border-2 flex items-center justify-center w-96 h-96 md:w-120 md:h-120 lg:w-150 lg:h-150">
          <div
            className={`bg-[url('/bg1.webp')] bg-center bg-cover w-full h-full flex items-center justify-center`}
          >
            <div className="relative">
            <h1 className="text-white text-6xl md:text-7xl lg:text-9xl">
                <span className="pb-5 font-bold text-white underline">
                  Hi!
              </span>
            </h1>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-3 lg:bottom-5 text-white animate-pulse cursor-pointer"
          onClick={scrollToSection}
        >
          <IconArrowDown size={80} className="hidden lg:flex" />
          <IconArrowDown
            size={60}
            className="hidden md:flex lg:hidden"
          />
          <IconArrowDown
            size={50}
            className="flex md:hidden lg:hidden"
          />
        </div>
      </div>
      <div className="" ref={scrollToSectionRef}></div>

    </div>
  );
};

export default Home;
