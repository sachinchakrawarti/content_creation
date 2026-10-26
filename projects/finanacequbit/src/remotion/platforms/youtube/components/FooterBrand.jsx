import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const FooterBrand = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({ frame, fps, config: { damping: 14 } });
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity, transform: `scale(${scale})` }}>
      <h1 style={{ fontSize: "80px", color: "#FFFFFF", fontWeight: 900, letterSpacing: "0.2em", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>
        FINANCE QUBIT
      </h1>
      <p style={{ fontSize: "30px", color: "#A78BFA", letterSpacing: "0.3em", marginTop: "20px", fontWeight: 600, textShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}>
        LEARN FINANCE. GROW WEALTH.
      </p>
      <div style={{ marginTop: "40px", width: "100px", height: "4px", background: "#A78BFA", borderRadius: "10px", boxShadow: "0 0 20px #A78BFA" }} />
    </div>
  );
};
