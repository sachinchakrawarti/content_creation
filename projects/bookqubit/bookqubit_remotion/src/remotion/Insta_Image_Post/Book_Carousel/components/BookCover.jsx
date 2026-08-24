import React from "react";

export const BookCover = ({ imageUrl, title, size = "medium" }) => {
  const sizes = {
    small: { width: 160, height: 220, shadow: "0 8px 32px rgba(0,0,0,0.4)" },
    medium: { width: 200, height: 280, shadow: "0 12px 48px rgba(0,0,0,0.5)" },
    large: { width: 260, height: 360, shadow: "0 16px 64px rgba(0,0,0,0.6)" }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div
      style={{
        width: currentSize.width,
        height: currentSize.height,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: currentSize.shadow,
        transform: "rotate(-2deg) perspective(800px) rotateY(8deg)",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 20px",
          background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {title}
      </div>
    </div>
  );
};