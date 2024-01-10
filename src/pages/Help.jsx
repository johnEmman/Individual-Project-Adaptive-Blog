import React from "react";
import TypingAnimation from "../components/TypingAnimation";

export default function Help() {
  const text = "ere are the commands:";
  return (
    <div className="text-[#ffffff] font-roboto">
      <div className="animate__animated animate__bounce">GET STARTED</div>
      <div>
        <div className="text-4xl py-[1rem] animate__animated animate__rubberBand ">
          Quick Start
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-2xl animate__animated  animate__bounceInLeft">
            Welcome to my portfolio's documentation!
          </div>
          <div className="pb-[2rem] animate__animated animate__bounceInRight">
            This portfolio is not like other websites with buttons, what it has
            is this terminal and this is what we will use to navigate this
            website, to do that you have to enter some commands.
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="text-2xl animate__animated animate__bounceInLeft ">
            Here are the commands:
          </div>
          <ul className="pb-[2rem] flex flex-col gap-3 animate__animated animate__bounceInRight ">
            <li>
              -type "<span className="text-green-500">Docs</span>" and press
              "Enter" if you forget the commands
            </li>
            <li>
              -type "<span className="text-green-500">Home</span>" and press
              "Enter" if you want to go to the home page
            </li>
            <li>
              -type "<span className="text-green-500">About</span>" and press
              "Enter" if you want to go to the about page
            </li>
            <li>
              -type "<span className="text-green-500">Skills</span>" and press
              "Enter" if you want to go to the skills page
            </li>
            <li>
              -type "<span className="text-green-500">SocMed</span>" and press
              "Enter" if you want to go to the social media page
            </li>
            <li>
              -type "<span className="text-green-500">Cd ..</span>" and press
              "Enter" if you want to go to back
            </li>
            <li>
              -type "<span className="text-green-500">Clear</span>" and press
              "Enter" if you want to clear the terminal
            </li>
            <li>
              -type "<span className="text-green-500">Exit</span>" and press
              "Enter" if you want to leave
            </li>
          </ul>
        </div>
      </div>
      <div className="text-right">
        <span>Thank you for visiting.</span>
        <br />
        <span>
          Here's my email:{" "}
          <span className="text-orange-400">ty.emmanuelle@gmail.com</span>
        </span>
      </div>
    </div>
  );
}
