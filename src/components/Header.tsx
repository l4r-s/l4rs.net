import React, { useEffect, useState } from "react";
import { IconMessage } from "@tabler/icons-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsScrolled(scrollPosition >= windowHeight - 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 m-3 w-full z-10 ${
        isScrolled ? "text-gray-600" : "text-white"
      }`}
    >
      <div className="navbar">
        <div className="navbar-start"></div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end mr-4">
            <div className="tooltip tooltip-bottom" data-tip="Say hi!">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <IconMessage className="w-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
