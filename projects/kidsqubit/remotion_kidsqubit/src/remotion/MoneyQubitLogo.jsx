import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from "remotion";

export const MoneyQubitLogo = ({
  primaryColor = "#00D4FF",
  secondaryColor = "#00FF87",
  bgColor = "#0A0A1A",
  size = 500,
  showText = true,
  animated = true,
}) => {
  const frame = useCurrentFrame();
  const center = size / 2;
  const radius = size * 0.2;

  // Smooth animations using spring
  const scale = animated
    ? spring({ frame, fps: 30, config: { damping: 15, stiffness: 80 } })
    : 1;

  const rotation = animated ? interpolate(frame, [0, 150], [0, 360]) : 0;

  const glowPulse = animated ? 0.6 + Math.sin(frame * 0.04) * 0.2 : 1;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Minimal radial glow background */}
      <div
        style={{
          position: "absolute",
          width: "60%",
          height: "60%",
          background: `radial-gradient(circle, ${primaryColor}20 0%, transparent 70%)`,
          borderRadius: "50%",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          transform: `scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ===== SIMPLE QUBIT LOGO ===== */}
        <svg
          width={size * 0.6}
          height={size * 0.6}
          viewBox={`0 0 ${size} ${size}`}
        >
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
            <radialGradient id="sphereGrad" cx="40%" cy="35%">
              <stop offset="0%" stopColor={primaryColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={primaryColor} stopOpacity="0.1" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g transform={`translate(${center}, ${center}) rotate(${rotation})`}>
            {/* Outer ring - only one clean ring */}
            <circle
              cx="0"
              cy="0"
              r={radius * 1.5}
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2"
              opacity="0.3"
              strokeDasharray="4 8"
            />

            {/* Main sphere */}
            <circle
              cx="0"
              cy="0"
              r={radius}
              fill="url(#sphereGrad)"
              stroke={primaryColor}
              strokeWidth="1.5"
              opacity="0.9"
            />

            {/* Glow behind dollar sign */}
            <circle
              cx="0"
              cy="0"
              r={radius * 0.5}
              fill={primaryColor}
              opacity={glowPulse * 0.15}
              filter="url(#glow)"
            />

            {/* Dollar sign - clean and bold */}
            <text
              x="0"
              y={radius * 0.35}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize={radius * 0.9}
              fontWeight="900"
              fontFamily="Arial, Helvetica, sans-serif"
              style={{
                textShadow: `0 0 40px ${primaryColor}66, 0 0 80px ${secondaryColor}44`,
              }}
            >
              $
            </text>

            {/* Small quantum bits (|0⟩ and |1⟩) - subtle */}
            <text
              x={radius * 1.3}
              y={-radius * 0.3}
              fill={primaryColor}
              fontSize={radius * 0.2}
              opacity="0.4"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              |0⟩
            </text>
            <text
              x={-radius * 1.5}
              y={radius * 0.3}
              fill={secondaryColor}
              fontSize={radius * 0.2}
              opacity="0.4"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              |1⟩
            </text>
          </g>
        </svg>

        {/* ===== TEXT ===== */}
        {showText && (
          <div style={{ textAlign: "center", marginTop: size * 0.04 }}>
            <div
              style={{
                fontSize: size * 0.08,
                fontWeight: 900,
                letterSpacing: "0.15em",
                background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "Arial, Helvetica, sans-serif",
                textTransform: "uppercase",
              }}
            >
              Money Qubit
            </div>
            <div
              style={{
                fontSize: size * 0.025,
                color: "#FFFFFF",
                opacity: 0.3,
                letterSpacing: "0.4em",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginTop: size * 0.01,
                textTransform: "uppercase",
              }}
            >
              Quantum Finance
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
