import React from "react";
import { BookCover } from "../components/BookCover";
import { BrandLogo } from "../components/BrandLogo";

export const Slide2Book = ({ bookData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0f0f1a, #1a1a2e)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
        gap: 60,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,132,252,0.1), transparent 70%)",
          bottom: -100,
          left: -100,
        }}
      />

      <BookCover imageUrl={bookData.bookCover} title={bookData.title} size="large" />

      <div style={{ maxWidth: 400, zIndex: 1 }}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          {bookData.title}
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#a1a1aa",
            marginBottom: 24,
          }}
        >
          by {bookData.author}
        </div>

        <div
          style={{
            fontSize: 18,
            color: "#e4e4e7",
            lineHeight: 1.6,
            marginBottom: 24,
          }}
        >
          {bookData.keyTakeaway}
        </div>

        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            borderRadius: 20,
            background: "rgba(129, 140, 248, 0.15)",
            border: "1px solid rgba(129, 140, 248, 0.3)",
            color: "#818cf8",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          #{bookData.stats.published}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 30,
          right: 30,
        }}
      >
        <BrandLogo size="small" />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#52525b",
          fontSize: 14,
          letterSpacing: 2,
        }}
      >
        2/5 • The book
      </div>
    </div>
  );
};