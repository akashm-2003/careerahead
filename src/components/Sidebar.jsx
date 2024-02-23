import React, { useState } from "react";
import clsx from "clsx";
import { sidebarItems } from "../data/data";
import MenuItem from "./MenuItem";
import logo from "../assests/logo.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import { auth } from "../auth/firebase";
import Skeleton from "react-loading-skeleton";
const Sidebar = ({ onSetShowSidebar, showSidebar, selected, setSelected }) => {
  const user = auth.currentUser;
  // console.log(user?.photoURL);
  const image = user?.photoURL;
  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10",
        showSidebar ? "flex sidebar-blur-mobile" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <button type="button" className="w-10 h-10">
            {image ? (
              <img
                src={image}
                alt="icon"
                className="w-full h-full"
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <Skeleton circle width="35px" height="35px" />
            )}
          </button>
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl">
            Masters Ways
          </div>
          <div className="flex-grow sm:hidden xl:block" />

          <button
            onClick={() => {
              onSetShowSidebar(false);
            }}
            type="button"
            className="block sm:hidden"
          >
            <AiOutlineCloseCircle className="w-full h-full" size="25px" />
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {sidebarItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          {/* <img src={logo} alt="profile" className="w-10 h-10" /> */}
          {image ? (
            <img
              src={image}
              alt={logo}
              className="w-10 h-10"
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <Skeleton circle width="35px" height="35px" />
          )}
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            {user?.displayName ? user.displayName : <Skeleton width="100px" />}
          </div>
          <div className="flex-grow block sm:hidden xl:block xl:ml-4">
            <BiInfoCircle size="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
