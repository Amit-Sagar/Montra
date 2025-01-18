import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import VideoSection from "../components/videoSection/VideoSection";
import RightSection from "../components/Layout/RightSection";

const Homepage = ({
  videoUrl,
  setVideoUrl,
  fileName,
  setFileName,
  fileInputRef,
  handleVideoUpload,
}) => {
  return (
    <div className="flex-1 overflow-auto">
      {/* <Sidebar /> */}
      <VideoSection
        videoUrl={videoUrl}
        setVideoUrl={setVideoUrl}
        fileName={fileName}
        setFileName={setFileName}
        fileInputRef={fileInputRef}
        handleVideoUpload={handleVideoUpload}
      />
      {/* <RightSection /> */}
    </div>
  );
};

export default Homepage;
