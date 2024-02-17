import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="footer items-center px-4 bg-neutral text-neutral-content h-12">
        <aside className="items-center grid-flow-col"></aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p>Copyright © 2023 - All right reserved</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
