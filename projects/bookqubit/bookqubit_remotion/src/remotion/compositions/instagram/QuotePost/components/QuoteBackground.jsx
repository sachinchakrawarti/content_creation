import React from "react";
import { AbsoluteFill, Img } from "remotion";

export const QuoteBackground = ({ src, overlay = "rgba(0,0,0,0.4)" }) => (
  <AbsoluteFill>
    {src && <Img src={src} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />}
    <AbsoluteFill style={{ backgroundColor: overlay }} />
  </AbsoluteFill>
);
