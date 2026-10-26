import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, AbsoluteFill } from "remotion";

export const DebtPayoffTimeline: React.FC<{
  initialDebt?: number;
  monthsCount?: number;
}> = ({ initialDebt = 45000, monthsCount = 12 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame, fps, config: { damping: 20, stiffness: 45 } });

  const remainingDebt = Math.round(interpolate(progress, [0, 1], [initialDebt, 0]));
  const paidAmount = initialDebt - remainingDebt;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "580px",
          padding: "36px",
          borderRadius: "32px",
          backgroundColor: "#0E1526",
          boxShadow: "24px 24px 60px #04060c, -20px -20px 50px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
          fontFamily: "'Inter', sans-serif",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#64748B", fontSize: "13px", fontWeight: 800, letterSpacing: "0.12em" }}>DEBT PAYOFF TRAJECTORY</span>
          <span style={{ color: "#00E676", fontSize: "14px", fontWeight: 800 }}>{Math.round(progress * 100)}% FREEDOM</span>
        </div>

        <div style={{ fontSize: "42px", fontWeight: 900, color: remainingDebt === 0 ? "#00E676" : "#FF1744" }}>
          ${remainingDebt.toLocaleString()}
        </div>

        <div style={{ height: "18px", width: "100%", borderRadius: "999px", backgroundColor: "#0B111E", overflow: "hidden", boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.6)" }}>
          <div style={{ width: `${(paidAmount / initialDebt) * 100}%`, height: "100%", backgroundColor: "#00E676", boxShadow: "0 0 12px #00E676" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#64748B", fontSize: "13px", fontWeight: 700 }}>
          <span>Paid: ${paidAmount.toLocaleString()}</span>
          <span>Goal: ${initialDebt.toLocaleString()}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};