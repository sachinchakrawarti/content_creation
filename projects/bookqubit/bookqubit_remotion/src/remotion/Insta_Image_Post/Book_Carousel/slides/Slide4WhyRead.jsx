import React from "react";

export const Slide4WhyRead = ({ bookData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 80% 20%, #1a1a2e, #0f0f1a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          fontSize: 44,
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: 40,
        }}
      >
        Why You Should Read This Book
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          maxWidth: 700,
        }}
      >
        {bookData.whyRead.map((reason, index) => (
          <div
            key={index}
            style={{
              padding: "20px 24px",
              borderRadius: 16,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: 24,
                color: "#818cf8",
                fontWeight: 700,
              }}
            >
              {index + 1}
            </span>
            <span
              style={{
                fontSize: 18,
                color: "#e4e4e7",
                fontWeight: 500,
              }}
            >
              {reason}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 40,
          padding: "20px 30px",
          borderRadius: 16,
          background: "rgba(129, 140, 248, 0.1)",
          border: "1px solid rgba(129, 140, 248, 0.2)",
          maxWidth: 700,
        }}
      >
        <div style={{ fontSize: 20, color: "#818cf8", fontWeight: 600, marginBottom: 8 }}>
          💡 Key Insight
        </div>
        <div style={{ fontSize: 18, color: "#e4e4e7", lineHeight: 1.6 }}>
          "The hardest part of getting wealthy is not earning money, but keeping it."
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
        4/5 • Why read
      </div>
    </div>
  );
};