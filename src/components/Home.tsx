import React, { useEffect, useRef } from "react";
import { IconArrowBigDownLines } from "@tabler/icons-react";

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

  return (
    <div>
      <div className="relative hero min-h-screen bg-[url('/bg.webp')]">
        <h1 className="text-white text-9xl">
          <span className="underline mr-2">Hi!</span>👋
        </h1>
        <div
          className="absolute bottom-10 text-white animate-pulse cursor-pointer"
          onClick={scrollToSection}
        >
          <IconArrowBigDownLines size={50} />
        </div>
      </div>
      <div className="min-h-screen" ref={scrollToSectionRef}></div>
    </div>
  );
};

export default Home;
