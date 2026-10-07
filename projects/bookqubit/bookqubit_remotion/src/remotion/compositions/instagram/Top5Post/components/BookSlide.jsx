import React from "react";
import { AbsoluteFill } from "remotion";
import PostChrome from "./PostChrome.jsx";
import CSSBookCover from "./CSSBookCover.jsx";

const BookSlide = ({ book, index, total, data }) => {
  const p = book.palette;

  return (
    <AbsoluteFill
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(160deg, ${p.bg} 0%, ${p.bg2} 100%)`,
        color: p.text,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 30%, ${p.accent}22 0%, transparent 60%)`,
        }}
      />

      <div
        style={{
          position: "relative", zIndex: 1,
          display: "flex", flexDirection: "column", alignItems: "center",
          textAlign: "center", padding: "0 90px", gap: 40,
        }}
      >
        <CSSBookCover title={book.title} author={book.author} palette={p} width={420} height={600} />

        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2, lineHeight: 1.1, color: p.text }}>
            {book.title}
          </div>
          <div style={{ marginTop: 16, fontSize: 26, color: p.muted }}>{book.author}</div>
          <div style={{ marginTop: 30, fontSize: 28, lineHeight: 1.5, color: p.text, opacity: 0.85, maxWidth: 720 }}>
            {book.hook}
          </div>
        </div>
      </div>

      <PostChrome
        index={index}
        total={total}
        headerColor={p.muted}
        footerColor={p.muted}
        website={data.website || "www.book.qubit.com"}
        brand={data.brand || "BOOKQUBIT"}
      />
    </AbsoluteFill>
  );
};

export default BookSlide;
