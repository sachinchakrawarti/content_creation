import React from "react";
import { useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from "remotion";

export const AssetAllocationPie: React.FC<{
  allocations?: { label: string; percentage: number; color: string }[];
}> = ({
  allocations = [
    { label: "US Equities", percentage: 50, color: "#00F0FF" },
    { label: "Global Tech", percentage: 25, color: "#00E676" },
    { label: "Gold & Commodities", percentage: 15, color: "#FFD700" },
    { label: "Cash Reserves", percentage: 10, color: "#64748B" },
  ],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const springProgress = spring({ frame, fps, config: { damping: 18, stiffness: 50 } });

  let cumulativePercentage = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "640px",
          padding: "32px",
          borderRadius: "32px",
          backgroundColor: "#0E1526",
          boxShadow: "24px 24px 60px #04060c, -20px -20px 50px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
          display: "flex",
          alignItems: "center",
          gap: "36px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div style={{ position: "relative", width: "220px", height: "220px" }}>
          <svg width="220" height="220" style={{ transform: "rotate(-90deg)" }}>
            {allocations.map((item, idx) => {
              const strokeOffset = circumference - (circumference * item.percentage) / 100;
              const rotation = (cumulativePercentage / 100) * 360;
              cumulativePercentage += item.percentage;

              return (
                <circle
                  key={idx}
                  cx="110"
                  cy="110"
                  r={radius}
                  stroke={item.color}
                  strokeWidth="24"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeOffset + (1 - springProgress) * circumference}
                  style={{
                    transformOrigin: "center",
                    transform: `rotate(${rotation}deg)`,
                    filter: `drop-shadow(0 0 8px ${item.color}80)`,
                  }}
                />
              );
            })}
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
          <span style={{ color: "#64748B", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em" }}>
            PORTFOLIO ALLOCATION
          </span>
          {allocations.map((item, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                <span style={{ color: "#F8FAFC", fontSize: "15px", fontWeight: 700 }}>{item.label}</span>
              </div>
              <span style={{ color: "#64748B", fontSize: "15px", fontWeight: 800 }}>{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};