import React, { lazy, useEffect, useState } from "react";
import {
  IconMenu2,
  IconMessage,
} from "@tabler/icons-react";

const Sidebar = lazy(() => import("./Sidebar"));

interface Props {
  theme?: string;
}

const Header: React.FC<Props> = () => {
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
        <div className="navbar-start">
          <label
            htmlFor="drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <IconMenu2 />
          </label>
        </div>
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

      <div className="drawer z-10">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
