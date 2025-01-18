import React, { useState, useRef } from "react";
import FramerTimeline from "../FramerTimeline"; // Assuming this is your FramerTimeline component
import Navbar from "./Navbar";
import backward from "../../assets/icons/backward.svg";
import cut from "../../assets/icons/cut.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import forward from "../../assets/icons/forward.svg";
import play from "../../assets/icons/play.svg";

const VideoSection = ({
  videoUrl,
  setVideoUrl,
  fileName,
  setFileName,
  fileInputRef,
  handleVideoUpload,
}) => {
  const [progress, setProgress] = useState(0); 
  const videoRef = useRef(null); 

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
  };

  // Seek to a specific time in the video
  const handleSeek = (time) => {
    const video = videoRef.current;
    video.currentTime = time;
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Skip forward by 10 seconds
  const skipForward = () => {
    const video = videoRef.current;
    video.currentTime += 10;
  };

  // Skip backward by 10 seconds
  const skipBackward = () => {
    const video = videoRef.current;
    video.currentTime -= 10;
  };

  // Delete the video and reset all states
  const deleteVideo = () => {
    setVideoUrl(null); // Clear the video URL
    setFileName(""); // Clear the file name
    fileInputRef.current.value = ""; // Clear the file input field
  };

  return (
    <div>
      <Navbar />
      {/* Video Container */}
      <div className="border-b-2 border-[#EFEFEF]">
        <div className="w-[80%] h-[400px] relative overflow-hidden mx-auto">
          {videoUrl ? (
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
                onTimeUpdate={handleTimeUpdate}
                style={{
                  objectFit: "contain", // Ensures the video fills the container
                }}
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          ) : (
            // Placeholder when no video is uploaded
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <p>Upload a video to start</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div></div>
        <div className="flex justify-center items-center gap-1">
          <img
            src={backward}
            alt="/"
            className="cursor-pointer"
            onClick={skipBackward}
          />
          <img
            src={play}
            alt="/"
            className="cursor-pointer"
            onClick={togglePlayPause}
          />
          <img
            src={forward}
            alt="/"
            className="cursor-pointer"
            onClick={skipForward}
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <img
            src={deleteIcon}
            alt="/"
            className="cursor-pointer"
            onClick={deleteVideo}
          />
          <img src={cut} alt="/" className="cursor-pointer" />
        </div>
      </div>

      {/* Framer Timeline below the video */}
      {videoUrl && (
        <FramerTimeline
          progress={progress}
          onSeek={handleSeek}
          videoDuration={videoRef.current?.duration || 60}
        />
      )}
    </div>
  );
};

export default VideoSection;
