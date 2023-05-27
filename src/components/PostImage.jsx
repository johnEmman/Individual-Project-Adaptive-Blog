import { useState, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { uploadImage } from "../plugins/uploadImage";

export const PostImage = ({ addImageSuccessful }) => {
  // This code sends an API to a 3rd party library that uploads and serves the image
  // Added a spinner for user-experience and this component returns an image {fileURL}
  // Do not touch any of the code

  const imageInput = useRef();
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (e) => {
    try {
      const { fileUrl } = await uploadImage.uploadFile(e.target.files[0], {
        onProgress,
      });
      imageInput.current.value = "";
      setImage(fileUrl);
      addImageSuccessful(fileUrl);
    } catch (e) {
      console.warn(`Error: ${e}`);
    }
    setIsLoading(false);
  };
  const onProgress = ({ progress }) => {
    setIsLoading(true);
    console.log(`File uploading: ${progress}% complete.`);
  };
  const [hover, setHover] = useState(true);

  function out() {
    setHover((prev) => !prev);
  }
  function on() {
    setHover((prev) => !prev);
  }

  return (
    <div
      onMouseOver={on}
      onMouseOut={out}
      className={` ${
        image && hover ? "" : " opacity-80"
      } image-uploader   w-[300px] h-[165px] md:w-[350px] md:h-[300px]`}
      style={{
        backgroundImage: image ? `url(${image})` : "#f8f9fc",
        backgroundSize: "cover",
      }}
    >
      {isLoading ? <LoadingSpinner /> : ""}
      <label
        className={`image-button cursor-pointer   py-[10px] px-[13px] border-2 text-[#0266ff] border-[#0266ff] rounded-lg absolute z-[2]  left-[50%] top-[50%]  `}
        style={{
          display: image && hover ? "none" : "block",
        }}
      >
        <input
          type="file"
          name="image_upload"
          onChange={handleImageUpload}
          ref={imageInput}
        />
        + Add Image
      </label>
    </div>
  );
};
