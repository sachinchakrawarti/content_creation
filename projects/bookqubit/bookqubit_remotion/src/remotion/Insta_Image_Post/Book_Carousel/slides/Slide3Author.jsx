import React from "react";
import { AuthorImage } from "../components/AuthorImage";

export const Slide3Author = ({ bookData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #1a1a2e, #0f0f1a)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.08), transparent 70%)",
          top: -100,
          right: -100,
        }}
      />

      <AuthorImage imageUrl={bookData.authorImage} name={bookData.author} size="large" />

      <div
        style={{
          marginTop: 40,
          fontSize: 36,
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
          maxWidth: 500,
        }}
      >
        About the Author
      </div>

      <div
        style={{
          marginTop: 16,
          fontSize: 20,
          color: "#a1a1aa",
          textAlign: "center",
          maxWidth: 500,
          lineHeight: 1.6,
        }}
      >
        Morgan Housel is a partner at The Collaborative Fund and a former columnist at The Wall Street Journal.
      </div>

      <div
        style={{
          marginTop: 30,
          display: "flex",
          gap: 20,
        }}
      >
        {[
          "NYT Bestseller",
          "Award Winner",
          "Translated to 50+ languages"
        ].map((badge) => (
          <div
            key={badge}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#d4d4d8",
              fontSize: 14,
            }}
          >
            {badge}
          </div>
        ))}
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
        3/5 • About the author
      </div>
    </div>
  );
};