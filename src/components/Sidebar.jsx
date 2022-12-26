import React, { useState } from "react";
import { sidebarMenuItem } from "../mockData";
import logo from "../images/logo-icon.svg";
import avatar from "../images/user-avatar.svg";
import logout from "../images/logout-icon.svg";
import isMobileToggle from "../images/menu-button.svg";
import searchIcon from "../images/search-icon.svg";
import bgImg from "../images/bg-img.svg";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className=" flex justify-between items-center bg-white h-[4rem] border-b border-gray-200 shadow md:hidden">
        <div className="flex px-3 gap-2 items-center ">
          <img src={logo} className=" object-cover" alt="untitled logo" />
          <p className="text-[#101828] font-semibold text-xl">Untitled UI</p>
        </div>
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={isMobileToggle}
          alt="open menu"
        />
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block  my-[1.875rem]  min-h-120%`}
      >
        <div className="hidden md:flex mx-4 px-3 gap-2 items-center ">
          <img src={logo} className=" object-cover" alt="untitled logo" />
          <p className="text-[#101828] font-semibold text-xl">Untitled UI</p>
        </div>
        <div className="mx-4 my-6 px-3 h-10 relative">
          <img
            src={searchIcon}
            className="absolute top-[.78rem] left-[1.3rem]"
            alt=""
          />
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 rounded-lg py-[10px] px-[.875rem] pl-8 outline-none shadow"
          />
        </div>
        {sidebarMenuItem.map((item) => (
          <div
            key={item.id}
            className={`flex space-x-4 my-1 cursor-pointer gap-6 mx-4 px-3 w-[15.4375rem] h-10 bg-[#ffffff] rounded-md items-center hover:bg-[#F9FAFB]  ${
              item.active && "bg-[#F9FAFB]"
            }`}
          >
            <div className="flex gap-3">
              <img src={item.icon} className=" object-cover" alt={item.title} />
              <p className="text-[1rem] text-gray-900 font-medium leading-6 ">
                {" "}
                {item.title}
              </p>
            </div>
            {item.notification && (
              <span className=" bg-[#F2F4F7] text-center w-[2.25rem] h-[1.5rem] rounded-2xl">
                {item.notification}
              </span>
            )}
          </div>
        ))}
        <div className="bg-gray-50 my-4 mx-4 px-3 rounded-sm w-[15.4375rem] py-5">
          <p className="text-gray-900 font-medium">New features available!</p>
          <p className="text-gray-500">
            Check out the new dashboard view. Pages now load faster.{" "}
          </p>
          <div className="my-3 ">
            <img
              src={bgImg}
              alt=""
              className="rounded-sm cursor-pointer object-cover"
            />
          </div>
          <div className=" flex gap-2">
            <p className="text-gray-500 font-medium">Dismiss</p>
            <p className="text-primary-700 cursor-pointer hover:text-primary-500 font-medium">
              What’s new?
            </p>
          </div>
        </div>
        <div className="divider" />
        <div className="flex justify-between mx-4 px-3 my-4 items-start w-[247px]">
          <div className="flex gap-3">
            <img
              src={avatar}
              className=" w-10 h-10 rounded-[50%]"
              alt="olive"
            />
            <div>
              <p className="text-gray-900 font-medium">Olivia Rhye</p>
              <span>olivia@untitledui.com</span>
            </div>
          </div>
          <img src={logout} alt="log out" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
