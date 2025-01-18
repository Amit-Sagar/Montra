import React from "react";
import FileInput from "./common/FileInput";
import img1 from "../assets/images/modalImg.png";
import img2 from "../assets/images/ModalImg2.png";

const Modal = ({ fileInputRef, handleVideoUpload }) => {
  return (
    <div className="border-l-2 border-[#EFEFEF] max-w-[320px]">
      <h1 className="border-b-2 border-[#EFEFEF] py-2 px-5">Media</h1>
      <div className="px-5">
        <p className="text-[#707070] text-xs">Upload Media</p>
        <FileInput inputRef={fileInputRef} onChange={handleVideoUpload} />
      </div>
      <div className="border-y-2 border-[#EFEFEF] flex gap-2 items-center bg-[#FAFAFA] py-2">
        <button className="bg-white rounded-lg text-sm py-1 px-2 shadow-lg ">
          Images
        </button>
        <button className="p-0 text-sm">Video</button>
        <button className="p-0 text-sm">Logo</button>
        <button className="p-0 text-sm">Unsplash</button>
      </div>
      <div className="px-5">
        <p className="text-[#707070] text-xs">Media</p>
        <div className="flex flex-wrap gap-2 justify-center items-center mt-3">
          <img src={img1} alt="/" />
          <img src={img1} alt="/" />
          <img src={img1} alt="/" />
          <img src={img2} alt="/" />
          <img src={img2} alt="/" />
          <img src={img2} alt="/" />
          <img src={img2} alt="/" />
          <img src={img2} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
