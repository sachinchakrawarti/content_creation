import React from "react";

const CSSBookCover = ({
  title = "Everybody Lies",
  author = "Seth Stephens-Davidowitz",
  width = 390,
  height = 540,
  palette = {
    bg: "#0f172a",
    bg2: "#1e293b",
    accent: "#facc15",
    text: "#f8fafc",
    muted: "#cbd5e1",
  },
}) => (
  <div
    style={{
      width,
      height,
      borderRadius: 20,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 28,
      background: `linear-gradient(160deg, ${palette.bg} 0%, ${palette.bg2} 100%)`,
      boxShadow: "0 30px 70px rgba(0,0,0,0.45), inset -8px 0 18px rgba(0,0,0,0.35)",
      fontFamily: "Arial, Helvetica, sans-serif",
      color: palette.text,
    }}
  >
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 14,
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(255,255,255,0.05) 100%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(${palette.accent}22 1px, transparent 1px)`,
        backgroundSize: "18px 18px",
        opacity: 0.6,
      }}
    />
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ fontSize: 12, letterSpacing: 4, color: palette.accent, fontWeight: 700 }}>
        BOOKQUBIT · NON-FICTION
      </div>
    </div>
    <div style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          fontSize: width * 0.13,
          lineHeight: 1,
          fontWeight: 900,
          letterSpacing: -2,
          textTransform: "uppercase",
        }}
      >
        {title.split(" ").map((word, i) => (
          <div key={i}>{word}</div>
        ))}
      </div>
      <div style={{ marginTop: 18, width: 60, height: 4, background: palette.accent, borderRadius: 4 }} />
    </div>
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ fontSize: 12, letterSpacing: 3, color: palette.muted, marginBottom: 6 }}>WRITTEN BY</div>
      <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.2 }}>{author}</div>
    </div>
  </div>
);

export default CSSBookCover;
