import React from "react";
import { Img } from "remotion";

const AuthorImage = ({ src, size = 300 }) => {
  return (
    <Img
      src={src}
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: "50%",
        display: "block",
        border: "6px solid rgba(255,255,255,0.9)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
      }}
    />
  );
};

export default AuthorImage;