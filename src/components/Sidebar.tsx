import React, { lazy } from "react";
import { IconStars, IconSticker2, IconAddressBook } from "@tabler/icons-react";

const Welcome = lazy(() => import("./Welcome"));
const Social = lazy(() => import("./Social"));

interface Props {
  showMenu: boolean;
}

const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className="min-h-screen gap-2 bg-base-100 text-base-content p-4 overflow-visible">
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

        <Social />
      </div>
    </div>
  );
};

export default Sidebar;
