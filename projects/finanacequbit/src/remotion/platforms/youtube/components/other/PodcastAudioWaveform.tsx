import React from "react";
import { useCurrentFrame, AbsoluteFill } from "remotion";

export const PodcastAudioWaveform: React.FC<{ barCount?: number }> = ({ barCount = 28 }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          padding: "36px 48px",
          borderRadius: "32px",
          backgroundColor: "#0E1526",
          boxShadow: "24px 24px 60px #04060c, -20px -20px 50px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          height: "160px",
        }}
      >
        {Array.from({ length: barCount }).map((_, idx) => {
          const heightMultiplier = Math.abs(Math.sin((frame + idx * 4) * 0.15)) * 90 + 10;

          return (
            <div
              key={idx}
              style={{
                width: "8px",
                height: `${heightMultiplier}px`,
                borderRadius: "4px",
                backgroundColor: idx % 2 === 0 ? "#00F0FF" : "#00E676",
                boxShadow: `0 0 10px ${idx % 2 === 0 ? "#00F0FF" : "#00E676"}80`,
              }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};