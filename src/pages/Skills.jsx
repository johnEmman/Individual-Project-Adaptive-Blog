import React from "react";
import TypingAnimation from "../components/TypingAnimation";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoSass, IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiJest, SiKalilinux } from "react-icons/si";
import { FaNetworkWired, FaReact, FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

import { BsGit } from "react-icons/bs";

export default function Skills() {
  return (
    <div>
      <div className=" py-10 md:text-4xl text-2xl animate__animated animate__backInRight  font-bold text-[#ffffff] font-roboto">
        My skills
      </div>
      <div className="text-[#ffffff] text-2xl pt-[2rem] sm:px-[10%] animate__animated animate__backInDown ">
        These are the <span className="text-green-300">skills</span> that I have{" "}
        <span className="text-red-400">enhanced</span> through my{" "}
        <span className="text-blue-500">education</span>,{" "}
        <span className="text-yellow-300">boot camp experience</span>, and
        <span className="text-violet-500"> self-study</span>:
      </div>

      <div className="flex  items-center md:justify-center ">
        <div className="flex flex-col md:flex-row md:gap-[5rem] gap-3  py-3 md:py-[3rem]">
          <div className="animate__animated animate__backInRight">
            <div className="text-green-500 sm:text-4xl font-bold  font-roboto ">
              Web Development
            </div>
            <div>
              <ul className=" pl-8 pt-4">
                <li className="flex items-center gap-3 lg:text-2xl text-violet-400">
                  <AiFillHtml5 />
                  Html
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-yellow-300">
                  <IoLogoCss3 />
                  Css
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-[#ffffff]">
                  <IoLogoSass />
                  Sass
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-orange-500">
                  <SiTailwindcss />
                  Tailwind
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-blue-500">
                  <IoLogoJavascript />
                  JavaScript
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-red-500">
                  <FaReact />
                  React.Js
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-gray-400">
                  <SiJest />
                  Jest<span>(Unit-Testing)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="animate__animated animate__backInLeft">
            <div className="text-green-500 sm:text-4xl font-bold  font-roboto ">
              Others
            </div>
            <div>
              <ul className="pl-8 pt-4">
                <li className="flex items-center gap-3 lg:text-2xl text-[#ffffff]">
                  <BsGit />
                  Git
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-red-300">
                  <AiFillGithub />
                  GitHub
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-violet-400">
                  <SiKalilinux />
                  Kali-Linux
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-blue-300">
                  <FaNetworkWired />
                  Networking<span>(Light)</span>
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-green-400">
                  <TbBrandCpp />
                  C++<span>(Light)</span>
                </li>
                <li className="flex items-center gap-3 lg:text-2xl text-yellow-400">
                  <FaJava />
                  Java<span>(Light)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
