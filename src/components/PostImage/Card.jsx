import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { useState, useLoaderData } from "react";
import { Link } from "react-router-dom";
import PostDetails from "../../pages/PostDetails";

export default function Card({ filteredPosts }) {
  const [posts, setPosts] = useState(filteredPosts);

  const handleLike = (index) => {
    const updatedPosts = [...posts];
    const post = updatedPosts[index];

    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;

    setPosts(updatedPosts);
  };

  return (
    <div className=" grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(370px,1fr))] md:gap-[2rem] gap-5  md:px-[5rem]">
      {filteredPosts.map((e, i) => {
        return (
          <div
            key={i}
            className="place-self-center shadow-lg rounded-lg h-[297px] w-[300px] md:h-[300px] md:w-[320px]   "
          >
            <Link
              to={`/blog/${e.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={e.img}
                className=" cursor-pointer rounded-t-lg object-cover w-[300px] h-[165px] md:w-[320px]"
              />
            </Link>
            <div className="p-2">
              <div className="border-b-2 pb-2 border-[#9D9DB5]">
                <div className="title  font-bold text-xl ">{e.title}</div>
                <div className="clamp-text text-[#625F87] text-[15px]">
                  {e.text}
                </div>
              </div>
              <div className="flex items-center justify-between  h-10 gap-6">
                <div className="flex gap-3">
                  <div className="text-[10px] text-[#9D9DB5]">{e.date}</div>
                  <div className="text-[10px] text-[#9D9DB5]">{e.author}</div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[10px] text-[#9D9DB5] flex items-center justify-center gap-1">
                    <Link to={`/blog/${e.id}`}>
                      <BiComment className="text-lg hover:text-[#0266FF]" />
                    </Link>
                    {e.comments.length}
                  </div>
                  <div className="text-[10px] text-[#9D9DB5]  flex items-center justify-center gap-1">
                    <AiOutlineHeart
                      onClick={() => handleLike(i)}
                      className={` ${
                        e.isLiked && "text-[#0266FF]"
                      } text-lg hover:text-[#0266FF] font-bold`}
                    />
                    {e.likes + "K"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
