// find_animal/components/GameGrid.jsx
import React from "react";
import { spring, interpolate } from "remotion";

export const GameGrid = ({
  animals,
  targetAnimal,
  frame,
  fps,
  gridOpacity,
  foundAnimal,
  onAnimalClick,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: gridOpacity,
        width: "80%",
        maxWidth: "900px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          margin: "0 auto",
        }}
      >
        {animals.map((animal, index) => {
          const isCorrect = animal.id === targetAnimal.id;
          const delay = index * 5;
          const cardScale = spring({
            frame: frame - fps * 2 - delay,
            fps,
            config: {
              damping: 14,
              stiffness: 90,
            },
          });

          const highlightPulse =
            isCorrect && foundAnimal ? Math.sin(frame * 0.05) * 0.2 + 0.8 : 1;

          return (
            <div
              key={animal.id}
              style={{
                backgroundColor:
                  isCorrect && foundAnimal
                    ? "rgba(46, 213, 115, 0.3)"
                    : "rgba(255,255,255,0.85)",
                borderRadius: "25px",
                padding: "30px 20px",
                textAlign: "center",
                transform: `scale(${cardScale * highlightPulse})`,
                boxShadow:
                  isCorrect && foundAnimal
                    ? "0 0 50px rgba(46, 213, 115, 0.4)"
                    : "0 10px 30px rgba(0,0,0,0.1)",
                border:
                  isCorrect && foundAnimal
                    ? "6px solid #2ECC71"
                    : "3px solid rgba(255,255,255,0.5)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={() => onAnimalClick(animal.id)}
            >
              <div style={{ fontSize: 80, marginBottom: 15 }}>
                {animal.emoji}
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: "bold",
                  color: "#2D3436",
                }}
              >
                {animal.name}
              </div>
              {isCorrect && foundAnimal && (
                <div
                  style={{
                    marginTop: 15,
                    fontSize: 24,
                    color: "#27AE60",
                    fontWeight: "bold",
                    animation: "bounce 0.5s infinite",
                  }}
                >
                  ✅ Found me!
                </div>
              )}
              {!isCorrect && (
                <div
                  style={{
                    marginTop: 15,
                    fontSize: 20,
                    color: "#B2BEC3",
                  }}
                >
                  👆 Click me!
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Hint */}
      <div
        style={{
          textAlign: "center",
          marginTop: 30,
          fontSize: 22,
          color: "#636E72",
          backgroundColor: "rgba(255,255,255,0.7)",
          padding: "10px 20px",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          maxWidth: "60%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        💡 Hint: Look for the {targetAnimal.emoji}!
      </div>
    </div>
  );
};
