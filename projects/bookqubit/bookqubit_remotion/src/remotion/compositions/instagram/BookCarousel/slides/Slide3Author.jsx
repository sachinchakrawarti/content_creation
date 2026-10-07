import React from "react";
import { AbsoluteFill } from "remotion";
import SlideHeader from "../../../../shared/components/SlideHeader.jsx";

const Slide3Author = ({ book }) => {
  const initials = book.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#111827",
        color: "#fff",
        fontFamily: "Arial",
        padding: 70,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", top: 65, left: 70, right: 70 }}>
        <SlideHeader left="THE AUTHOR" index={3} color="#9ca3af" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: 850 }}>
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #818cf8, #c084fc)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 120,
            fontWeight: 900,
            color: "#fff",
            boxShadow: "0 25px 60px rgba(129,140,248,0.35)",
            border: "6px solid rgba(255,255,255,0.1)",
          }}
        >
          {initials}
        </div>

        <div style={{ marginTop: 50, fontSize: 58, lineHeight: 1, fontWeight: 900, letterSpacing: -3 }}>
          {book.author}
        </div>
        <div style={{ marginTop: 35, fontSize: 28, lineHeight: 1.55, color: "#d1d5db" }}>{book.authorBio}</div>

        <div style={{ marginTop: 50, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {book.tags.slice(0, 3).map((tag) => (
            <div key={tag} style={{ padding: "14px 22px", borderRadius: 30, border: "1px solid #4b5563", fontSize: 20, color: "#d1d5db" }}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Slide3Author;
