import React from "react";
import { Img } from "remotion";

const BookCover = ({ src, width = 390, height = 540 }) => {
  return (
    <Img
      src={src}
      style={{
        width,
        height,
        objectFit: "cover",
        borderRadius: 20,
        display: "block",
        boxShadow: "0 30px 70px rgba(0, 0, 0, 0.35)",
      }}
    />
  );
};

export default BookCover;