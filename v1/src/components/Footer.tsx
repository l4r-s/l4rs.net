import React from "react";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <>
    <footer className="hidden md:footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © {currentYear} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col md:gap-4 md:place-self-center md:justify-self-end">
        Proudly made with ☕ and some 🍺
      </nav>
    </footer>
    <footer className="md:hidden bg-neutral text-neutral-content p-4 text-sm">
          <p>Copyright © {currentYear} - All right reserved</p>
          <p className="pt-2">Proudly made with ☕ and some 🍺</p>
      </footer>
      </>
  );
};

export default Footer;
