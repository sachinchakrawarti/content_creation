import React from "react";
import { AbsoluteFill } from "remotion";
import SlideHeader from "./SlideHeader.jsx";

const PostFrame = ({
  children,
  bg = "#09090b",
  fg = "#ffffff",
  label = "BOOKQUBIT",
  index = 1,
  total = 5,
  headerColor = "#a1a1aa",
}) => (
  <AbsoluteFill style={{ backgroundColor: bg, color: fg, fontFamily: "Arial, Helvetica, sans-serif", padding: 70 }}>
    <SlideHeader left={label} index={index} total={total} color={headerColor} />
    <div style={{ marginTop: 60, flex: 1, display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  </AbsoluteFill>
);

export default PostFrame;
