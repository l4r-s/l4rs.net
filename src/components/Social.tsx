import React from "react";
import { IconBrandMatrix } from "@tabler/icons-react";
import { FaGithub, FaTwitter } from "react-icons/fa6";

const Social: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Social;
