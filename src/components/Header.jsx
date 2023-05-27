import React from "react";
import { Outlet, Link } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import { IoLogoNpm } from "react-icons/io";
import Footer from "./Footer";

export default function Header() {
  return (
    <>
      <header className="px-7 z-20 fixed w-screen py-3 sm:px-[3rem]  md:px-[6rem] bg-[#192140] flex items-center justify-between">
        <Link to={"/"} className="text-[#DCF10D] font-bold  text-4xl">
          LOGO
        </Link>
        <RootLayouts />
      </header>
      <main className="h-fit">
        <Outlet />
      </main>
    </>
  );
}
