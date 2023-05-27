import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
//component
import { PostImage } from "../components/PostImage";
//icon
import { AiOutlineArrowLeft } from "react-icons/ai";
//data
import { postsDataContext } from "../App";

export default function AddPost() {
  const [posts, setPosts] = useContext(postsDataContext);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const handleImageSuccess = (imageUrl) => {
    setImg(imageUrl);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post object with the provided title and text

    const newPost = {
      id: posts.length + 1,
      title: title,
      text: text,
      author: "User",
      date: new Date().toLocaleString(),
      likes: 0,
      isLiked: false,
      comments: [],
      img: img,
    };
    if (text.length > 0 && title.length > 0 && img !== null) {
      setPosts([newPost, ...posts]);
      setTitle("");
      setText("");
      setImg(null);
    }
  };

  //
  return (
    <div className=" bg-[#FFFFFF] w-full py-[5rem] top-[-0] z-10 lg:px-[3.7rem] flex flex-col justify-center ">
      <Link
        to="/blog"
        className="md:flex items-center hidden gap-1 ml-3 mt-3 lg:mt-[4rem]"
      >
        <AiOutlineArrowLeft /> Blog
      </Link>{" "}
      <div className="flex items-center p-3 justify-center flex-col gap-3  ">
        <div className=" text-[#10131C] w-full text-left  md:py-[2rem] text-[28px] md:text-[36px] font-bold">
          New post*
        </div>
        <div className="flex justify-between w-full s flex-col-reverse md:flex-row gap-3 ">
          <div>
            <div className="">
              <div className="">
                <form className="flex flex-col gap-8">
                  <div className="flex items-start gap-3 justify-center flex-col">
                    <label className="text-[18px]">Add title*</label>
                    <textarea
                      onChange={handleTitleChange}
                      className="w-[300px] lg:w-[590px]  h-[100px] resize-none p-2 text-[35px] rounded-lg font-extrabold border-2 trounded-lg"
                      placeholder="Our First Concert in the U.S.!"
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-3 justify-center flex-col">
                    <label className="text-[18px]">Add text*</label>
                    <textarea
                      onChange={handleTextChange}
                      placeholder="Blinks, the wait is over! Our new music video is out now! We worked so hard on this one, and we hope you love it as much as we do. Check it out and let us know what you think in the comments! ❤️ #DARKPINK #NewMusicVideo #LennieWin"
                      className="w-[300px] lg:w-[590px]  p-2 resize-none h-[200px] border-2 rounded-lg"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className={` ${
                      text.length > 0 && title.length > 0 && img !== null
                        ? "bg-[#0266FF]"
                        : "bg-[#C0BFCF]"
                    } rounded-md text-center text-[#FFFFFF]`}
                  >
                    <Link
                      to={`${
                        text.length > 0 && title.length > 0 && img !== null
                          ? "/blog"
                          : ""
                      }`}
                    >
                      <div className="rounded-md  p-2 ">Post</div>
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="">
            <PostImage addImageSuccessful={handleImageSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}
