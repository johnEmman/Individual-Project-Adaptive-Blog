import React from "react";
import "animate.css";

export default function About() {
  return (
    <div className="md:text-xl font-roboto text-[#ffffff]  font-light pb-7">
      <div className="text-4xl py-10 animate__animated animate__bounceInDown">
        About me
      </div>
      <div className="flex flex-col gap-7 sm:px-[9%]  ">
        <div className="animate__animated animate__bounceInLeft">
          Hi, I am{" "}
          <span className="text-green-500">John Emmanuel Salamat Marco</span>, a
          20-year-old student currently, I am pursuing my Bachelor of Science
          degree in
          <span className="text-yellow-300"> Computer Science</span> at{" "}
          <span className="text-red-400">AMA Computer College</span> in Lucena
          City. In addition to my academic studies, I am also enrolled in a
          <span className="text-blue-400"> Refocus</span> Boot camp course on{" "}
          <span className="text-violet-500">web development</span>. This
          intensive program allows me to further enhance my skills and knowledge
          in this field, providing me with practical experience and exposure to
          the latest industry practices.
        </div>
        <div className="animate__animated animate__bounceInRight">
          Apart from my studies and bootcamp, I have a passion for creating
          innovative <span className="text-orange-300">solutions</span> and
          <span className="text-green-400"> envisioning</span> the{" "}
          <span className="text-green-500">future</span> by building things that
          do not <span className="text-pink-500">exist yet</span>. I am
          particularly interested in{" "}
          <span className="text-yellow-300">machine learning</span> and{" "}
          <span className="text-violet-400">cyber security</span> as I find them
          <span className="text-emerald-600"> fascinating</span> and{" "}
          <span className="text-blue-400">promising fields</span>. During my
          leisure time, I enjoy reading books, and playing musical instruments
          like the guitar. These activities not only bring me joy and help me
          maintain a well-rounded and balanced lifestyle.
        </div>
        <div className="animate__animated animate__bounceInLeft">
          I am excited about the endless possibilities that lie ahead and look
          forward to combining my academic education, bootcamp training, and
          <span className="text-yellow-200"> personal interests</span> to make a
          positive impact in the field of
          <span className="text-orange-400"> technology</span>.
        </div>
      </div>
    </div>
  );
}
