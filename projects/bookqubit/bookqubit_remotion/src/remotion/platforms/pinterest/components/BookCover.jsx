import React from "react";
import { Img } from "remotion";

const PLAYFAIR = '"Playfair Display", Georgia, "Times New Roman", serif';
const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
const DEVANAGARI_SERIF = '"Noto Serif Devanagari", "Nirmala UI", "Mangal", serif';
const DEVANAGARI_SANS = '"Noto Sans Devanagari", "Nirmala UI", "Mangal", sans-serif';

const BookCover = ({
  title = "Book Title",
  author = "Author",
  palette = { bg: "#0f172a", bg2: "#1e293b", accent: "#facc15", text: "#f8fafc", muted: "#cbd5e1" },
  width = 340,
  height = 480,
  imageSrc = null,
  isHindi = false,
}) => {
  if (imageSrc) {
    return (
      <Img
        src={imageSrc}
        style={{
          width, height, objectFit: "cover",
          borderRadius: 16,
          boxShadow: "0 30px 60px rgba(0,0,0,0.65)",
          display: "block", flexShrink: 0,
        }}
      />
    );
  }

  const titleFont = isHindi ? DEVANAGARI_SERIF : PLAYFAIR;
  const titleSize = isHindi ? 34 : 42;
  const titleLineHeight = isHindi ? 1.18 : 1.02;
  const titleLetterSpacing = isHindi ? 0 : -1;

  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <div
        style={{
          position: "absolute", left: 12, right: 12, bottom: -20,
          height: 32, borderRadius: "50%",
          background: "rgba(0,0,0,0.55)", filter: "blur(20px)",
        }}
      />
      <div
        style={{
          width, height, borderRadius: 16, overflow: "hidden", position: "relative",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: "28px 26px 24px 40px",
          background: `linear-gradient(155deg, ${palette.bg2} 0%, ${palette.bg} 100%)`,
          boxShadow:
            "0 30px 60px rgba(0,0,0,0.6), inset -8px 0 20px rgba(0,0,0,0.35), inset 2px 0 6px rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 16,
            background: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 70%, rgba(255,255,255,0.08) 100%)`,
            borderTopLeftRadius: 16, borderBottomLeftRadius: 16,
          }}
        />
        <div
          style={{
            position: "absolute", right: 0, top: 4, bottom: 4, width: 4,
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.4) 100%)",
            borderTopRightRadius: 16, borderBottomRightRadius: 16,
          }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `radial-gradient(${palette.accent}26 1px, transparent 1px)`,
            backgroundSize: "16px 16px", opacity: 0.55,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: isHindi ? 0 : 4,
              color: palette.accent,
              fontWeight: 800,
              fontFamily: isHindi ? DEVANAGARI_SANS : INTER,
            }}
          >
            {isHindi ? "बुकक्यूबिट" : "BOOKQUBIT"}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: titleFont,
              fontSize: titleSize,
              lineHeight: titleLineHeight,
              fontWeight: 900,
              letterSpacing: titleLetterSpacing,
              color: palette.text,
            }}
          >
            {title.split(" ").map((w, i) => (<div key={i}>{w}</div>))}
          </div>
          <div style={{ marginTop: 14, width: 44, height: 4, background: palette.accent, borderRadius: 4 }} />
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: isHindi ? 0 : 3,
              color: palette.muted,
              marginBottom: 4,
              fontFamily: isHindi ? DEVANAGARI_SANS : INTER,
            }}
          >
            {isHindi ? "लेखक" : "WRITTEN BY"}
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 1.2,
              color: palette.text,
              fontFamily: isHindi ? DEVANAGARI_SANS : INTER,
            }}
          >
            {author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCover;