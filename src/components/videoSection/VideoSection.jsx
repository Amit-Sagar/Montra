import React, { useState, useRef } from "react";
import FramerTimeline from "../FramerTimeline"; // Assuming this is your FramerTimeline component
import Navbar from "./Navbar";

const VideoSection = () => {
  const [videoUrl, setVideoUrl] = useState(null); // Store the video URL
  const [progress, setProgress] = useState(0); // Store the playback progress
  const [fileName, setFileName] = useState(""); // Store the file name
  const videoRef = useRef(null); // Ref for the video element
  const fileInputRef = useRef(null); // Ref for the file input element

  // Handle file upload
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setFileName(file.name); // Set the file name
    }
  };

  // Update progress as the video plays
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
      <Navbar/>
      {/* <h1>Interactive Video Player</h1> */}

      {/* Upload Video Input */}
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        ref={fileInputRef} // Reference for clearing the input
        style={{ marginBottom: "20px" }}
      />

      {/* File Name Display */}
      {fileName && <p>Uploaded File: {fileName}</p>}

      {/* Video Container */}
      <div
        style={{
          width: "600px", // Fixed width
          height: "400px", // Fixed height
          border: "1px solid gray",
          marginBottom: "20px",
          position: "relative",
          overflow: "hidden", // Hide any overflow
        }}
      >
        {videoUrl ? (
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
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

{/* Controls (outside video div) */}
<div style={{ marginBottom: "20px",display:"flex" }}>
        
<div style={{width:"65%",display:"flex",justifyContent:"end"}}>
        {/* Skip Backward by 10 Seconds */}
        <button onClick={skipBackward} style={{ marginRight: "10px",border:"none", background:"white" }}>
        <i class="fa fa-step-backward" aria-hidden="true"></i>
        </button>
{/* Play/Pause Button */}

<button onClick={togglePlayPause} style={{ marginRight: "10px",border:"none", background:"white" }}>
          {videoRef.current && videoRef.current.paused ? <i class="fa fa-play" aria-hidden="true"></i> : <i class="fa fa-pause" aria-hidden="true"></i>}
        </button>
        {/* Skip Forward by 10 Seconds */}
        <button onClick={skipForward} style={{ marginRight: "10px",border:"none", background:"white" }}>
        <i class="fa fa-step-forward" aria-hidden="true"></i>
        </button>
        </div>
<div>
        {/* Delete Video Button */}
        <button onClick={deleteVideo} style={{ marginRight: "10px",border:"none", background:"white","marginRight": "10px",
    border: "none",
    background: "white"}}>
        <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        <button style={{ marginRight: "10px",border:"none", background:"white","marginRight": "10px",
    border: "none",
    background: "white"}}>
        <i class="fa fa-scissors" aria-hidden="true"></i>
        </button>
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
