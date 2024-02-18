import React, { lazy, useEffect, useState } from "react";
import {
  IconMenu2,
  IconMessage,
  IconStars,
  IconSticker2,
  IconAddressBook,
  IconBrandMatrix,
} from "@tabler/icons-react";
import { FaGithub, FaTwitter } from "react-icons/fa6";

const Avatar = lazy(() => import("./Avatar"));

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

          <ul className="menu min-h-full w-80 gap-2 bg-base-100 p-4 text-base-content">
            <li className="font-bold text-center text-xl flex items-center">
              <a href="/">
                <Avatar />
              </a>
            </li>
            <div className="text-center mt-3 prose prose-sm">
              <p>
                <b className="text-primary prose-2xl">Hi!</b>, my name is Lars.
              </p>
              <p>
                I am a Software and Systems Engineer located in Switzerland.
              </p>
              <p className="mt-3 font-thin italic">
                <b className="text-primary">#</b>opensource{" "}
                <b className="text-primary">#</b>observability{" "}
                <b className="text-primary">#</b>ansible{" "}
                <b className="text-primary">#</b>python{" "}
                <b className="text-primary">#</b>prometheus{" "}
                <b className="text-primary">#</b>elk
              </p>
            </div>
            <div className="flex-grow"></div>

            <li className="font-medium">
              <a href="#">
                <IconStars />
                <span className="underline decoration-primary">Projects</span>
              </a>
            </li>
            <li className="font-medium">
              <a href="#">
                <IconSticker2 />
                <span className="underline decoration-primary">Posts</span>
              </a>
            </li>
            <li className="font-medium">
              <a href="#features">
                <IconAddressBook />
                <span className="underline decoration-primary">Contact</span>
              </a>
            </li>
            <div className="divider divide-gray-400"></div>

            <div className="flex self-center -mt-4">
              <div className="tooltip tooltip-top" data-tip="Github">
                <div className="btn mx-2">
                  <a href="https://github.com/l4r-s" target="_blank">
                    <FaGithub color="black" size={25} />
                  </a>
                </div>
              </div>

              <div className="tooltip tooltip-top" data-tip="Twitter / X">
                <div className="btn mx-2">
                  <a href="https://twitter.com/_l4rs" target="_blank">
                    <FaTwitter color="black" size={25} />
                  </a>
                </div>
              </div>

              <div className="tooltip tooltip-top" data-tip="Matrix chat">
                <div className="btn mx-2">
                  <a href="https://matrix.to/#/@me:l4rs.net" target="_blank">
                    <IconBrandMatrix color="black" size={25} />
                  </a>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
