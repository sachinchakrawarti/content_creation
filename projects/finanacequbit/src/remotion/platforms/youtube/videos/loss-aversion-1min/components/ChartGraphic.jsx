import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { getLength } from "@remotion/paths"; // Professional path measuring

const UP_PATH = "M 0 300 L 150 200 L 300 100";
const DOWN_PATH = "M 300 100 L 450 250 L 600 350";

export const ChartGraphic = () => {
  const frame = useCurrentFrame();
  
  // Timeline: 0-60 draws UP, 60-120 draws DOWN
  const drawUp = interpolate(frame, [10, 60], [0, 1], { extrapolateRight: "clamp" });
  const drawDown = interpolate(frame, [60, 110], [0, 1], { extrapolateRight: "clamp" });

  const upLength = getLength(UP_PATH);
  const downLength = getLength(DOWN_PATH);

  return (
    <div style={{ 
      position: "relative", width: "700px", height: "450px", marginTop: "40px", 
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)", borderRadius: "32px", padding: "40px",
      boxShadow: "inset 6px 6px 12px rgba(255, 255, 255, 0.05), inset -6px -6px 16px rgba(0, 0, 0, 0.9), 30px 30px 60px rgba(0, 0, 0, 0.9)",
      border: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <svg viewBox="0 0 600 400" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Grid lines */}
        {[0, 100, 200, 300].map(y => (
          <line key={y} x1="0" y1={y + 50} x2="600" y2={y + 50} stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        ))}
        
        {/* Green Up Trend */}
        <path d={UP_PATH} fill="none" stroke="#10B981" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={upLength} strokeDashoffset={upLength * (1 - drawUp)}
          style={{ filter: "drop-shadow(0 0 15px rgba(16, 185, 129, 0.8))" }} />
        
        {/* Red Down Crash */}
        <path d={DOWN_PATH} fill="none" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={downLength} strokeDashoffset={downLength * (1 - drawDown)}
          style={{ filter: "drop-shadow(0 0 15px rgba(239, 68, 68, 0.8))" }} />
        
        {/* Price Labels */}
        <text x="290" y="80" fill="#10B981" fontSize="24" fontWeight="900" opacity={drawUp} style={{ textShadow: "0 0 10px #10B981" }}>₹10k</text>
        <text x="560" y="340" fill="#EF4444" fontSize="24" fontWeight="900" opacity={drawDown} style={{ textShadow: "0 0 10px #EF4444" }}>₹8k</text>
      </svg>
    </div>
  );
};
