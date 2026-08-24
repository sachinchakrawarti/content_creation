import React from "react";

const BrandLogo = ({
  size = 52,
  color = "#ffffff",
}) => {
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: 900,
        letterSpacing: -2,
        color,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      BookQubit
    </div>
  );
};

export default BrandLogo;