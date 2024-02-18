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

          <div className="min-h-screen w-80 gap-2 bg-base-100 text-base-content p-4">
            <div className="pt-12">
              <div className="font-bold text-center text-xl self-center">
                <a href="/">
                  <Avatar />
                </a>
              </div>
              <div className="text-center mt-3 prose prose-sm">
                <p>
                  <b className="text-primary prose-2xl">Hi!</b>, my name is
                  Lars.
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
            </div>
            <div className="min-h-10"></div>

            <div className="flex flex-col">
              <ul className="menu menu-lg">
                <li className="font-medium">
                  <a href="#">
                    <IconStars />
                    <span className="underline decoration-primary">
                      Projects
                    </span>
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
                    <span className="underline decoration-primary">
                      Contact
                    </span>
                  </a>
                </li>
              </ul>

              <div className="flex justify-center items-center mt-16">
                <div className="divider divide-gray-400 w-2/6"></div>
              </div>

              <div className="flex justify-center items-center">
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
