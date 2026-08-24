import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const TestVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps, fps * 2], [0, 1, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, fps * 2], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#111827",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          BookQubit
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            opacity: 0.8,
          }}
        >
          Remotion Test Video
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            opacity: 0.6,
          }}
        >
          Frame: {frame}
        </div>
      </div>
    </AbsoluteFill>
  );
};