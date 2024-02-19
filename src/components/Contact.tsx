import React from "react";
import { IconMail, IconBrandMatrix } from "@tabler/icons-react";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-4xl uppercase text-center">Say Hi! 👋</h1>
        <div className="divider divide-gray-400 mb-8"></div>

        <div className="prose text-center">
          <p className="flex mt-16">
            <IconMail size={20} className="mr-2 text-primary" />{" "}
            <a href="mailto:contact@hilars.dev" target="_blank">
              contact@hilars.dev
            </a>
          </p>
          <p className="flex">
            <IconBrandMatrix size={20} className="mr-2 text-primary" />{" "}
            <a href="https://matrix.to/#/@me:l4rs.net" target="_blank">
              @me:l4rs.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
