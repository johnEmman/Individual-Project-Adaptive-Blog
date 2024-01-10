import React from "react";
import facebook from "./../assets/facebook.jpg";
import github from "./../assets/github.jpg";
import linkedin from "./../assets/linkedin.jpg";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocMed() {
  return (
    <div className="text-[#ffffff] font-roboto">
      <div className="text-4xl py-5 animate__animated animate__bounceInDown">
        Here are my social media accounts
      </div>
      <div className="">
        <div className="sm:text-2xl animate__animated animate__bounceInLeft ">
          If you want to visit my social media accounts you also have to enter
          some commands, to do that you have to type
          <div>
            example: "<span className="border-b-[1px]">goto facebook</span>"
          </div>
        </div>
        <ul className="flex  flex-col gap-2 py-5 animate__animated animate__bounceInUp">
          <li className="">
            <FaFacebook className="inline-block mr-2 text-2xl" />
            type "<span className="text-green-500">goto</span>{" "}
            <span className="text-yellow-400">facebook</span>" and hit "
            <span>Enter</span>" if you want to visit my Facebook profile
          </li>
          <li className="">
            <FaLinkedin className="inline-block mr-2 text-2xl" />
            type "<span className="text-green-500">goto</span>{" "}
            <span className="text-yellow-400">linkedin</span>" and hit "
            <span>Enter</span>" if you want to visit my LinkedIn profile
          </li>
          <li className="">
            <FaGithub className="inline-block mr-2 text-2xl" />
            type "<span className="text-green-500">goto</span>{" "}
            <span className="text-yellow-400">github</span>" and hit "
            <span>Enter</span>" if you want to visit my Github profile
          </li>
        </ul>
      </div>
    </div>
  );
}
