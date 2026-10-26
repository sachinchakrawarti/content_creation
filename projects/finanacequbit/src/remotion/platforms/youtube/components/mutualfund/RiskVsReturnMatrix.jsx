import React, { useState, useEffect } from "react";

export const RiskVsReturnMatrix = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "SMALL CAP", returnVal: 22.4, risk: "HIGH", color: "#FF1744" },
    { name: "MID CAP", returnVal: 18.2, risk: "MOD-HIGH", color: "#FFD700" },
    { name: "LARGE CAP", returnVal: 14.5, risk: "MODERATE", color: "#00E676" },
    { name: "HYBRID FUND", returnVal: 11.8, risk: "LOW-MOD", color: "#00F0FF" },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#070B14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', system-ui, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "920px",
          height: "520px",
          borderRadius: "36px",
          backgroundColor: "#0E1526",
          boxShadow:
            "24px 24px 60px #04060c, -20px -20px 50px #182440, inset 1px 1px 2px rgba(255,255,255,0.18)",
          padding: "36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid rgba(255,255,255,0.05)",
          boxSizing: "border-box",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 800,
              color: "#64748B",
              letterSpacing: "0.14em",
            }}
          >
            CATEGORY BENCHMARK (3-YEAR CAGR)
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#F8FAFC",
              marginTop: "4px",
            }}
          >
            RISK vs RETURN PROFILE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div
                style={{
                  width: "120px",
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#F8FAFC",
                }}
              >
                {cat.name}
              </div>
              <div
                style={{
                  flex: 1,
                  height: "16px",
                  borderRadius: "8px",
                  backgroundColor: "#0B111E",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(cat.returnVal / 25) * progress * 100}%`,
                    backgroundColor: cat.color,
                    boxShadow: `0 0 10px ${cat.color}`,
                    transition: `width 1s ease ${idx * 0.15}s`,
                  }}
                />
              </div>
              <div
                style={{
                  width: "80px",
                  fontSize: "14px",
                  fontWeight: 900,
                  color: cat.color,
                  textAlign: "right",
                }}
              >
                +{cat.returnVal}%
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "16px",
            fontSize: "12px",
            color: "#64748B",
            fontWeight: 700,
          }}
        >
          <span>*RETURNS BASED ON HISTORICAL CATEGORY AVERAGES</span>
          <span>ALWAYS DIVERSIFY ACCORDING TO RISK TOLERANCE</span>
        </div>
      </div>
    </div>
  );
};

export default RiskVsReturnMatrix;
