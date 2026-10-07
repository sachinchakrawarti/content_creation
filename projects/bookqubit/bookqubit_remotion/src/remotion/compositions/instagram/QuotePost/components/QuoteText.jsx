import React from "react";
import { interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";

export const QuoteText = ({ quote, textColor = "#FFFFFF", fontSize = 48, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = spring({ frame: frame - delay, fps, from: 0, to: 1, durationInFrames: 30 });
  const translateY = interpolate(spring({ frame: frame - delay, fps, from: 0, to: 1, durationInFrames: 30 }), [0, 1], [30, 0]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 40px", maxWidth: "80%", opacity, transform: `translateY(${translateY}px)`, textAlign: "center" }}>
      <div style={{ fontSize: fontSize * 2, color: textColor, opacity: 0.3, lineHeight: 0.8, marginBottom: -10 }}>"</div>
      <p style={{ color: textColor, fontSize, fontFamily: "Georgia, serif", lineHeight: 1.4, margin: 0 }}>{quote}</p>
      <div style={{ fontSize: fontSize * 2, color: textColor, opacity: 0.3, lineHeight: 0.8, marginTop: -10, alignSelf: "flex-end" }}>"</div>
    </div>
  );
};
