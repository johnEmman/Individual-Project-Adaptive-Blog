import React from "react";
import { BsTerminal } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="h-screen bg-[rgb(29,29,27)] overflow-hidden ">
      <nav className=" flex items-end justify-end pr-[1.5rem] pt-[1rem]">
        <Link to={"terminal/docs"}>
          <BsTerminal className="text-2xl hover:scale-110 text-[#ffffff]" />
        </Link>
      </nav>
      <div className="flex items-center justify-center h-[92%] ">
        <Outlet />
      </div>
    </div>
  );
}
