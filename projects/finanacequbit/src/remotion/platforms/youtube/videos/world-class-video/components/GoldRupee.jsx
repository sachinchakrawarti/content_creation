import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";

export const GoldRupee = ({ delay, shatterFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Pop in
  const scaleIn = spring({ frame: frame - delay, fps, config: { damping: 12 } });
  
  // Shatter effect (scale down to 0 quickly and fade out)
  const shatterProgress = interpolate(frame, [shatterFrame, shatterFrame + 10], [1, 0], { extrapolateRight: "clamp" });
  const shatterOpacity = interpolate(frame, [shatterFrame, shatterFrame + 10], [1, 0], { extrapolateRight: "clamp" });
  
  // Rotation for a dynamic feel
  const rotation = interpolate(frame, [0, 60], [0, 360]);

  // Final combined transform
  const finalScale = scaleIn * shatterProgress;

  return (
    <div style={{ 
      transform: `scale(${finalScale}) rotate(${rotation}deg)`, 
      opacity: shatterOpacity,
      display: "flex", justifyContent: "center", alignItems: "center",
      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))"
    }}>
      <div style={{
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, #FDE047 0%, #EAB308 60%, #A16207 100%)",
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: "inset 0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(234, 179, 8, 0.6)",
        position: "relative"
      }}>
        {/* Inner ring */}
        <div style={{ position: "absolute", inset: 15, borderRadius: "50%", border: "4px solid rgba(255,255,255,0.3)" }} />
        
        {/* Rupee Symbol */}
        <span style={{ fontSize: "150px", fontWeight: 900, color: "#0A0A0F", textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>₹</span>
      </div>
    </div>
  );
};
