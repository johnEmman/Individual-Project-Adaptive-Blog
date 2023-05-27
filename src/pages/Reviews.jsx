import React from "react";
import { VscAccount } from "react-icons/vsc";

export default function Reviews() {
  const positiveReviews = [
    {
      id: 1,
      author: "John Doe",
      review:
        "This product is amazing! It exceeded my expectations and delivered exceptional results. Highly recommended!",
      rating: 5.0,
    },
    {
      id: 2,
      author: "Jane Smith",
      review:
        "I'm extremely satisfied with this purchase. The quality is outstanding, and it has made a noticeable difference. 5 stars!",
      rating: 5.0,
    },
    {
      id: 3,
      author: "Alex Johnson",
      review:
        "I've tried several similar products, but this one stands out. It works like magic and has greatly improved my skin. Very impressed!",
      rating: 4.8,
    },
    {
      id: 4,
      author: "Sarah Adams",
      review:
        "I can't say enough good things about this product. It has transformed my skin and given me a boost of confidence. Definitely worth every penny!",
      rating: 4.9,
    },
    {
      id: 5,
      author: "Mike Thompson",
      review:
        "I've been using this for a while now, and I'm extremely happy with the results. My skin looks radiant and feels healthier than ever. Highly recommended!",
      rating: 4.7,
    },
  ];

  return (
    <div className="pt-[4rem] min-h-screen  bg-[rgb(247,247,247)] ">
      <div className="px-8 sm:px-[3rem] my-[2rem] md:px-[9rem] md:my-[4rem]">
        <div className="text-[rgb(25,33,64)] text-3xl font-bold md:text-6xl lg:text-8xl ">
          Success stories and testimonials
        </div>
        <div className="text-[rgb(25,33,64)] lg:text-4xl md:mt-[2rem]">
          Join our students on their life-changing journeys as they share their
          stories and experiences. Scroll down the page, watch the videos, and
          get inspired.
        </div>
      </div>
      <div className="flex items-center justify-center flex-col flex-wrap gap-3 py-[3rem] sm:flex-row sm:gap-10 md:px-[10rem]">
        {positiveReviews.map((e, i) => (
          <div
            key={i}
            className="p-3 bg-[rgb(255,255,255)] rounded-xl max-w-[270px] h-[13rem] shadow-xl"
          >
            <div>
              <div className="bg-[rgb(238,255,72)] flex items-center justify-center gap-3 w-fit py-1 px-2 rounded-3xl text-2xl font-bold">
                <span className="text-4xl">{<VscAccount />}</span>
                <span>{e.author}</span>
              </div>
              <div className=" ml-5 text-sm font-bold"> Rating: {e.rating}</div>
            </div>
            <div className="p-2">{e.review}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
