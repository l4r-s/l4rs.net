import React, { useEffect, useState } from "react";
import { IconMenu2, IconMessage } from "@tabler/icons-react";
import { FaGithub } from "react-icons/fa6";

interface Props {
  theme?: string;
}

const Header: React.FC<Props> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsScrolled(scrollPosition >= (windowHeight - 40));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 m-3 w-full z-10 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="tooltip tooltip-bottom" data-tip="Linki Linki">
            <label
              htmlFor="drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <IconMenu2 />
            </label>
          </div>
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

          <ul className="menu min-h-full w-80 gap-2 bg-base-100 p-4 text-base-content">
            <li className="font-bold text-center text-xl">l4rs.net</li>

            <li className="font-medium">
              <a href="#">Blog posts</a>
            </li>
            <li className="font-medium">
              <a href="#features">Contact</a>
            </li>
            <li className="font-medium mt-20">
              <a href="https://github.com/l4r-s" target="_blank">
                <FaGithub color="black" size={20} />
                <span>l4r-s</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
