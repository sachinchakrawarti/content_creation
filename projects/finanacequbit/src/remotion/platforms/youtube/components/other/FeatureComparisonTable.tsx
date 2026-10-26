import React from "react";
import { useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from "remotion";

export const FeatureComparisonTable: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const features = [
    { name: "Unlimited Exports", free: false, pro: true },
    { name: "4K Render Quality", free: false, pro: true },
    { name: "Custom Font Assets", free: true, pro: true },
    { name: "Priority Render Pipeline", free: false, pro: true },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "780px",
          borderRadius: "32px",
          backgroundColor: "#0E1526",
          boxShadow: "24px 24px 60px #04060c, -20px -20px 50px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
          padding: "32px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "16px", fontWeight: 800 }}>
          <span style={{ color: "#64748B" }}>FEATURES</span>
          <span style={{ color: "#64748B", textAlign: "center" }}>FREE</span>
          <span style={{ color: "#00E676", textAlign: "center" }}>PRO</span>
        </div>

        {features.map((item, idx) => {
          const rowSpring = spring({
            frame: frame - idx * 5,
            fps,
            config: { damping: 15, stiffness: 90 },
          });

          return (
            <div
              key={item.name}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                opacity: Math.max(0, rowSpring),
                transform: `translateY(${(1 - Math.max(0, rowSpring)) * 15}px)`,
              }}
            >
              <span style={{ color: "#F8FAFC", fontWeight: 700 }}>{item.name}</span>
              <span style={{ textAlign: "center", color: item.free ? "#00E676" : "#64748B" }}>{item.free ? "✓" : "✕"}</span>
              <span style={{ textAlign: "center", color: item.pro ? "#00E676" : "#64748B", fontWeight: 900 }}>{item.pro ? "✓" : "✕"}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};