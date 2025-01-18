import React from "react";
import Sidebar from "./Sidebar";
import RightSection from "./RightSection";

const Layout = ({ children, setOpenModal }) => {
  return (
    <div>
      <div className="flex justify-between  items-center py-4 border-b-2 border-[#EFEFEF]">
        <button className="border border-[#EFEFEF] shadow-lg w-[79px] h-7 px-3 py-0 text-sm rounded-md">
          Back
        </button>
        <p>Starter Project</p>
        <div className="flex gap-3">
          <button className="border border-[#EFEFEF] w-8 h-8 flex items-center px-1 py-0">
            <div className="text-white rounded-md bg-[#21CCEE] font-bold w-full ">
              C
            </div>
          </button>
          <button className="bg-[#2160FD] text-white  h-7 px-4 py-0 rounded-md text-sm">
            Export
          </button>
        </div>
      </div>
      <div className="flex h-screen w-full">
        <Sidebar />
        {children}
        <RightSection setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Layout;
