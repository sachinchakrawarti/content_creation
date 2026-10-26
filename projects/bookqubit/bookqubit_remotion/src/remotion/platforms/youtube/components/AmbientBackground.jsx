import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

const AmbientBackground = ({ palette }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Seamless loop: t goes from 0 → 2π over one full cycle
  const t = (frame / durationInFrames) * Math.PI * 2;

  const b1x = 30 + Math.sin(t) * 8;
  const b1y = 30 + Math.cos(t) * 10;
  const b2x = 70 + Math.cos(t) * 10;
  const b2y = 70 + Math.sin(t) * 8;
  const b3x = 50 + Math.sin(t * 2) * 5;
  const b3y = 45 + Math.cos(t * 2) * 4;

  const breathe = 1 + Math.sin(t * 2) * 0.04;

  return (
    <AbsoluteFill style={{ background: palette.bg, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: `${b1x}%`,
          top: `${b1y}%`,
          width: 1400,
          height: 1400,
          transform: `translate(-50%, -50%) scale(${breathe})`,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.bg2}ee 0%, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${b2x}%`,
          top: `${b2y}%`,
          width: 1200,
          height: 1200,
          transform: `translate(-50%, -50%) scale(${1 + Math.sin(t * 3) * 0.05})`,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.accent}33 0%, transparent 60%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${b3x}%`,
          top: `${b3y}%`,
          width: 900,
          height: 900,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.accent}22 0%, transparent 70%)`,
          filter: "blur(70px)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 45%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(${palette.text}06 1px, transparent 1px)`,
          backgroundSize: "3px 3px",
          opacity: 0.35,
          mixBlendMode: "overlay",
        }}
      />
    </AbsoluteFill>
  );
};

export default AmbientBackground;