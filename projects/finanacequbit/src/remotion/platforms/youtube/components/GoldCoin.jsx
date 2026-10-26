import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";

export const GoldCoin = ({ value = "₹1,000", delay = 0, shatterFrame = null, rotate = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Pop in animation
  const scaleIn = spring({ frame: frame - delay, fps, config: { damping: 12, stiffness: 100 } });
  
  // Shatter (if specified)
  const shatterProgress = shatterFrame !== null 
    ? interpolate(frame, [shatterFrame, shatterFrame + 10], [1, 0], { extrapolateRight: "clamp" })
    : 1;
    
  const shatterOpacity = shatterFrame !== null 
    ? interpolate(frame, [shatterFrame, shatterFrame + 10], [1, 0], { extrapolateRight: "clamp" })
    : 1;

  // Continuous rotation
  const rotation = rotate ? interpolate(frame, [0, 120], [0, 360]) : 0;

  return (
    <div style={{ 
      transform: `scale(${scaleIn * shatterProgress}) rotate(${rotation}deg)`, 
      opacity: shatterOpacity,
      display: "flex", justifyContent: "center", alignItems: "center",
    }}>
      <div style={{
        width: "350px", height: "350px", borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #FDE047 0%, #EAB308 50%, #A16207 100%)",
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: "inset 0 0 50px rgba(255,255,255,0.6), 0 30px 60px rgba(0,0,0,0.8), 0 0 100px rgba(234, 179, 8, 0.4)",
        position: "relative",
        border: "4px solid #A16207"
      }}>
        {/* Inner Ring */}
        <div style={{ position: "absolute", inset: 20, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.4)" }} />
        
        {/* Text */}
        <span style={{ 
          fontSize: "110px", fontWeight: 900, color: "#0A0A0F", 
          textShadow: "0 4px 10px rgba(0,0,0,0.5)",
          fontFamily: "'Inter', sans-serif"
        }}>
          {value}
        </span>
      </div>
    </div>
  );
};
