import React from "react";
import img from "../../assets/images/sidebar-img.png";

export default function Sidebar() {
  return (
    <div className="w-44 border-r-2 border-[#EFEFEF] px-5 py-4">
      <div className="sidebar-conatiner">
        <img className="sidebar-image" src={img} alt="/" />
      </div>
      <div className="sidebar-conatiner">
        <img className="sidebar-image" src={img} alt="/" />
      </div>
      <div className="sidebar-conatiner">
        <img className="sidebar-image" src={img} alt="/" />
      </div>
    </div>
  );
}
