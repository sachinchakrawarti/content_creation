import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";

export const BrainGraphic = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scaleIn = spring({ frame, fps, config: { damping: 14 } });
  
  // Split animation for GAIN vs LOSS
  const splitProgress = interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", transform: `scale(${scaleIn})` }}>
      {/* Brain Icon */}
      <div style={{ fontSize: "120px", filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))" }}>🧠</div>
      
      {/* Gain/Loss Comparison */}
      <div style={{ display: "flex", gap: `${50 + splitProgress * 200}px`, marginTop: "40px" }}>
        {/* GAIN side */}
        <div style={{ 
          padding: "20px 40px", borderRadius: "20px", 
          background: "rgba(16, 185, 129, 0.1)", border: "2px solid #10B981",
          opacity: interpolate(frame, [40, 60], [0, 1]),
          transform: `translateX(${interpolate(splitProgress, [0, 1], [-50, 0])}px)`,
          boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)"
        }}>
          <span style={{ color: "#10B981", fontSize: "40px", fontWeight: 900 }}>GAIN</span>
        </div>
        
        {/* LOSS side */}
        <div style={{ 
          padding: "20px 40px", borderRadius: "20px", 
          background: "rgba(239, 68, 68, 0.1)", border: "2px solid #EF4444",
          opacity: interpolate(frame, [40, 60], [0, 1]),
          transform: `translateX(${interpolate(splitProgress, [0, 1], [50, 0])}px)`,
          boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)"
        }}>
          <span style={{ color: "#EF4444", fontSize: "40px", fontWeight: 900 }}>LOSS</span>
        </div>
      </div>
      
      <p style={{ color: "#A78BFA", fontSize: "24px", fontWeight: 700, marginTop: "30px", opacity: interpolate(frame, [60, 80], [0, 1]), letterSpacing: "0.1em" }}>
        LOSSES AFFECT US MORE
      </p>
    </div>
  );
};
