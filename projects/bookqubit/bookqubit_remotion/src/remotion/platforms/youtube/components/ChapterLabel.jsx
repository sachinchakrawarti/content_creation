import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

const ChapterLabel = ({ chapter, palette, delay = 30 }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [delay, delay + 40], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        textAlign: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          fontFamily: INTER,
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 8,
          color: palette.accent,
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        Now Playing
      </div>
      <div
        style={{
          fontFamily: INTER,
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: 1,
          color: palette.muted,
        }}
      >
        {chapter}
      </div>
    </div>
  );
};

export default ChapterLabel;