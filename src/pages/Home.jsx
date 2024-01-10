import React from "react";
import "animate.css";

import TypingAnimation from "../components/TypingAnimation";

export default function Home() {
  return (
    <div className="flex relative items-center justify-center font-roboto h-[70vh]">
      <div className="absolute top-3  left-4 font-dancing text-gray-600">
        E<TypingAnimation animate={"mmanuel"} duration={300} />
      </div>
      <div className="absolute bottom-4 right-4 font-dancing text-gray-600">
        June 03, 2023
      </div>
      <div className="text-[#ffffff] pt-3  sm:text-xl md:text-5xl p-1">
        <div className="md:text-7xl animate__animated animate__bounceInDown">
          <span className="text-yellow-400">Hi</span>, I am{" "}
          <span className="text-green-500">John</span>
        </div>
        <div className="animate__animated animate__backInLeft">
          An <span className="text-orange-500">aspiring</span>{" "}
          <span className="text-blue-300">Web Developer</span>,
        </div>
        <div className="animate__animated animate__backInRight">
          <span className="text-pink-400">I</span>{" "}
          <span className="text-violet-500">can</span> be a{" "}
          <span className="text-yellow-400">great</span>{" "}
          <span className="text-green-500">asset</span> to your{" "}
          <span className="text-red-400">team</span>.
        </div>
      </div>
    </div>
  );
}
