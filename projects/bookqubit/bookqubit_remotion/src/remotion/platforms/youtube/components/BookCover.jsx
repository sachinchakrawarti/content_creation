import React from "react";
import { FiBookOpen } from "react-icons/fi";

const PLAYFAIR = '"Playfair Display", Georgia, "Times New Roman", serif';
const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

const BookCover = ({ title, author, palette, width = 260, height = 380 }) => (
  <div style={{ position: "relative", flexShrink: 0 }}>
    <div
      style={{
        position: "absolute",
        left: 16,
        right: 16,
        bottom: -18,
        height: 30,
        borderRadius: "50%",
        background: "rgba(0,0,0,0.7)",
        filter: "blur(22px)",
      }}
    />
    <div
      style={{
        width,
        height,
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "22px 20px 18px 34px",
        background: `linear-gradient(155deg, ${palette.bg2} 0%, ${palette.bg} 100%)`,
        boxShadow:
          `0 26px 60px rgba(0,0,0,0.75), inset -6px 0 16px rgba(0,0,0,0.5), 0 0 0 1px ${palette.accent}55, 0 0 50px ${palette.accent}33`,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 13,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.25) 70%, rgba(255,255,255,0.06) 100%)",
          borderTopLeftRadius: 14,
          borderBottomLeftRadius: 14,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 4,
          bottom: 4,
          width: 3,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.35) 100%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8 }}>
        <FiBookOpen size={13} color={palette.accent} strokeWidth={2.4} />
        <div
          style={{
            fontSize: 9,
            letterSpacing: 3,
            color: palette.accent,
            fontWeight: 900,
            fontFamily: INTER,
          }}
        >
          BOOKQUBIT
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontFamily: PLAYFAIR,
            fontSize: 30,
            lineHeight: 1.05,
            fontWeight: 900,
            letterSpacing: -0.4,
            color: palette.text,
          }}
        >
          {title.split(" ").map((w, i) => (
            <div key={i}>{w}</div>
          ))}
        </div>
        <div
          style={{
            marginTop: 12,
            width: 36,
            height: 3,
            background: palette.accent,
            borderRadius: 4,
            boxShadow: `0 0 14px ${palette.accent}`,
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontSize: 8,
            letterSpacing: 3,
            color: palette.muted,
            marginBottom: 3,
            fontFamily: INTER,
          }}
        >
          WRITTEN BY
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            lineHeight: 1.2,
            color: palette.text,
            fontFamily: INTER,
          }}
        >
          {author}
        </div>
      </div>
    </div>
  </div>
);

export default BookCover;