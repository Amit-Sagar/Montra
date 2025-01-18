import React from "react";
import Sidebar from "../components/Sidebar";
import VideoSection from "../components/videoSection/VideoSection";

const Homepage = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <VideoSection />
    </div>
  );
};

export default Homepage;
