import React from "react";
import fileIcon from "../../assets/icons/Textfile.svg";
import gridIcon from "../../assets/icons/Textgrid.svg";
import circleIcon from "../../assets/icons/Uploadcircle.svg";
import uploadIcon from "../../assets/icons/UploadUpload.svg";
import textIcon from "../../assets/icons/Uploadtext.svg";
import ccIcon from "../../assets/icons/Uploadcc.svg";
import musicIcon from "../../assets/icons/Uploadmusic.svg";

const RightSection = ({ setOpenModal }) => {
  const assets = [
    { id: 1, img: fileIcon },
    { id: 2, img: gridIcon },
    { id: 3, img: circleIcon },
    { id: 4, img: uploadIcon },
    { id: 5, img: textIcon },
    { id: 6, img: ccIcon },
    { id: 7, img: musicIcon },
  ];
  const handleClick = (id) => {
    if (id === 4) {
      setOpenModal(true);
      return;
    }
    return;
  };
  return (
    <div className="w-12 flex flex-col border-l-2 border-[#EFEFEF]">
      {assets.map((asset) => (
        <img
          key={Math.random() + "ABC"}
          src={asset.img}
          alt="/"
          className="mx-auto mt-2 cursor-pointer"
          onClick={() => handleClick(asset.id)}
        />
      ))}
    </div>
  );
};

export default RightSection;
