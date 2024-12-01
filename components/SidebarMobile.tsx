"use client";
import React from "react";
import { IconCategoryFilled } from "@tabler/icons-react";
import Sidebar from "./Sidebar";

const SidebarMobile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-start"></div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end mr-4">
            <div className="drawer">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
                checked={isDrawerOpen}
                onChange={toggleDrawer}
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button mt-2">
                  <div className="tooltip tooltip-left" data-tip="Menu">
                    <div className="btn btn-ghost btn-circle avatar">
                      <IconCategoryFilled className="text-primary" />
                    </div>
                  </div>
                </label>
              </div>
              <div className={`drawer-side z-10 min-h-full ${isDrawerOpen ? 'block' : 'hidden'}`}>
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                  onClick={toggleDrawer}
                ></label>
                <div className="max-w-96 min-h-full">
                  <Sidebar showMenu={true} toggleDrawer={toggleDrawer} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
