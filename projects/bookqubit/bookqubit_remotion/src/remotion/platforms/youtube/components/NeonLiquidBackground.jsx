import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

const NeonLiquidBackground = ({ palette }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Perfect loop: 0 → 2π over the whole video
  const t = (frame / durationInFrames) * Math.PI * 2;

  // Three liquid blobs on independent orbits
  const a1 = { x: 30 + Math.sin(t) * 12, y: 35 + Math.cos(t * 1.2) * 10 };
  const a2 = { x: 70 + Math.cos(t * 1.1) * 12, y: 65 + Math.sin(t * 0.9) * 10 };
  const a3 = { x: 50 + Math.sin(t * 0.8) * 18, y: 50 + Math.cos(t * 1.3) * 12 };

  const breathe1 = 1 + Math.sin(t * 2) * 0.08;
  const breathe2 = 1 + Math.cos(t * 2.4) * 0.09;
  const breathe3 = 1 + Math.sin(t * 1.8) * 0.06;

  return (
    <AbsoluteFill style={{ background: palette.bg, overflow: "hidden" }}>
      {/* Blob 1 — accent */}
      <div
        style={{
          position: "absolute",
          left: `${a1.x}%`,
          top: `${a1.y}%`,
          width: 1100,
          height: 1100,
          transform: `translate(-50%, -50%) scale(${breathe1})`,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.accent}cc 0%, ${palette.accent}33 40%, transparent 70%)`,
          filter: "blur(90px)",
        }}
      />

      {/* Blob 2 — accent2 */}
      <div
        style={{
          position: "absolute",
          left: `${a2.x}%`,
          top: `${a2.y}%`,
          width: 1200,
          height: 1200,
          transform: `translate(-50%, -50%) scale(${breathe2})`,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.accent2}cc 0%, ${palette.accent2}33 40%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      {/* Blob 3 — deep bgradient mix */}
      <div
        style={{
          position: "absolute",
          left: `${a3.x}%`,
          top: `${a3.y}%`,
          width: 1000,
          height: 1000,
          transform: `translate(-50%, -50%) scale(${breathe3})`,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.bg2}ee 0%, transparent 65%)`,
          filter: "blur(80px)",
        }}
      />

      {/* Subtle color shift overlay */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg, ${palette.bg}00 0%, ${palette.bg}cc 100%)`,
        }}
      />

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 35%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Very fine grain */}
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "3px 3px",
          opacity: 0.4,
          mixBlendMode: "overlay",
        }}
      />
    </AbsoluteFill>
  );
};

export default NeonLiquidBackground;