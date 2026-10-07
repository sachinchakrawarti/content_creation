import React from "react";
import { Img } from "remotion";

const CSSBookCover = ({
  title = "Book Title",
  author = "Author Name",
  palette = {
    bg: "#0f172a", bg2: "#1e293b", accent: "#facc15",
    text: "#f8fafc", muted: "#cbd5e1",
  },
  width = 280,
  height = 400,
  imageSrc = null, // <-- pass this later for real cover image
}) => {
  if (imageSrc) {
    return (
      <Img
        src={imageSrc}
        style={{
          width, height, objectFit: "cover",
          borderRadius: 16,
          boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
          display: "block",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width, height, borderRadius: 16, overflow: "hidden",
        position: "relative",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: 22,
        background: `linear-gradient(160deg, ${palette.bg} 0%, ${palette.bg2} 100%)`,
        boxShadow: "0 30px 60px rgba(0,0,0,0.35), inset -6px 0 14px rgba(0,0,0,0.3)",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: palette.text,
      }}
    >
      <div
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 10,
          background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(${palette.accent}22 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
          opacity: 0.6,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: palette.accent, fontWeight: 800 }}>
          BOOKQUBIT · FICTION
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontSize: width * 0.13,
            lineHeight: 1,
            fontWeight: 900,
            letterSpacing: -1.5,
            textTransform: "uppercase",
          }}
        >
          {title.split(" ").map((word, i) => (
            <div key={i}>{word}</div>
          ))}
        </div>
        <div style={{ marginTop: 14, width: 50, height: 4, background: palette.accent, borderRadius: 4 }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 10, letterSpacing: 3, color: palette.muted, marginBottom: 4 }}>
          WRITTEN BY
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2 }}>
          {author}
        </div>
      </div>
    </div>
  );
};

export default CSSBookCover;
