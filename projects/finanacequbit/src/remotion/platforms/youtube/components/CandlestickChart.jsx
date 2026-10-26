import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from "remotion";

interface CandleData {
  open: number;
  high: number;
  low: number;
  close: number;
  label: string;
}

export const CandlestickChart: React.FC<{
  data?: CandleData[];
  title?: string;
}> = ({
  data = [
    { open: 120, high: 140, low: 110, close: 135, label: "09:30" },
    { open: 135, high: 150, low: 130, close: 148, label: "10:30" },
    { open: 148, high: 152, low: 115, close: 120, label: "11:30" },
    { open: 120, high: 160, low: 118, close: 155, label: "12:30" },
    { open: 155, high: 180, low: 150, close: 175, label: "13:30" },
  ],
  title = "INTRADAY PRICE ACTION",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const minVal = 100;
  const maxVal = 190;
  const height = 220;

  const getY = (val: number) => height - ((val - minVal) / (maxVal - minVal)) * height;

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "720px",
          padding: "36px",
          borderRadius: "32px",
          backgroundColor: "#0E1526",
          boxShadow: "24px 24px 60px #04060c, -20px -20px 50px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#64748B", fontSize: "13px", fontWeight: 800, letterSpacing: "0.12em" }}>{title}</span>
          <div style={{ display: "flex", gap: "16px", fontSize: "12px", fontWeight: 700 }}>
            <span style={{ color: "#00E676" }}>▲ BULLISH</span>
            <span style={{ color: "#FF1744" }}>▼ BEARISH</span>
          </div>
        </div>

        <div style={{ position: "relative", width: "100%", height: `${height}px` }}>
          {/* Horizontal Grid */}
          {[120, 145, 170].map((level) => (
            <line
              key={level}
              style={{
                position: "absolute",
                top: `${getY(level)}px`,
                width: "100%",
                borderBottom: "1px stroke rgba(255,255,255,0.05)",
                borderStyle: "dashed",
              }}
            />
          ))}

          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", height: "100%" }}>
            {data.map((candle, idx) => {
              const candleSpring = spring({
                frame: frame - idx * 5,
                fps,
                config: { damping: 15, stiffness: 80 },
              });

              const isBull = candle.close >= candle.open;
              const color = isBull ? "#00E676" : "#FF1744";

              const topBody = getY(Math.max(candle.open, candle.close));
              const bottomBody = getY(Math.min(candle.open, candle.close));
              const bodyHeight = Math.max(4, bottomBody - topBody);

              const highY = getY(candle.high);
              const lowY = getY(candle.low);

              return (
                <div key={idx} style={{ position: "relative", width: "40px", height: "100%", opacity: Math.max(0, candleSpring) }}>
                  {/* Wick */}
                  <div
                    style={{
                      position: "absolute",
                      left: "19px",
                      top: `${highY}px`,
                      height: `${(lowY - highY) * Math.max(0, candleSpring)}px`,
                      width: "2px",
                      backgroundColor: color,
                      boxShadow: `0 0 6px ${color}A0`,
                    }}
                  />
                  {/* Body */}
                  <div
                    style={{
                      position: "absolute",
                      left: "6px",
                      top: `${topBody}px`,
                      height: `${bodyHeight * Math.max(0, candleSpring)}px`,
                      width: "28px",
                      borderRadius: "6px",
                      backgroundColor: color,
                      boxShadow: `0 0 16px ${color}80, inset 1px 1px 2px rgba(255,255,255,0.3)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};