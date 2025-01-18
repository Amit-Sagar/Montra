import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const WaveformVisualizer = ({ videoRef }) => {
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceRef = useRef(null); // Ref to store MediaElementSourceNode
  const [frequencyData, setFrequencyData] = useState(new Uint8Array(128));

  useEffect(() => {
    let animationFrameId;

    if (videoRef.current && !audioContextRef.current) {
      // Initialize AudioContext and AnalyserNode
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;

      // Create MediaElementSourceNode only once
      try {
        const source = audioContext.createMediaElementSource(videoRef.current);

        // Only connect the source to the analyser if it has not been connected before
        if (!sourceRef.current) {
          source.connect(analyser);
          analyser.connect(audioContext.destination);

          // Store the MediaElementSourceNode in a ref to avoid reconnecting
          sourceRef.current = source;
          analyserRef.current = analyser;
          audioContextRef.current = audioContext;
        }
      } catch (error) {
        console.warn("Error creating MediaElementSourceNode:", error);
      }
    }

    // Animation loop to update frequency data
    const updateFrequencyData = () => {
      if (analyserRef.current) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        setFrequencyData([...dataArray]);
      }
      animationFrameId = requestAnimationFrame(updateFrequencyData);
    };

    updateFrequencyData();

    // Cleanup when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      analyserRef.current = null;
      sourceRef.current = null; // Reset the source reference
    };
  }, [videoRef]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100px",
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
      }}
    >
      {frequencyData.map((value, index) => (
        <motion.div
          key={index}
          style={{
            width: "3px",
            height: `${value / 2}px`,
            margin: "0 1px",
            backgroundColor: "#007bff",
          }}
          animate={{
            scaleY: value / 100,
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default WaveformVisualizer;
