import React, { useEffect } from "react";

interface Props {
  title?: string;
}

const NotFound: React.FC<Props> = (props) => {
  useEffect(() => {
    document.title = props.title || "404 - Not found";
  }, [props.title]);

  return (
    <div className="hero w-full h-screen bg-base-100 text-base-content text-center">
      <div className="hero-content text-center">
        <div className="max-w-md font-chunkfive text-base-content">
          <p className="py-6">
            <span className="text-black">404 😞</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
