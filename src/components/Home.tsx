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
    document.title = props.title || "l4rs.net";
  }, [props.title]);

  const [isBounce, setIsBounce] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsBounce(false);
    }, 1510);

    return () => clearTimeout(timeoutId);
  }, []);

  const bgUrl = "/bg1.webp";

  return (
    <div>
      <div
        className={`relative hero min-h-screen bg-[url('${bgUrl}')] overflow-hidden bg-cover bg-center backdrop-blur-sm backdrop-filter ${
          isBounce ? "animate-bounce" : ""
        }`}
      >
        <div className="absolute inset-0 backdrop-filter backdrop-blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-white border-2 flex items-center justify-center w-96 h-96 md:w-120 md:h-120 lg:w-150 lg:h-150">
          <div
            className={`bg-[url('${bgUrl}')] bg-center bg-cover w-full h-full flex items-center justify-center`}
          >
            <h1 className="text-white text-6xl md:text-7xl lg:text-9xl">
              <p className="underline pb-5">Hi!</p>
            </h1>
          </div>
        </div>

        <div
          className="absolute bottom-20 lg:bottom-10 text-white animate-pulse cursor-pointer"
          onClick={scrollToSection}
        >
          <IconArrowDown size={120} className="hidden lg:flex" />
          <IconArrowDown
            size={96}
            className="hidden md:flex lg:hidden"
          />
          <IconArrowDown
            size={70}
            className="flex md:hidden lg:hidden"
          />
        </div>
      </div>
      <div className="" ref={scrollToSectionRef}></div>

    </div>
  );
};

export default Home;
