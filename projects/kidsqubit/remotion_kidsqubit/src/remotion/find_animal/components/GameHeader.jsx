// find_animal/components/GameHeader.jsx
import React from "react";

export const GameHeader = ({ targetAnimal, currentRound, totalRounds }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        padding: "0 40px",
        zIndex: 5,
      }}
    >
      <div
        style={{
          fontSize: 35,
          fontWeight: "bold",
          color: "#2D3436",
          backgroundColor: "rgba(255,255,255,0.8)",
          padding: "10px 25px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        🔍 Find the {targetAnimal.emoji} {targetAnimal.name}!
      </div>
      <div
        style={{
          fontSize: 25,
          color: "#636E72",
          backgroundColor: "rgba(255,255,255,0.8)",
          padding: "10px 20px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        ⭐ Round {currentRound}/{totalRounds}
      </div>
    </div>
  );
};
