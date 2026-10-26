import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const GlowOrb = ({ color = "rgba(234, 179, 8, 0.3)", size = 800, position = { top: "-20%", left: "-20%" }, speed = 15 }) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / speed), [-1, 1], [0.5, 1]);

  return (
    <div style={{
      position: "absolute",
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      opacity: pulse,
      filter: "blur(80px)",
      ...position
    }} />
  );
};
