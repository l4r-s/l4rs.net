import React, { lazy } from "react";
import {
  IconStars,
  IconSticker2,
  IconAddressBook,
  IconBrandMatrix,
} from "@tabler/icons-react";
import { FaGithub, FaTwitter } from "react-icons/fa6";

const Welcome = lazy(() => import("./Welcome"));

interface Props {
  showMenu: boolean;
}

const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className="min-h-screen gap-2 bg-base-100 text-base-content p-4">
      <Welcome />

      <div className="flex flex-col mt-16">
        {props.showMenu && (
          <ul className="menu menu-lg">
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
          </ul>
        )}

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
  );
};

export default Sidebar;
