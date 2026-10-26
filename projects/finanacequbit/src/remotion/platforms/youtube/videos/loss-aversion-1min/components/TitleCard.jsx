import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const TitleCard = ({ title, subtitle, titleColor = "#FFFFFF", isBig = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 14 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ 
      display: "flex", flexDirection: "column", alignItems: "center", 
      transform: `scale(${scale})`, opacity,
      padding: "60px 80px", borderRadius: "48px",
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
      boxShadow: "inset 4px 4px 10px rgba(255, 255, 255, 0.05), inset -4px -4px 12px rgba(0, 0, 0, 0.9), 30px 30px 60px rgba(0, 0, 0, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderTop: "2px solid rgba(255, 255, 255, 0.15)",
      maxWidth: "1000px", textAlign: "center", zIndex: 10
    }}>
      <h1 style={{ fontSize: isBig ? "90px" : "60px", fontWeight: 900, color: titleColor, margin: 0, letterSpacing: isBig ? "-2px" : "0", textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: "32px", color: "#A78BFA", marginTop: "20px", fontWeight: 600, textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
