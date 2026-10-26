import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, AbsoluteFill } from "remotion";

export const MetricKpiGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const metrics = [
    { label: "ACTIVE USERS", value: 142800, suffix: "+", color: "#00F0FF" },
    { label: "SERVER UPTIME", value: 99.98, suffix: "%", color: "#00E676" },
    { label: "AVG LATENCY", value: 14, suffix: "ms", color: "#FFD700" },
    { label: "CONVERSION RATE", value: 4.8, suffix: "%", color: "#FF1744" },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", width: "840px" }}>
        {metrics.map((item, idx) => {
          const cardSpring = spring({
            frame: frame - idx * 6,
            fps,
            config: { damping: 14, stiffness: 80 },
          });

          const currentVal = interpolate(cardSpring, [0, 1], [0, item.value]);

          return (
            <div
              key={item.label}
              style={{
                padding: "28px",
                borderRadius: "28px",
                backgroundColor: "#0E1526",
                boxShadow: "20px 20px 50px #04060c, -16px -16px 40px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
                transform: `scale(${Math.max(0, cardSpring)})`,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 800, color: "#64748B", letterSpacing: "0.12em", marginBottom: "8px" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "38px", fontWeight: 900, color: item.color, fontVariantNumeric: "tabular-nums" }}>
                {typeof item.value === "number" && item.value % 1 !== 0
                  ? currentVal.toFixed(2)
                  : Math.round(currentVal).toLocaleString()}
                {item.suffix}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};