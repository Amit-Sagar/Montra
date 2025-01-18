import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import VideoSection from "../components/videoSection/VideoSection";
import RightSection from "../components/Layout/RightSection";

const Homepage = () => {
  return (
    <div className="flex-1 overflow-auto">
      {/* <Sidebar /> */}
      <VideoSection />
      {/* <RightSection /> */}
    </div>
  );
};

export default Homepage;
