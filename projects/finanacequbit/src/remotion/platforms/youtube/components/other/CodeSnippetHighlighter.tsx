import React from "react";
import { useCurrentFrame, useVideoConfig, spring, AbsoluteFill } from "remotion";

export const CodeSnippetHighlighter: React.FC<{
  filename?: string;
  codeLines?: string[];
}> = ({
  filename = "App.tsx",
  codeLines = [
    'import { Remotion } from "remotion";',
    "",
    "export const Video = () => {",
    '  const frame = useCurrentFrame();',
    '  return <div style={{ opacity: frame / 30 }}>Hello World</div>;',
    "};",
  ],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardScale = spring({ frame, fps, config: { damping: 14, stiffness: 80 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#070B14", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "800px",
          borderRadius: "28px",
          backgroundColor: "#0E1526",
          boxShadow: "24px 24px 60px #04060c, -20px -20px 50px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
          padding: "28px",
          transform: `scale(${cardScale})`,
          fontFamily: "'Fira Code', 'Courier New', monospace",
        }}
      >
        {/* Window Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "12px" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#FF1744" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#FFD700" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#00E676" }} />
          </div>
          <span style={{ color: "#64748B", fontSize: "13px", fontWeight: 700 }}>{filename}</span>
        </div>

        {/* Code Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "16px", lineHeight: "1.6" }}>
          {codeLines.map((line, idx) => {
            const lineProgress = spring({
              frame: frame - idx * 8,
              fps,
              config: { damping: 16, stiffness: 100 },
            });

            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: "16px",
                  opacity: Math.max(0, lineProgress),
                  transform: `translateX(${(1 - Math.max(0, lineProgress)) * -20}px)`,
                }}
              >
                <span style={{ color: "#64748B", width: "24px", textAnchor: "end", userSelect: "none" }}>{idx + 1}</span>
                <span style={{ color: line.startsWith("import") || line.startsWith("export") ? "#00F0FF" : line.includes("return") ? "#FFD700" : "#F8FAFC" }}>
                  {line}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};