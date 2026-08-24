import React from "react";
import { BrandLogo } from "../components/BrandLogo";

export const Slide5CTA = ({ bookData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0f0f1a, #1a1a2e)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
      }}
    >
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.2), transparent 70%)",
          top: -100,
          left: -100,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,132,252,0.15), transparent 70%)",
          bottom: -50,
          right: -50,
        }}
      />

      <BrandLogo size="large" />

      <div
        style={{
          marginTop: 40,
          fontSize: 42,
          fontWeight: 800,
          color: "#ffffff",
          textAlign: "center",
          maxWidth: 500,
          lineHeight: 1.2,
          zIndex: 1,
        }}
      >
        Start Your Journey to Financial Wisdom Today
      </div>

      <div
        style={{
          marginTop: 16,
          fontSize: 20,
          color: "#a1a1aa",
          textAlign: "center",
          maxWidth: 400,
          zIndex: 1,
        }}
      >
        Get your copy now and transform your relationship with money
      </div>

      <div
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          zIndex: 1,
        }}
      >
        <div
          style={{
            padding: "16px 48px",
            borderRadius: 50,
            background: "linear-gradient(135deg, #818cf8, #c084fc)",
            color: "#ffffff",
            fontSize: 22,
            fontWeight: 700,
            boxShadow: "0 8px 32px rgba(129, 140, 248, 0.3)",
            cursor: "pointer",
          }}
        >
          {bookData.cta.text}
        </div>

        <div
          style={{
            fontSize: 18,
            color: "#818cf8",
            fontWeight: 500,
          }}
        >
          {bookData.cta.link}
        </div>
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
        5/5 • Get your copy
      </div>
    </div>
  );
};