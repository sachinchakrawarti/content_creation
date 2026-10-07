import React from "react";

const SlideHeader = ({ left, index, total = 5, color = "#737373" }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: 3,
      color,
      fontFamily: "Arial, Helvetica, sans-serif",
    }}
  >
    <span>{left}</span>
    <span>
      {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  </div>
);

export default SlideHeader;
