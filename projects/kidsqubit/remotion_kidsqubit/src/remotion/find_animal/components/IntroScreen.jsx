// find_animal/components/IntroScreen.jsx
import React from "react";
import { AbsoluteFill } from "remotion";

export const IntroScreen = ({ titleText, introScale, introOpacity }) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: 100,
          transform: `scale(${introScale})`,
          opacity: introOpacity,
        }}
      >
        🎯
      </div>
      <h1
        style={{
          fontSize: 80,
          fontWeight: "bold",
          color: "#2D3436",
          transform: `scale(${introScale})`,
          opacity: introOpacity,
          marginTop: 20,
          textShadow: "0 10px 30px rgba(0,0,0,0.1)",
          fontFamily: "Arial Black, sans-serif",
        }}
      >
        {titleText}
      </h1>
      <p
        style={{
          fontSize: 35,
          color: "#636E72",
          opacity: introOpacity * 0.8,
          marginTop: 10,
        }}
      >
        Can you find the hidden animal?
      </p>
      <div
        style={{
          marginTop: 30,
          fontSize: 30,
          color: "#FF6B6B",
          opacity: introOpacity * 0.6,
        }}
      >
        👆 Look carefully!
      </div>
    </AbsoluteFill>
  );
};
