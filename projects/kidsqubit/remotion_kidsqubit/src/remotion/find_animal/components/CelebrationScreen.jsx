// find_animal/components/CelebrationScreen.jsx
import React from "react";
import { AbsoluteFill } from "remotion";

export const CelebrationScreen = ({ celebrationScale, animals }) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255, 215, 0, 0.15)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        style={{
          fontSize: 120,
          transform: `scale(${celebrationScale})`,
        }}
      >
        🎉
      </div>
      <h1
        style={{
          fontSize: 80,
          fontWeight: "bold",
          color: "#2D3436",
          transform: `scale(${celebrationScale})`,
          textShadow: "0 10px 30px rgba(0,0,0,0.1)",
          marginTop: 20,
          fontFamily: "Arial Black, sans-serif",
        }}
      >
        You Found It! 🌟
      </h1>
      <p
        style={{
          fontSize: 35,
          color: "#636E72",
          marginTop: 10,
        }}
      >
        Great job! You're an animal expert!
      </p>
      <div
        style={{
          display: "flex",
          gap: 25,
          marginTop: 30,
          fontSize: 60,
        }}
      >
        {animals.slice(0, 5).map((animal) => (
          <span key={animal.id} style={{ animation: "bounce 1s infinite" }}>
            {animal.emoji}
          </span>
        ))}
      </div>
      <div
        style={{
          marginTop: 40,
          fontSize: 25,
          color: "#FF6B6B",
          backgroundColor: "rgba(255,255,255,0.8)",
          padding: "15px 30px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        🎬 Thanks for watching! Subscribe for more!
      </div>
    </AbsoluteFill>
  );
};
