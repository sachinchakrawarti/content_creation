import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { getLength } from "@remotion/paths";

export const PortfolioChart = () => {
  const frame = useCurrentFrame();
  
  // Animate drawing the chart path
  const drawProgress = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });
  
  // Path from 10k to 8k (Downward trend)
  const path = "M 50 50 L 150 80 L 250 60 L 350 150 L 450 180 L 550 250";
  const pathLength = getLength(path);

  return (
    <div style={{ 
      width: "800px", height: "400px", 
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)", 
      borderRadius: "32px", padding: "40px",
      boxShadow: "inset 6px 6px 12px rgba(255, 255, 255, 0.05), inset -6px -6px 16px rgba(0, 0, 0, 0.9), 30px 30px 60px rgba(0, 0, 0, 0.9)",
      border: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <svg viewBox="0 0 600 300" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Grid */}
        {[0, 100, 200, 300].map(y => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        ))}
        
        {/* The Chart Line */}
        <path d={path} fill="none" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={pathLength} strokeDashoffset={pathLength * (1 - drawProgress)}
          style={{ filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))" }} />
        
        {/* Labels */}
        <text x="30" y="30" fill="#10B981" fontSize="24" fontWeight="900" style={{ textShadow: "0 0 10px #10B981" }}>₹10,000</text>
        <text x="500" y="280" fill="#EF4444" fontSize="24" fontWeight="900" opacity={drawProgress} style={{ textShadow: "0 0 10px #EF4444" }}>₹8,000</text>
      </svg>
    </div>
  );
};
