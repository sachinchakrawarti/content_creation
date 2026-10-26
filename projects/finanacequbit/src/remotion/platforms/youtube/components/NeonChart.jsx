import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { getLength } from "@remotion/paths";

export const NeonChart = ({ 
  dataPath = "M 50 50 L 150 80 L 250 60 L 350 150 L 450 180 L 550 250", 
  color = "#EF4444", 
  glowColor = "rgba(239, 68, 68, 0.8)",
  labels = [{ x: 30, y: 30, text: "₹10k", color: "#10B981" }, { x: 500, y: 280, text: "₹8k", color: "#EF4444" }]
}) => {
  const frame = useCurrentFrame();
  
  // Animate drawing the path
  const drawProgress = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });
  const pathLength = getLength(dataPath);

  return (
    <div style={{ 
      width: "900px", height: "450px", 
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative"
    }}>
      <svg viewBox="0 0 600 300" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Grid lines */}
        {[0, 75, 150, 225, 300].map(y => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        ))}
        
        {/* Chart Path */}
        <path d={dataPath} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={pathLength} strokeDashoffset={pathLength * (1 - drawProgress)}
          style={{ filter: `drop-shadow(0 0 15px ${glowColor})` }} />
        
        {/* Labels */}
        {labels.map((lbl, i) => (
          <text key={i} x={lbl.x} y={lbl.y} fill={lbl.color} fontSize="24" fontWeight="900" opacity={drawProgress} style={{ textShadow: `0 0 10px ${lbl.color}` }}>
            {lbl.text}
          </text>
        ))}
      </svg>
    </div>
  );
};
