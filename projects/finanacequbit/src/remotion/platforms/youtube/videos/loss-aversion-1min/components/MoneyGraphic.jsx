import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";
import { scale } from "@remotion/animation-utils"; // Helper for smooth scaling

export const MoneyGraphic = ({ type, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Professional Spring: Custom damping for a smooth overshoot
  const popIn = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.5 },
  });

  // Continuous subtle float after it appears
  const float = interpolate(Math.sin((frame - delay) / 15), [-1, 1], [-5, 5]);

  const isGain = type === "gain";
  const color = isGain ? "#10B981" : "#EF4444";
  const label = isGain ? "+₹1,000" : "-₹1,000";
  const emotion = isGain ? "Happy" : "Painful";

  return (
    <div style={{ 
      display: "flex", flexDirection: "column", alignItems: "center", 
      transform: `scale(${popIn}) translateY(${float}px)` // Pop-in + gentle float
    }}>
      {/* 3D Clay Coin with Neon Glow */}
      <div style={{
        width: "240px", height: "240px", borderRadius: "50%",
        background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: `inset 6px 6px 12px rgba(255, 255, 255, 0.1), inset -6px -6px 16px rgba(0, 0, 0, 0.9), 30px 30px 60px rgba(0, 0, 0, 0.9), 0 0 60px ${color}44`,
        border: `2px solid ${color}`,
        position: "relative"
      }}>
        {/* Inner neon ring */}
        <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: `1px solid ${color}66` }} />
        
        <span style={{ fontSize: "55px", fontWeight: 900, color: color, textShadow: `0 0 25px ${color}`, fontFamily: "'Inter', sans-serif" }}>{label}</span>
      </div>
      <p style={{ color: color, fontSize: "36px", fontWeight: 800, marginTop: "24px", letterSpacing: "0.1em", textTransform: "uppercase", textShadow: `0 0 20px ${color}88`, fontFamily: "'Inter', sans-serif" }}>{emotion}</p>
    </div>
  );
};
