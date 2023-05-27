import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsFacebook, BsTiktok } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-[#10131C] mt-[3rem] bottom-0 z-20 h-[213px] flex items-center justify-center flex-col gap-10 md:flex-row md:justify-around">
      <div className=" flex items-start gap-5 justify-center flex-col">
        <div className="text-[#FFFFFF]">Follow Us</div>
        <div className="flex items-center justify-center gap-2">
          <FaLinkedinIn className="text-[#FFFFFF] w-[30px] h-[30px] " />
          <AiFillInstagram className="text-[#FFFFFF] w-[30px] h-[30px] " />
          <BsFacebook className="text-[#FFFFFF] w-[30px] h-[30px] " />
          <AiFillTwitterCircle className="text-[#FFFFFF] w-[30px] h-[30px] " />
          <AiOutlineWhatsApp className="text-[#FFFFFF] w-[30px] h-[30px] " />
          <BsTiktok className="text-[#FFFFFF] w-[30px] h-[30px] " />
          <AiFillYoutube className="text-[#FFFFFF] w-[30px] h-[30px] " />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-[#FFFFFF]">
        <div>Privacy Policy</div>
        <div>Terms of Use</div>
      </div>
    </div>
  );
}
