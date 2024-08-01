"use client"

import React, { lazy, useEffect, useState } from "react";
import { IconMessage, IconSquareRoundedX } from "@tabler/icons-react";
const Contact = lazy(() => import("./Contact"));

const Header: React.FC = () => {
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

  const openModal = () => {
    const modal = document.getElementById(
      "modal_contact"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById(
      "modal_contact"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 m-3 w-full z-10 ${
          isScrolled ? "text-gray-600" : "text-white"
        }`}
      >
        <div className="navbar">
          <div className="navbar-start"></div>
          <div className="navbar-center"></div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end mr-4">
              <div className="tooltip tooltip-bottom" data-tip="Say hi!">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  onClick={openModal}
                  aria-label="Say hi!"
                >
                  <IconMessage className="w-10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog id="modal_contact" className="modal">
        <div className="modal-box">
          <div className="modal-action -mt-2 -mr-2">
            <form method="dialog">
              <div className="btn btn-circle btn-ghost" onClick={closeModal}>
                <IconSquareRoundedX size={20} className="text-error" />
              </div>
            </form>
          </div>

          <Contact />
        </div>
      </dialog>
    </>
  );
};

export default Header;
