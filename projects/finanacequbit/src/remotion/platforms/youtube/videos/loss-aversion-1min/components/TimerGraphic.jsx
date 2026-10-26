import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";

export const TimerGraphic = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 10 } });
  const pulse = interpolate(Math.sin(frame / 5), [-1, 1], [0.5, 1]);

  return (
    <div style={{ 
      transform: `scale(${scale})`, marginTop: "40px", padding: "40px 80px", borderRadius: "40px", 
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)", 
      border: "2px solid #EF4444",
      boxShadow: `inset 4px 4px 10px rgba(255, 255, 255, 0.05), inset -4px -4px 12px rgba(0, 0, 0, 0.9), 20px 20px 40px rgba(0, 0, 0, 0.8), 0 0 60px rgba(239, 68, 68, ${pulse * 0.4})`
    }}>
      <span style={{ fontSize: "90px", fontWeight: 900, color: "#EF4444", fontVariantNumeric: "tabular-nums", textShadow: "0 0 30px rgba(239, 68, 68, 0.8)" }}>09:59</span>
    </div>
  );
};
