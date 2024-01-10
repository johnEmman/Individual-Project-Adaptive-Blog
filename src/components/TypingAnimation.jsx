import React, { useState, useEffect } from "react";

const TypingAnimation = ({ animate, duration }) => {
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const textToAnimate = animate; // The text to animate

    const type = () => {
      setText(textToAnimate.slice(0, charIndex));
      setCharIndex(
        (prevCharIndex) => (prevCharIndex + 1) % (textToAnimate.length + 1)
      );
    };

    const timer = setTimeout(type, duration); // Adjust typing speed here (in milliseconds)
    return () => clearTimeout(timer);
  }, [charIndex]);

  return <span>{text}</span>;
};

export default TypingAnimation;
