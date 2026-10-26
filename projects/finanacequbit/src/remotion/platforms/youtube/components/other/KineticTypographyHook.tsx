import React from "react";
import { useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from "remotion";

export const KineticTypographyHook: React.FC<{
  words?: string[];
  highlightIndex?: number;
}> = ({
  words = ["STOP", "MAKING", "THESE", "3", "MISTAKES"],
  highlightIndex = 3,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", maxWidth: "900px", fontFamily: "'Inter', sans-serif" }}>
        {words.map((word, idx) => {
          const wordSpring = spring({
            frame: frame - idx * 4,
            fps,
            config: { damping: 12, stiffness: 120 },
          });

          const isHighlight = idx === highlightIndex;

          return (
            <span
              key={idx}
              style={{
                fontSize: "64px",
                fontWeight: 900,
                color: isHighlight ? "#FF1744" : "#F8FAFC",
                textShadow: isHighlight ? "0 0 30px rgba(255, 23, 68, 0.8)" : "none",
                transform: `scale(${Math.max(0, wordSpring)})`,
                opacity: Math.max(0, wordSpring),
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};