import React from "react";
import { motion } from "framer-motion";

import vectorImg from "../assets/images/Vector.png";
import vectorImg1 from "../assets/images/Vector (1).png";

const FramerTimeline = ({
  progress = 0, // Default progress is 0% if no video is available
  onSeek,
  videoDuration,
}) => {
  const trackStyle = {
    position: "relative",
    height: "30px",
    background: "#f0f0f0",
    borderRadius: "5px",
    overflow: "hidden",
    marginBottom: "10px",
  };

  // Ensure videoDuration is valid before formatting
  const formattedTime =
    videoDuration && !isNaN(videoDuration)
      ? new Date(videoDuration * 1000).toISOString().substr(14, 5)
      : "00:00"; // Fallback time when videoDuration is invalid

  return (
    <div style={{ width: "600px", marginTop: "20px" }}>
      {/* Time Display */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <span>00:00</span>
        <span>{formattedTime}</span>
      </div>

      {/* Track Container */}
      <div
        style={{
          position: "relative",
        }}
      >
        {/* Track 1 (Vector Image 1 - Blue) */}
        <div
          style={{
            ...trackStyle,
            backgroundImage: `url(${vectorImg})`, // Add vector image as background
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width:"144%"
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              height: "100%",
              width: `${progress}%`,
              background: "rgba(0, 123, 255, 0.5)", // Optional: Add semi-transparent overlay for progress
            }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Track 2 (Vector Image 2 - Pink) */}
        <div
          style={{
            ...trackStyle,
            backgroundImage: `url(${vectorImg1})`, // Add vector image as background
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width:"144%"
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              height: "100%",
              width: `${progress}%`,
              background: "rgba(255, 105, 180, 0.5)", // Optional: Add semi-transparent overlay for progress
            }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Draggable Slider Marker */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 600 }}
          style={{
            position: "absolute",
            top: "0",
            left: `${progress}%`,
            width: "15px",
            height: "38px",
            background: "blue", // Ensure slider is always visible
            borderRadius: "50%",
            cursor: "grab",
            transform: "translate(-50%, -5px)", // Keep slider centered on progress
          }}
          onDrag={(event, info) => {
            const newProgress = Math.min(
              Math.max((info.point.x / 600) * 100, 0),
              100
            );
            onSeek((newProgress / 100) * videoDuration);
          }}
        />
      </div>
    </div>
  );
};

export default FramerTimeline;
