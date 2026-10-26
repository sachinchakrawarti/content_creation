import React from "react";
import { useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from "remotion";

export const BullVsBearGauge: React.FC<{
  score?: number; // 0 (Extreme Bear) to 100 (Extreme Bull)
}> = ({ score = 78 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame, fps, config: { damping: 16, stiffness: 60 } });
  const needleAngle = -90 + (score / 100) * 180 * progress;

  const isBull = score >= 50;
  const statusColor = isBull ? "#00E676" : "#FF1744";

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "480px",
          padding: "32px",
          borderRadius: "32px",
          backgroundColor: "#0E1526",
          boxShadow: "24px 24px 60px #04060c, -20px -20px 50px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <span style={{ color: "#64748B", fontSize: "13px", fontWeight: 800, letterSpacing: "0.12em" }}>MARKET SENTIMENT GAUGE</span>

        <div style={{ position: "relative", width: "240px", height: "120px", overflow: "hidden" }}>
          {/* Arc Background */}
          <svg width="240" height="240" viewBox="0 0 240 240" style={{ transform: "rotate(-180deg)" }}>
            <circle cx="120" cy="120" r="90" stroke="rgba(255, 23, 68, 0.3)" strokeWidth="18" fill="none" strokeDasharray="282" strokeDashoffset="141" />
            <circle cx="120" cy="120" r="90" stroke="rgba(0, 230, 118, 0.3)" strokeWidth="18" fill="none" strokeDasharray="282" strokeDashoffset="0" />
          </svg>

          {/* Needle */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "116px",
              width: "8px",
              height: "90px",
              backgroundColor: statusColor,
              borderRadius: "4px",
              transformOrigin: "bottom center",
              transform: `rotate(${needleAngle}deg)`,
              boxShadow: `0 0 12px ${statusColor}`,
            }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "36px", fontWeight: 900, color: statusColor }}>{Math.round(score * progress)} / 100</div>
          <div style={{ fontSize: "14px", fontWeight: 800, color: "#F8FAFC", letterSpacing: "0.08em" }}>
            {score >= 75 ? "EXTREME GREED" : score >= 50 ? "BULLISH" : "BEARISH"}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};