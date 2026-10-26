import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, random } from "remotion";

const LiquidNeonBackground = ({ palette }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = (frame / durationInFrames) * Math.PI * 2;

  // 8 liquid blobs — each on its own orbit + speed
  const blobs = [
    { x: 30, y: 35, size: 900,  speed: 1.0,  wobble: 12, color: palette.accent,  blur: 90 },
    { x: 70, y: 65, size: 1000, speed: 1.1,  wobble: 14, color: palette.accent2, blur: 100 },
    { x: 50, y: 50, size: 800,  speed: 0.8,  wobble: 18, color: palette.bg2,     blur: 80 },
    { x: 20, y: 70, size: 700,  speed: 1.3,  wobble: 10, color: palette.accent,  blur: 110 },
    { x: 80, y: 30, size: 750,  speed: 0.9,  wobble: 15, color: palette.accent2, blur: 95 },
    { x: 45, y: 15, size: 650,  speed: 1.4,  wobble: 11, color: palette.accent,  blur: 120 },
    { x: 60, y: 85, size: 850,  speed: 1.2,  wobble: 13, color: palette.bg2,     blur: 105 },
    { x: 15, y: 45, size: 600,  speed: 0.7,  wobble: 16, color: palette.accent2, blur: 130 },
  ];

  // 30 particles
  const particles = Array.from({ length: 30 }, (_, i) => {
    const seed = i * 137;
    const baseX = random(`px-${seed}`) * 100;
    const baseY = random(`py-${seed}`) * 100;
    const speed = 0.15 + random(`ps-${seed}`) * 0.35;
    const size = 2 + random(`pz-${seed}`) * 4;
    const delay = random(`pd-${seed}`);
    // Particle rises: y decreases over time, wraps around
    const yProgress = ((t / (Math.PI * 2)) * speed + delay) % 1;
    const y = (baseY - yProgress * 100 + 100) % 100;
    const opacity = 0.15 + random(`po-${seed}`) * 0.35;
    return { x: baseX, y, size, opacity };
  });

  return (
    <AbsoluteFill style={{ background: palette.bg, overflow: "hidden" }}>
      {/* Liquid neon blobs */}
      {blobs.map((b, i) => {
        const bx = b.x + Math.sin(t * b.speed + i) * b.wobble;
        const by = b.y + Math.cos(t * b.speed * 0.9 + i) * b.wobble;
        const breathe = 1 + Math.sin(t * 2 + i * 0.5) * 0.08;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${bx}%`,
              top: `${by}%`,
              width: b.size,
              height: b.size,
              transform: `translate(-50%, -50%) scale(${breathe})`,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${b.color}cc 0%, ${b.color}33 40%, transparent 70%)`,
              filter: `blur(${b.blur}px)`,
            }}
          />
        );
      })}

      {/* Vertical gradient overlay for depth */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, ${palette.bg}55 0%, ${palette.bg}00 50%, ${palette.bg}88 100%)`,
        }}
      />

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={`p-${i}`}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: palette.text,
            opacity: p.opacity,
            filter: "blur(0.5px)",
            boxShadow: `0 0 8px ${palette.accent}`,
          }}
        />
      ))}

      {/* Scanlines / CRT overlay */}
      <AbsoluteFill
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(255,255,255,0.035) 0px,
            rgba(255,255,255,0.035) 1px,
            transparent 1px,
            transparent 4px
          )`,
          backgroundPositionY: `${(frame * 0.4) % 4}px`,
          opacity: 0.7,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* Fine grain */}
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "3px 3px",
          opacity: 0.35,
          mixBlendMode: "overlay",
        }}
      />
    </AbsoluteFill>
  );
};

export default LiquidNeonBackground;