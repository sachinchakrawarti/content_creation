// src/remotion/P1_The_Ancient_World_Before_Rome/MESOPOTAMIAtextclips.jsx

import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const MesopotamiaTextClips = () => {
  const frame = useCurrentFrame();

  // 10 seconds = 300 frames at 30fps
  const text = "MESOPOTAMIA";
  const totalChars = text.length;

  // Typewriter effect - reveal one character at a time
  // Each character takes 5 frames to appear (adjust for speed)
  const charsToShow = Math.floor(frame / 5);
  const displayText = text.slice(0, Math.min(charsToShow, totalChars));

  // Blinking cursor
  const showCursor = frame % 30 < 15; // Blink every half second

  // Fade in the entire text after typing is complete
  const isComplete = charsToShow >= totalChars;
  const fadeInComplete = interpolate(
    frame,
    [totalChars * 5, totalChars * 5 + 20],
    [1, 1],
    { extrapolateRight: "clamp" },
  );

  // Glow effect after typing completes
  const glowPulse = 0.5 + 0.5 * Math.sin((frame / 40) * Math.PI);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#0a0a0a",
        padding: 20,
      }}
    >
      {/* Background subtle gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at center, rgba(255, 215, 0, 0.03) 0%, transparent 70%)",
        }}
      />

      {/* Main Text with Typewriter Effect */}
      <div
        style={{
          fontSize: 140,
          fontWeight: "bold",
          color: "#FFD700",
          fontFamily: '"Times New Roman", "Georgia", serif',
          letterSpacing: "15px",
          textAlign: "center",
          lineHeight: 1.2,
          textShadow: isComplete
            ? `0 0 ${40 + glowPulse * 30}px rgba(255, 215, 0, 0.3)`
            : "0 0 20px rgba(255, 215, 0, 0.1)",
          opacity: isComplete ? 1 : 1,
          transition: "text-shadow 0.1s",
        }}
      >
        {displayText}
        {!isComplete && (
          <span
            style={{
              opacity: showCursor ? 1 : 0,
              color: "#FFD700",
              fontWeight: "lighter",
            }}
          >
            |
          </span>
        )}
      </div>

      {/* Subtitle appears after typing completes */}
      {isComplete && (
        <div
          style={{
            opacity: interpolate(
              frame,
              [totalChars * 5 + 20, totalChars * 5 + 50],
              [0, 0.7],
              { extrapolateRight: "clamp" },
            ),
            transform: `translateY(${interpolate(
              frame,
              [totalChars * 5 + 20, totalChars * 5 + 50],
              [20, 0],
              { extrapolateRight: "clamp" },
            )}px)`,
            fontSize: 40,
            color: "rgba(255, 215, 0, 0.6)",
            fontFamily: '"Georgia", serif',
            fontWeight: "300",
            letterSpacing: "8px",
            marginTop: 20,
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.8)",
          }}
        ></div>
      )}
    </AbsoluteFill>
  );
};

export default MesopotamiaTextClips;
