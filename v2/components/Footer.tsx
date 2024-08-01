import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto p-4 bg-slate-100 md:rounded-r-md">
      <aside className="grid-flow-col items-center">
        <p className="text-sm font-light italic">
          <b className="text-primary">#</b> Copyright ©{" "}
          {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
