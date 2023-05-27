import React, { useState } from "react";

export default function AboutUs() {
  const [data, setData] = useState([
    {
      content:
        "Refocus won a 2022 Golden Kitty Award and was named 'Best Educational' Tool by Product Hunt, one of the largest and most reliable websites in tech. Before receiving this award, it was named Product of the Day and Product of the Week. That makes Refocus enter the list of the most successful new products in the world.",
      title: "2022 Golden Kitty Award winner",
      img: "https://static.tildacdn.com/tild6564-3635-4265-b337-316538376534/label_winner.svg",
    },

    {
      content:
        "According to similarweb, refocus.me is the most popular online education website in the Philippines based on website traffic.",
      title: "The #1 digital courses in the Philippines",
      img: "https://static.tildacdn.com/tild3164-6262-4664-b431-303333363664/logo_similar-web.png",
    },
    {
      content:
        "Among 750+ global applicants, Refocus was chosen and included in GSV Cup’s Elite 200, which comprises pre-seed and seed-stage EdTech startups. The review process was designed around the 'Five P's' framework: people, product, potential, predictability, and purpose.",
      title: "Top 200 most innovative EdTech startups",
      img: "https://static.tildacdn.com/tild6438-3231-4533-a662-653762303833/Top_200_Startups.svg",
    },
  ]);

  return (
    <div className=" h-auto ">
      <div className="bg-[rgb(220,241,13)] h-[100vh] flex items-center justify-center text-3xl sm:text-5xl md:text-7xl lg:text-8xl p-4 text-center text-[rgb(25,33,64)] font-extrabold">
        We aim to give people<br></br> new opportunities<br></br> to thrive,
        succeed, <br /> and change their lives
      </div>
      <div className="bg-[rgb(42,50,83)] md:flex-row flex-wrap min-h-screen  p-5 flex items-baseline justify-center flex-col gap-2 md:gap-10">
        {data.map((e, i) => {
          return (
            <div
              key={i}
              className="w-[270px] min-w-[270px] bg-[rgb(255,255,255)]  p-3 rounded-2xl "
            >
              <div className="">
                <img src={e.img} />
              </div>
              <div className=" text-lg font-bold py-2">{e.title}</div>
              <div>{e.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
