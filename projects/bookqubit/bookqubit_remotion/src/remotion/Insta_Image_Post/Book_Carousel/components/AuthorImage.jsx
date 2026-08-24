import React from "react";

export const AuthorImage = ({ imageUrl, name, size = "medium" }) => {
  const sizes = {
    small: { diameter: 80, fontSize: 16 },
    medium: { diameter: 120, fontSize: 20 },
    large: { diameter: 160, fontSize: 24 }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: currentSize.diameter,
          height: currentSize.diameter,
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #818cf8",
          margin: "0 auto",
          boxShadow: "0 8px 32px rgba(129, 140, 248, 0.3)",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          marginTop: 12,
          fontSize: currentSize.fontSize,
          fontWeight: 600,
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {name}
      </div>
    </div>
  );
};