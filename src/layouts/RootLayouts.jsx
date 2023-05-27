import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
export default function HeaderLayouts() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const isActiveLink = (path) => location.pathname.includes(path);

  return (
    <div>
      <nav
        className={`flex absolute bg-[#192140] border-2 sm:border-none flex-col right-5 rounded-md sm:w-auto gap-3 transition-all duration-1000 ease-in-out sm:z-auto sm:p-0 sm:static sm:flex-row sm:items-center sm:justify-center sm:gap-[1rem] lg:gap-[3rem] ${
          toggle ? "top-4" : "top-[-490px]"
        }`}
      >
        <div className="flex justify-end absolute top-2 right-2  rounded-full">
          <AiOutlineClose
            className="text-white sm:hidden"
            onClick={handleToggle}
          />
        </div>
        <div className=" flex flex-col sm:flex-row gap-7 ">
          <div className="navSec flex flex-col justify-center items-center sm:flex-row gap-4 lg:gap-12 relative ml-6 mr-6 mt-3 sm:m-0  ">
            <NavLink
              onClick={handleToggle}
              className={`test ${isActiveLink("/blog") ? "active" : ""}`}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink onClick={handleToggle} className={`test `} to="/about-us">
              About Us
            </NavLink>
            <NavLink onClick={handleToggle} className={`test `} to="/reviews">
              Reviews
            </NavLink>
          </div>
          <div className="flex flex-col  sm:flex-row gap-1 ml-6 mr-6 mb-6 sm:m-0">
            <NavLink
              onClick={handleToggle}
              className="text-[#9D9DB5] p-3  w-[86px] h-[47px] flex items-center justify-center "
              to="/sign-up"
            >
              Sign up
            </NavLink>
            <NavLink
              onClick={handleToggle}
              className="rounded-3xl p-3 w-[86px] h-[47px] flex items-center justify-center  border-[#0266FF] text-[#0266FF] border"
              to="/log-in"
            >
              Log in
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="sm:hidden">
        <AiOutlineMenu onClick={handleToggle} className="text-white" />
      </nav>
    </div>
  );
}
