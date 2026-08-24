import React from "react";
import { BrandLogo } from "../components/BrandLogo";

export const Slide1Hook = ({ bookData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 20% 30%, #1a1a2e, #0f0f1a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.15), transparent 70%)",
          top: -200,
          right: -200,
        }}
      />

      <BrandLogo size="large" />

      <div
        style={{
          marginTop: 40,
          fontSize: 52,
          fontWeight: 800,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.2,
          maxWidth: 700,
          zIndex: 1,
        }}
      >
        {bookData.quote}
      </div>

      <div
        style={{
          marginTop: 24,
          fontSize: 22,
          color: "#a1a1aa",
          textAlign: "center",
          maxWidth: 500,
          zIndex: 1,
        }}
      >
        A must-read book that transforms how you think about money
      </div>

      <div
        style={{
          marginTop: 50,
          display: "flex",
          gap: 40,
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#818cf8" }}>
            {bookData.stats.rating}
          </div>
          <div style={{ fontSize: 16, color: "#a1a1aa" }}>Rating</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#818cf8" }}>
            {bookData.stats.reviews}
          </div>
          <div style={{ fontSize: 16, color: "#a1a1aa" }}>Reviews</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, fontWeight: 700, color: "#818cf8" }}>
            {bookData.stats.pages}
          </div>
          <div style={{ fontSize: 16, color: "#a1a1aa" }}>Pages</div>
        </div>
      </div>

      {/* Bottom indicator */}
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
        1/5 • Swipe to discover
      </div>
    </div>
  );
};