import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const ShatterParticles = ({ triggerFrame }) => {
  const frame = useCurrentFrame();
  
  // Only show after trigger
  if (frame < triggerFrame) return null;
  
  const progress = interpolate(frame, [triggerFrame, triggerFrame + 30], [0, 1], { extrapolateRight: "clamp" });
  
  // Generate 20 particles
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const angle = (i / 20) * Math.PI * 2;
    const distance = progress * 300; // Particles fly out 300px
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    return (
      <div key={i} style={{
        position: "absolute",
        width: "15px", height: "15px",
        background: i % 2 === 0 ? "#FDE047" : "#EAB308",
        borderRadius: i % 3 === 0 ? "50%" : "2px",
        transform: `translate(${x}px, ${y}px) rotate(${progress * 360}deg)`,
        opacity: 1 - progress,
        boxShadow: "0 0 15px rgba(234, 179, 8, 0.8)"
      }} />
    );
  });

  return (
    <div style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {particles}
    </div>
  );
};
