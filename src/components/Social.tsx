import React from "react";
import { IconBrandMatrix, IconMail } from "@tabler/icons-react";
import { FaGithub } from "react-icons/fa6";

const Social: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-16">
        <div className="divider divide-gray-400 w-2/6"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="tooltip tooltip-top" data-tip="Github">
          <div className="btn mx-2">
            <a href="https://github.com/l4r-s" target="_blank" aria-label="Open Lars' Github page">
              <FaGithub color="black" size={25} />
            </a>
          </div>
        </div>

        <div className="tooltip tooltip-top" data-tip="E-Mail">
          <div className="btn mx-2">
            <a href="mailto:contact@hilars.dev" target="_blank" aria-label="Send an e-mail to Lars">
              <IconMail color="black" size={25} />
            </a>
          </div>
        </div>

        <div className="tooltip tooltip-top" data-tip="Matrix chat">
          <div className="btn mx-2">
            <a href="https://matrix.to/#/@me:l4rs.net" target="_blank" aria-label="Chat with lars over matrix">
              <IconBrandMatrix color="black" size={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
