import React, { useMemo } from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";
import { getLength, getPointAtLength } from "@remotion/paths";

interface StockMarketGraphProps {
  delay?: number;
  startValue?: number;
  endValue?: number;
  peakValue?: number;
  currencySymbol?: string;
}

export const StockMarketGraph: React.FC<StockMarketGraphProps> = ({
  delay = 0,
  startValue = 10000,
  endValue = 8000,
  peakValue = 10480,
  currencySymbol = "₹",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  // Multi-segment Smooth Curved Bézier Path
  // Starts at ₹10,000, surges up to ₹10,480 peak, then crashes down to ₹8,000
  const chartPath =
    "M 50 120 C 120 100, 150 50, 230 40 C 310 30, 350 140, 420 200 C 480 250, 520 230, 550 260";

  // Calculate total path length for stroke animation
  const pathLength = useMemo(() => getLength(chartPath), [chartPath]);

  // Main Spring Physics for Path Drawing (0 to 1)
  const drawSpring = spring({
    frame: adjustedFrame,
    fps,
    config: {
      damping: 18,
      stiffness: 55,
      mass: 0.9,
    },
  });

  const drawProgress = Math.min(1, Math.max(0, drawSpring));

  // Active Tracer Head position along the Bézier curve
  const currentLength = pathLength * drawProgress;
  const currentPoint = useMemo(() => {
    if (currentLength <= 0) return { x: 50, y: 120 };
    return getPointAtLength(chartPath, currentLength);
  }, [chartPath, currentLength]);

  // Kinetic Real-Time Price Interpolation
  const currentPrice = Math.round(
    interpolate(
      drawProgress,
      [0, 0.35, 0.7, 1],
      [startValue, peakValue, 8900, endValue],
      {
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }
    )
  );

  // Percentage Drawdown Calculation
  const percentageChange = (
    ((currentPrice - startValue) / startValue) *
    100
  ).toFixed(1);

  const isNegative = Number(percentageChange) < 0;

  // Badge Spring Animation
  const badgeSpring = spring({
    frame: adjustedFrame - 45,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const badgeOpacity = Math.min(1, Math.max(0, badgeSpring));
  const badgeScale = interpolate(badgeSpring, [0, 1], [0.7, 1]);

  // Pulsing animation for Neon Tracer Head
  const pulseScale = 1 + Math.sin(frame * 0.2) * 0.22;

  // Claymorphic & Neon Theme Colors
  const activeColor = isNegative ? "#FF1744" : "#00E676";

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070B14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* 3D Claymorphic Outer Card Container */}
      <div
        style={{
          width: "920px",
          height: "540px",
          borderRadius: "36px",
          backgroundColor: "#0E1526",
          // Dual Soft Outer Drop Shadow + Inner Bevel Highlights for Claymorphism
          boxShadow: `
            24px 24px 60px #04060c,
            -20px -20px 50px #182440,
            inset 1px 1px 2px rgba(255, 255, 255, 0.18),
            inset -2px -2px 6px rgba(0, 0, 0, 0.6)
          `,
          padding: "36px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Background Ambient Neon Glow Orbs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 23, 68, 0.15) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />

        {/* Top Header & Dynamic Price Counter */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            zIndex: 10,
          }}
        >
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#64748B",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              PORTFOLIO MARKET VALUE
            </div>
            <div
              style={{
                fontSize: "46px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#F8FAFC",
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
              }}
            >
              {currencySymbol}
              {currentPrice.toLocaleString("en-IN")}
            </div>
          </div>

          {/* Dynamic Claymorphic Percentage Pill */}
          <div
            style={{
              opacity: badgeOpacity,
              transform: `scale(${badgeScale})`,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "9999px",
              backgroundColor: isNegative ? "#1A0F1A" : "#0F1A15",
              boxShadow: isNegative
                ? "inset 0 0 15px rgba(255, 23, 68, 0.2), 0 8px 20px rgba(255, 23, 68, 0.25)"
                : "inset 0 0 15px rgba(0, 230, 118, 0.2), 0 8px 20px rgba(0, 230, 118, 0.25)",
              border: `1px solid ${
                isNegative ? "rgba(255, 23, 68, 0.4)" : "rgba(0, 230, 118, 0.4)"
              }`,
              color: activeColor,
              fontWeight: 800,
              fontSize: "18px",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ fontSize: "14px" }}>
              {isNegative ? "▼" : "▲"}
            </span>
            <span>{Math.abs(Number(percentageChange))}%</span>
          </div>
        </div>

        {/* SVG Neon Canvas */}
        <div style={{ position: "relative", width: "100%", height: "340px" }}>
          <svg
            viewBox="0 0 600 300"
            style={{
              width: "100%",
              height: "100%",
              overflow: "visible",
            }}
          >
            <defs>
              {/* Electric Neon Gradient for Line Path */}
              <linearGradient
                id="neonLineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="40%" stopColor="#00E676" />
                <stop offset="70%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FF1744" />
              </linearGradient>

              {/* Dynamic Volumetric Glow Area Gradient */}
              <linearGradient
                id="volumetricAreaGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor={activeColor}
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor={activeColor}
                  stopOpacity="0.0"
                />
              </linearGradient>

              {/* Laser Glow Filters */}
              <filter id="laserGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur1" />
                <feGaussianBlur stdDeviation="3" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="dotGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Grid Lines & Glowing Node Points */}
            {[50, 110, 170, 230].map((y) => (
              <g key={y}>
                <line
                  x1="30"
                  y1={y}
                  x2="570"
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.04)"
                  strokeWidth="1.5"
                  strokeDasharray="8 8"
                />
                {[100, 230, 360, 490].map((x) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={y}
                    r="2"
                    fill="rgba(0, 240, 255, 0.2)"
                  />
                ))}
              </g>
            ))}

            {/* Volumetric Glowing Fill Area */}
            <path
              d={`${chartPath} L ${currentPoint.x} 280 L 50 280 Z`}
              fill="url(#volumetricAreaGradient)"
              opacity={drawProgress}
            />

            {/* Glowing Neon Chart Curve */}
            <path
              d={chartPath}
              fill="none"
              stroke="url(#neonLineGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - drawProgress)}
              filter="url(#laserGlow)"
            />

            {/* Start Pin Marker */}
            <g
              transform="translate(50, 120)"
              style={{
                opacity: Math.min(1, drawProgress * 3),
              }}
            >
              <circle r="6" fill="#00F0FF" filter="url(#dotGlow)" />
              <text
                x="0"
                y="-18"
                fill="#00F0FF"
                fontSize="12"
                fontWeight="800"
                textAnchor="middle"
                style={{ textShadow: "0 0 8px rgba(0, 240, 255, 0.8)" }}
              >
                START: {currencySymbol}10,000
              </text>
            </g>

            {/* Active Moving Neon Tracer Head */}
            {drawProgress > 0 && drawProgress < 0.98 && (
              <g transform={`translate(${currentPoint.x}, ${currentPoint.y})`}>
                <circle
                  r="16"
                  fill="#FF1744"
                  opacity="0.3"
                  transform={`scale(${pulseScale})`}
                  filter="url(#dotGlow)"
                />
                <circle r="7" fill="#FFFFFF" stroke="#FF1744" strokeWidth="3" />
              </g>
            )}

            {/* Final Crash Endpoint Marker */}
            {drawProgress >= 0.98 && (
              <g
                transform="translate(550, 260)"
                style={{
                  opacity: badgeOpacity,
                  transform: `scale(${badgeScale})`,
                }}
              >
                <circle
                  r="18"
                  fill="#FF1744"
                  opacity="0.3"
                  transform={`scale(${pulseScale})`}
                  filter="url(#dotGlow)"
                />
                <circle
                  r="7"
                  fill="#FF1744"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
                <text
                  x="0"
                  y="30"
                  fill="#FF1744"
                  fontSize="15"
                  fontWeight="900"
                  textAnchor="middle"
                  style={{ textShadow: "0 0 12px rgba(255, 23, 68, 0.9)" }}
                >
                  CRASH: {currencySymbol}8,000
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Bottom Metric Cards (Claymorphic Pills) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              padding: "10px 18px",
              borderRadius: "16px",
              backgroundColor: "#0B111E",
              boxShadow:
                "inset 2px 2px 5px rgba(0,0,0,0.6), inset -1px -1px 3px rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#00E676",
                boxShadow: "0 0 8px #00E676",
              }}
            />
            <span style={{ fontSize: "12px", color: "#64748B", fontWeight: 700 }}>
              PEAK HIGH:
            </span>
            <span style={{ fontSize: "14px", color: "#F8FAFC", fontWeight: 800 }}>
              {currencySymbol}10,480
            </span>
          </div>

          <div
            style={{
              padding: "10px 18px",
              borderRadius: "16px",
              backgroundColor: "#0B111E",
              boxShadow:
                "inset 2px 2px 5px rgba(0,0,0,0.6), inset -1px -1px 3px rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#FF1744",
                boxShadow: "0 0 8px #FF1744",
              }}
            />
            <span style={{ fontSize: "12px", color: "#64748B", fontWeight: 700 }}>
              MAX DRAWDOWN:
            </span>
            <span style={{ fontSize: "14px", color: "#FF1744", fontWeight: 800 }}>
              -23.6%
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};