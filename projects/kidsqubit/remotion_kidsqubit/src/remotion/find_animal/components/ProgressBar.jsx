// find_animal/components/ProgressBar.jsx
import React from "react";

export const ProgressBar = ({ currentRound, totalRounds, frame, fps }) => {
  const progress = (currentRound - 1) / totalRounds;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 40,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 15,
        backgroundColor: "rgba(255,255,255,0.8)",
        padding: "10px 30px",
        borderRadius: "30px",
        backdropFilter: "blur(10px)",
        alignItems: "center",
      }}
    >
      {Array.from({ length: totalRounds }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: i < currentRound ? "#2ECC71" : "#DFE6E9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            color: i < currentRound ? "white" : "#636E72",
            transition: "all 0.3s ease",
          }}
        >
          {i < currentRound ? "⭐" : i + 1}
        </div>
      ))}
      <div
        style={{
          marginLeft: 10,
          fontSize: 18,
          color: "#636E72",
        }}
      >
        {Math.round(progress * 100)}%
      </div>
    </div>
  );
};
