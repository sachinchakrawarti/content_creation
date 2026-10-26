import React from "react";
import {
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  random,
} from "remotion";

export const CinematicHook = ({
  mainText = "₹1,000 LOST",
  subText = "THE MONEY TRAP",
  accentColor = "#EF4444", // Default to red for loss/danger
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = Math.max(0, frame - delay);

  // 1. Cinematic Spring for Main Text
  const textSpring = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.8 },
  });

  // 2. Fade in for Sub Text
  const subOpacity = interpolate(adjustedFrame, [15, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 3. Subtle continuous pulse for the background glow
  const pulse = interpolate(Math.sin(adjustedFrame / 10), [-1, 1], [0.4, 0.8]);

  // 4. Floating Particles Generator
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const x = random(`x-${i}`) * 100; // Random X %
    const y = random(`y-${i}`) * 100; // Random Y %
    const size = random(`s-${i}`) * 6 + 2; // Random size 2px - 8px
    const speed = random(`sp-${i}`) * 2 + 0.5;

    // Animate the particles floating upwards
    const currentY = (y - adjustedFrame * speed * 0.1) % 100;
    const opacity = interpolate(
      Math.sin(adjustedFrame / 20 + i),
      [-1, 1],
      [0.1, 0.4],
    );

    return (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${currentY < 0 ? currentY + 100 : currentY}%`,
          width: size,
          height: size,
          backgroundColor: accentColor,
          borderRadius: "50%",
          opacity: opacity,
          filter: "blur(2px)",
          boxShadow: `0 0 10px ${accentColor}`,
        }}
      />
    );
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050508",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          background: `radial-gradient(circle, ${accentColor}22 0%, transparent 70%)`,
          opacity: pulse,
          filter: "blur(80px)",
        }}
      />

      {/* Floating Particles */}
      {particles}

      {/* Main Text Container */}
      <div
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${textSpring})`,
          opacity: textSpring,
        }}
      >
        {/* Huge Impact Text */}
        <h1
          style={{
            fontSize: "180px",
            fontWeight: 900,
            color: "#FFFFFF",
            margin: 0,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            textShadow: `0 0 40px ${accentColor}88, 0 20px 40px rgba(0,0,0,0.8)`,
          }}
        >
          {mainText}
        </h1>

        {/* Glowing Subtext */}
        <div
          style={{
            opacity: subOpacity,
            marginTop: "20px",
            padding: "12px 40px",
            borderRadius: "100px",
            border: `2px solid ${accentColor}`,
            backgroundColor: `${accentColor}11`,
            boxShadow: `0 0 30px ${accentColor}44`,
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: accentColor,
              margin: 0,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            {subText}
          </h2>
        </div>
      </div>
    </div>
  );
};
