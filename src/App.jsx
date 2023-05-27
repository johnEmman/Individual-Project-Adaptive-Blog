import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";

//json
import postsData from "./posts.json";

// components
import Header from "./components/Header";

//pages
import Blog from "./pages/Blog";
import AddPost from "./pages/AddPost";
import AboutUs from "./pages/AboutUs";
import Reviews from "./pages/Reviews";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

import { PostsList } from "./components/PostsList";
import { PostImage } from "./components/PostImage";
import PostDetails, { postDetailsLoader } from "./pages/PostDetails";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

export const postsDataContext = createContext();

function App() {
  const [posts, setPosts] = useState(postsData);

  // Example usage of the addImageSuccessful prop
  const handleImageSuccess = (imageUrl) => {
    console.log(imageUrl);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/create" element={<AddPost />} />
        <Route
          path="blog/:id"
          loader={postDetailsLoader}
          element={<PostDetails />}
        />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="log-in" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <postsDataContext.Provider value={[posts, setPosts]}>
      <div className="App ">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </postsDataContext.Provider>
  );
}

export default App;
