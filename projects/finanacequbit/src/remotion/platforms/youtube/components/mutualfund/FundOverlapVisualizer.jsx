import React, { useState, useEffect } from "react";

export const FundOverlapVisualizer = ({
  fundA = "NIFTY 50 INDEX FUND",
  fundB = "LARGE & MIDCAP FUND",
  overlapPercentage = 42,
  sharedStocks = ["RELIANCE", "TCS", "HDFC BANK", "ICICI BANK", "INFOSYS"],
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(1), 100);
    return () => clearTimeout(timer);
  }, []);

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
          height: "500px",
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
            PORTFOLIO OVERLAP ANALYZER
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 900,
              color: "#F8FAFC",
              marginTop: "4px",
            }}
          >
            {fundA} <span style={{ color: "#FFD700" }}>vs</span> {fundB}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <div
              style={{
                fontSize: "52px",
                fontWeight: 900,
                color: "#FFD700",
                textShadow: "0 0 20px rgba(255,215,0,0.4)",
              }}
            >
              {Math.round(overlapPercentage * progress)}%
            </div>
            <div
              style={{ fontSize: "12px", color: "#64748B", fontWeight: 800 }}
            >
              PORTFOLIO OVERLAP
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#64748B", fontWeight: 800 }}
            >
              TOP DUPLICATE HOLDINGS:
            </div>
            {sharedStocks.map((stock, idx) => (
              <div
                key={stock}
                style={{
                  padding: "8px 14px",
                  borderRadius: "10px",
                  backgroundColor: "#0B111E",
                  color: "#00F0FF",
                  fontWeight: 700,
                  fontSize: "13px",
                  border: "1px solid rgba(0,240,255,0.2)",
                  opacity: progress,
                  transition: `opacity 0.4s ease ${idx * 0.1}s`,
                }}
              >
                ● {stock}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            fontSize: "13px",
            color: "#FF1744",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          ⚠️ HIGH OVERLAP REDUCES DIVERSIFICATION BENEFITS
        </div>
      </div>
    </div>
  );
};

export default FundOverlapVisualizer;
