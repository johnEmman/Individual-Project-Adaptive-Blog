import React, { useState, useRef, useMemo } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { MdMinimize } from "react-icons/md";
import { VscChromeMaximize } from "react-icons/vsc";
import { BsTerminal } from "react-icons/bs";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [outputs, setOutputs] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const inputElement = (e) => {
    if (e.key === "Enter") {
      setOutputs((prev) => [...prev, { err: false, value: `${command}` }]);
      setCommand("");

      if (command.trim().toUpperCase() === "CLEAR") {
        setOutputs([]);
        // navigate(`/terminal`);
      } else if (command.trim().toUpperCase() === "CD ..") {
        navigate(`/terminal`);
      } else if (command.trim().toUpperCase() === "GOTO FACEBOOK") {
        window.open("https://web.facebook.com/mathew.marco.125/", "_blank");
      } else if (command.trim().toUpperCase() === "GOTO LINKEDIN") {
        window.open(
          "https://www.linkedin.com/in/john-emmanuel-marco-ba7558274/",
          "_blank"
        );
      } else if (command.trim().toUpperCase() === "GOTO GITHUB") {
        window.open("https://github.com/johnEmman", "_blank");
      } else if (
        command.trim().toUpperCase() === "ABOUT" ||
        command.trim().toUpperCase() === "SKILLS" ||
        command.trim().toUpperCase() === "HOME" ||
        command.trim().toUpperCase() === "SOCMED" ||
        command.trim().toUpperCase() === "DOCS"
      ) {
        setOutputs([]);
        navigate(`${command}`);
      } else if (command.trim().toUpperCase() === "") {
        // navigate(`/terminal`);
      } else if (command.trim().toUpperCase() === "EXIT") {
        navigate(`/`);
      } else {
        // navigate(`/terminal`);
        setOutputs((prev) => [
          ...prev,
          {
            err: true,
            value: "- " + command + " : command not found",
          },
        ]);
      }
    }
  };

  function handleTerminalClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <div className="bg-[rgb(49,49,49)] animate__animated  animate__fadeInTopRight  relative w-[300px] sm:w-[70%] sm:h-[95%]  h-[450px] rounded-lg ">
        <nav className="  flex justify-between border-b-2 border-gray-600 p-3">
          <span className="prompt text-green-500 font-bold">
            <span className="text-[#ffffff] md:text-2xl">
              <BsTerminal />
            </span>
          </span>
          <div className="flex gap-2">
            <MdMinimize className="text-xl text-gray-500  rounded-full  bg-gray-500 hover:text-[#ffff] hover:scale-110" />
            <VscChromeMaximize className="text-xl text-gray-500 rounded-full bg-gray-500 hover:text-[#ffff] hover:scale-110" />
            <Link to={"/"}>
              <GrFormClose className="text-xl rounded-full bg-blue-600 hover:text-[#ffff] hover:scale-110" />
            </Link>
          </div>
        </nav>
        <div
          onClick={handleTerminalClick}
          className="terminal   sm:h-[90%] h-[398px]   p-[10px] overflow-y-auto"
        >
          <div className="terminal-output  overflow-x-hidden overflow-y-auto">
            <Outlet />

            {outputs.map((element, index) => (
              <p
                className={`${
                  element.err
                    ? "text-red-500  text-xl font-bold"
                    : "text-green-500 text-xl font-bold"
                }`}
                key={index}
              >
                <span className="text-violet-500">$</span> {element.value}
              </p>
            ))}
            {/* <p>please wait...</p> */}
          </div>
          <div className="terminal-input relative flex">
            <span className="text-violet-500 text-xl">$ </span>
            <input
              placeholder='"docs" hit "Enter"'
              ref={inputRef}
              value={command}
              onKeyDown={inputElement}
              onChange={(e) => setCommand(e.target.value)}
              type="text"
              id="command-input"
              // autoFocus
              className="outline-none text-lg font-roboto text-green-500 font-bold bg-transparent pl-1 w-[100%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
