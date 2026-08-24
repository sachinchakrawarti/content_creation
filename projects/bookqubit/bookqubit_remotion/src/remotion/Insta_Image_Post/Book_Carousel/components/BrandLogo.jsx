import React from "react";

export const BrandLogo = ({ size = "medium" }) => {
  const sizes = {
    small: { fontSize: 24, gap: 4 },
    medium: { fontSize: 32, gap: 6 },
    large: { fontSize: 48, gap: 8 }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: currentSize.gap,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 800,
        color: "#ffffff",
      }}
    >
      <span style={{ fontSize: currentSize.fontSize, letterSpacing: "-1px" }}>
        Book
      </span>
      <span
        style={{
          fontSize: currentSize.fontSize,
          background: "linear-gradient(135deg, #818cf8, #c084fc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-1px",
        }}
      >
        Qubit
      </span>
    </div>
  );
};