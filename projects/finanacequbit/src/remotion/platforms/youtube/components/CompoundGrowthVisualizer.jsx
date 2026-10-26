import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, AbsoluteFill } from "remotion";

export const CompoundGrowthVisualizer: React.FC<{
  initialInvested?: number;
  totalReturn?: number;
  years?: number;
}> = ({
  initialInvested = 50000,
  totalReturn = 240000,
  years = 20,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame, fps, config: { damping: 18, stiffness: 50 } });

  const currentInvested = Math.round(initialInvested * Math.min(1, progress));
  const currentTotal = Math.round(interpolate(progress, [0, 1], [initialInvested, totalReturn]));
  const currentInterest = currentTotal - currentInvested;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "600px",
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
        <div style={{ color: "#64748B", fontSize: "13px", fontWeight: 800, letterSpacing: "0.12em" }}>
          {years}-YEAR COMPOUND GROWTH
        </div>

        <div style={{ fontSize: "44px", fontWeight: 900, color: "#F8FAFC" }}>
          ${currentTotal.toLocaleString()}
        </div>

        {/* Stacked Growth Bar */}
        <div
          style={{
            height: "28px",
            width: "100%",
            borderRadius: "14px",
            backgroundColor: "#0B111E",
            overflow: "hidden",
            display: "flex",
            boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.6)",
          }}
        >
          {/* Principal Portion */}
          <div
            style={{
              width: `${(currentInvested / totalReturn) * 100}%`,
              height: "100%",
              backgroundColor: "#00F0FF",
              boxShadow: "0 0 12px #00F0FF",
            }}
          />
          {/* Interest Portion */}
          <div
            style={{
              width: `${(currentInterest / totalReturn) * 100}%`,
              height: "100%",
              backgroundColor: "#00E676",
              boxShadow: "0 0 12px #00E676",
            }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: 700 }}>
          <div style={{ color: "#00F0FF" }}>● Principal: ${currentInvested.toLocaleString()}</div>
          <div style={{ color: "#00E676" }}>● Compound Interest: ${currentInterest.toLocaleString()}</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};