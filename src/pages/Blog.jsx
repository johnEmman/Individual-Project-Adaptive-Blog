import { Outlet } from "react-router-dom";
import SecondaryLayout from "../layouts/SecondaryLayout";
import { useContext, useState } from "react";
import { postsDataContext } from "../App";
import Card from "../components/PostImage/Card";

export default function Blog() {
  const [post, setPosts] = useContext(postsDataContext);
  const [filteredPosts, setFilteredPosts] = useState(post);

  // Function to handle filtering when the "All Posts" button is clicked
  const handleAllPosts = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFilteredPosts(post);
  };

  // Function to handle filtering when the "Favorites" button is clicked
  const handleFavorites = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const favorites = post.filter((p) => p.isLiked);
    setFilteredPosts(favorites);
  };

  return (
    <div className=" pt-[3.5rem]">
      <SecondaryLayout
        handleAllPosts={handleAllPosts}
        handleFavorites={handleFavorites}
      />
      <div className=" bg-[#FFFFFF] h-[5rem] sm:h-[7rem] w-screen fixed"></div>
      <div className="blog  pt-[5.5rem] sm:pt-[8rem]   ">
        <Card filteredPosts={filteredPosts} />
        <Outlet />
      </div>
    </div>
  );
}
