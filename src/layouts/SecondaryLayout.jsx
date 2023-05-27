import React from "react";
import { Link } from "react-router-dom";
//icon
import { AiOutlinePlus } from "react-icons/ai";

export default function SecondaryLayout({ handleFavorites, handleAllPosts }) {
  return (
    <div className=" flex fixed items-center justify-between w-screen z-10  pt-[1.5rem] pl-[1rem] pr-[1rem] pb-[1rem] sm:pt-[2.5rem] sm:pl-[5rem] sm:pr-[5rem] ">
      <div className="categories flex gap-3">
        <button
          onClick={handleAllPosts}
          className=" hover:border-[#0266ff] w-[97px] h-[50px]  border-2  p-2 rounded-3xl text-center"
        >
          All Posts
        </button>
        <button
          onClick={handleFavorites}
          className=" hover:border-[#0266ff] w-[97px] h-[50px]  border-2   p-2 rounded-3xl text-center"
        >
          Favorites
        </button>
      </div>
      <div className="addPost">
        <Link
          to={"create"}
          className="flex hover:border-[#0266ff]   items-center justify-center sm:w-[135px] sm:h-[50px] border-2 rounded-full sm:rounded-xl p-3 gap-2"
        >
          <AiOutlinePlus />
          <span className="hidden sm:inline"> Add post</span>
        </Link>
      </div>
    </div>
  );
}
