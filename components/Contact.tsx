import React from "react";
import { IconMail } from "@tabler/icons-react";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-4xl uppercase text-center">Say Hi! 👋</h1>
        <div className="divider divide-gray-400 mb-8"></div>

        <div className="prose text-center mb-16">
          <p className="flex mt-16">
            <IconMail size={20} className="mr-2 text-primary" />{" "}
            <a href="mailto:contact@hilars.dev" target="_blank" aria-label="Send an e-mail to Lars">
              contact@hilars.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
