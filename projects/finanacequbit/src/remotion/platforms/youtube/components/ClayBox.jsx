import React from "react";

export const ClayBox = ({ children, style = {}, glowColor = null, delay = 0 }) => {
  const glow = glowColor ? `0 0 60px ${glowColor}44` : "0 20px 40px rgba(0, 0, 0, 0.8)";
  
  return (
    <div style={{
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
      borderRadius: "32px",
      padding: "40px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderTop: "2px solid rgba(255, 255, 255, 0.15)",
      boxShadow: `inset 6px 6px 12px rgba(255, 255, 255, 0.05), inset -6px -6px 16px rgba(0, 0, 0, 0.9), ${glow}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }}>
      {children}
    </div>
  );
};
