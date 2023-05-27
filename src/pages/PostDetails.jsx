import React, { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart, AiOutlineArrowLeft } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { postsDataContext } from "../App";

export default function PostDetails() {
  const { id } = useParams();
  const [posts, setPosts] = useContext(postsDataContext);
  const post = posts.find((e) => e.id === parseInt(id));

  const likeHandler = () => {
    const updatedPosts = posts.map((prevPost) =>
      prevPost.id === post.id
        ? {
            ...post,
            isLiked: !post.isLiked,
            likes: post.likes + (post.isLiked ? -1 : 1),
          }
        : prevPost
    );
    setPosts(updatedPosts);
  };

  const textareaRef = useRef(null);
  const commentFocusHandler = () => {
    textareaRef.current.focus();
  };

  const [comment, setComment] = useState("");
  const submitCommentHandler = (e) => {
    e.preventDefault();
    const newComment = {
      author: "User",
      text: comment,
      date: new Date().toLocaleString(),
      likes: 0,
      isLiked: false,
    };

    if (comment.length > 0) {
      const updatedPosts = posts.map((prevPost) =>
        prevPost.id === post.id
          ? { ...post, comments: [...post.comments, newComment] }
          : prevPost
      );
      setPosts(updatedPosts);
      setComment("");
    }
  };

  const handleCommentLike = (commentIndex) => {
    const updatedPosts = posts.map((prevPost) =>
      prevPost.id === post.id
        ? {
            ...post,
            comments: post.comments.map((comment, index) =>
              index === commentIndex
                ? {
                    ...comment,
                    isLiked: !comment.isLiked,
                    likes: comment.likes + (comment.isLiked ? -1 : 1),
                  }
                : comment
            ),
          }
        : prevPost
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="border-2  bg-[#FFFFFF] w-full py-[4rem] top-[-0] z-10 lg:px-[6rem]">
      <Link
        to="/blog"
        className="flex items-center gap-1 ml-3 mt-3 lg:mt-[4rem]"
      >
        <AiOutlineArrowLeft className="" /> Blog
      </Link>
      <div className="flex  justify-center py-[2rem] lg:px-[10rem]">
        <div className="flex flex-col w-[300px] sm:w-auto md:flex-row-reverse gap-3">
          <img
            src={post.img}
            className="h-[165px] sm:w-[410px] sm:h-[320px] object-cover rounded-md"
            alt=""
          />
          <div className="flex   md:min-w-[30rem] md:max-w-[30rem] flex-col gap-2 md:pt-[4rem] sm:px-[3rem]">
            <div className="text-[28px] font-bold overflow-hidden">
              {post.title}
            </div>
            <div className="flex items-center justify-start gap-6 text-[12px] text-[#9D9DB5]">
              <div className="flex items-center justify-center gap-1">
                <VscAccount className="text-[19px]" />
                <p>{post.author}</p>
              </div>
              <p>{post.date}</p>
            </div>
            <div className="text-[14px] overflow-hidden">{post.text}</div>
            <div className="flex pl-[1rem] gap-3">
              <div className="text-[10px] text-[#9D9DB5] flex items-center justify-center gap-1">
                <BiComment
                  onClick={commentFocusHandler}
                  className="text-lg hover:text-[#0266FF]"
                />{" "}
                {post.comments.length}
              </div>
              <div className="text-[10px] text-[#9D9DB5] flex items-center justify-center gap-1">
                <AiOutlineHeart
                  onClick={likeHandler}
                  className={`${
                    post.isLiked && "text-[#0266FF]"
                  } text-lg hover:text-[#0266FF] font-bold`}
                />{" "}
                {post.likes}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="addcomments flex sm:items-start   justify-center flex-col sm:px-[13rem]">
        <form className="flex p-3 justify-center  flex-col ">
          <label className="">Leave a comment:</label>
          <textarea
            className="border-2 h-[100px] md:w-[28rem] rounded-lg resize-none p-3"
            name="comments"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            ref={textareaRef}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex justify-end">
            <button
              onClick={submitCommentHandler}
              className={`w-[320px] mt-[1rem] h-[40px] ${
                comment.length > 0 ? "bg-[#0266FF]" : "bg-[#C0BFCF]"
              }  text-[#FFFFFF] font-bold rounded-lg`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="comments flex flex-col items-start px-[1rem] py-[1rem] md:px-[13rem]">
        <div className="py-[2rem]">Comments:</div>
        <div className="flex flex-col gap-1">
          {post.comments.map((comment, index) => (
            <div
              key={index}
              className="flex w-[300px] sm:w-auto gap-1 h-auto p-1"
            >
              <div>
                <VscAccount className="text-[36px]" />
              </div>
              <div className="pt-2">
                <div className="font-bold text-[#625F87]">{comment.author}</div>
                <div className="text-[#10131C] pr-[1rem] text-[12px]">
                  {comment.text}
                </div>
                <div className="flex gap-[3rem] text-[#9D9DB5]">
                  <div className="text-[12px]">{comment.date}</div>
                  <div className="flex items-center gap-1">
                    <AiOutlineHeart
                      onClick={() => handleCommentLike(index)}
                      className={`${
                        comment.isLiked && "text-[#0266FF]"
                      } hover:text-[#0266FF] font-bold`}
                    />
                    <div className="text-[12px]">{comment.likes}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//loader function

import postsData from "./../posts.json";

export const postDetailsLoader = async ({ params }) => {
  const { id } = params;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = postsData.find((p) => p.id === parseInt(id));
      resolve({ post });
    }, 0);
  });
};
