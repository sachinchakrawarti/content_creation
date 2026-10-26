

import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, AbsoluteFill } from "remotion";
import { getLength } from "@remotion/paths";

export const CryptoTickerCard: React.FC<{
  symbol?: string;
  name?: string;
  price?: number;
  change?: number;
}> = ({
  symbol = "ETH",
  name = "Ethereum",
  price = 3420.50,
  change = 12.4,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sparklinePath = "M 20 60 Q 60 20, 100 50 T 180 30 T 260 10";
  const pathLength = useMemo(() => getLength(sparklinePath), [sparklinePath]);

  const drawProgress = Math.min(1, spring({ frame, fps, config: { damping: 15, stiffness: 60 } }));
  const cardScale = spring({ frame, fps, config: { damping: 12, stiffness: 90 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "480px",
          padding: "28px",
          borderRadius: "28px",
          backgroundColor: "#0E1526",
          boxShadow: "20px 20px 50px #04060c, -16px -16px 40px #182440, inset 1px 1px 2px rgba(255,255,255,0.15)",
          transform: `scale(${cardScale})`,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ color: "#F8FAFC", fontSize: "22px", fontWeight: 800 }}>{name}</div>
            <div style={{ color: "#64748B", fontSize: "14px", fontWeight: 700 }}>{symbol}/USD</div>
          </div>
          <div style={{ padding: "6px 14px", borderRadius: "999px", backgroundColor: "#0F1A15", color: "#00E676", border: "1px solid rgba(0, 230, 118, 0.4)", fontWeight: 800 }}>
            +{change}%
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#F8FAFC", fontSize: "36px", fontWeight: 900 }}>
            ${(price * Math.min(1, drawProgress)).toFixed(2)}
          </div>
          <svg width="180" height="70" viewBox="0 0 280 80" style={{ overflow: "visible" }}>
            <path
              d={sparklinePath}
              fill="none"
              stroke="#00F0FF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - drawProgress)}
              style={{ filter: "drop-shadow(0 0 10px rgba(0, 240, 255, 0.8))" }}
            />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};