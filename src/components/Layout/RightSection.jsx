import React from "react";
import fileIcon from "../../assets/icons/Textfile.svg";
import gridIcon from "../../assets/icons/Textgrid.svg";
import circleIcon from "../../assets/icons/Uploadcircle.svg";
import uploadIcon from "../../assets/icons/UploadUpload.svg";
import textIcon from "../../assets/icons/Uploadtext.svg";
import ccIcon from "../../assets/icons/Uploadcc.svg";
import musicIcon from "../../assets/icons/Uploadmusic.svg";

const RightSection = () => {
  const assets = [
    fileIcon,
    gridIcon,
    circleIcon,
    uploadIcon,
    textIcon,
    ccIcon,
    musicIcon,
  ];
  return (
    <div className="w-12 flex flex-col border-l-2 border-[#EFEFEF]">
      {assets.map((asset) => (
        <img
          key={Math.random() + "ABC"}
          src={asset}
          alt="/"
          className="mx-auto mt-2 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default RightSection;
