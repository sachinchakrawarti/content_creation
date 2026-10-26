import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const NeonText = ({ text, size = 48, color = "#FFFFFF", glowColor = null, delay = 0, weight = 900, align = "center", isGold = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const opacity = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const translateY = interpolate(frame - delay, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const textStyle = isGold ? {
    background: "linear-gradient(180deg, #FDE047 0%, #EAB308 50%, #A16207 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    filter: "drop-shadow(0 0 20px rgba(234, 179, 8, 0.5))"
  } : {
    color,
    textShadow: glowColor ? `0 0 30px ${glowColor}` : "0 4px 20px rgba(0,0,0,0.8)"
  };

  return (
    <h1 style={{
      fontSize: `${size}px`,
      fontWeight: weight,
      margin: 0,
      textAlign: align,
      opacity,
      transform: `translateY(${translateY}px)`,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: "0.05em",
      lineHeight: 1.2,
      ...textStyle
    }}>
      {text}
    </h1>
  );
};
