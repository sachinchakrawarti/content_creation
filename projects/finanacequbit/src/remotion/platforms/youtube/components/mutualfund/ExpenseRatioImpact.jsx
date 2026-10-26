import React, { useState, useEffect } from "react";

export const ExpenseRatioImpact = ({
  fundName = "INDEX vs ACTIVE FUND",
  years = 20,
  monthlySIP = 10000,
  directCorpus = 9800000,
  regularCorpus = 7400000,
  currencySymbol = "₹",
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const feeImpact = directCorpus - regularCorpus;

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
          boxShadow: `
            24px 24px 60px #04060c,
            -20px -20px 50px #182440,
            inset 1px 1px 2px rgba(255, 255, 255, 0.18),
            inset -2px -2px 6px rgba(0, 0, 0, 0.6)
          `,
          padding: "36px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ zIndex: 10 }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 800,
              color: "#64748B",
              letterSpacing: "0.14em",
            }}
          >
            COST OF WEALTH DRAIN ({years} YEARS)
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#F8FAFC",
              marginTop: "4px",
            }}
          >
            {fundName}
          </div>
        </div>

        {/* Comparison Bars */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            margin: "20px 0",
          }}
        >
          {/* Direct / Low Fee Plan */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: 800,
              }}
            >
              <span style={{ color: "#00E676" }}>DIRECT PLAN (0.1% FEE)</span>
              <span style={{ color: "#00E676" }}>
                {currencySymbol}
                {((directCorpus * progress) / 100000).toFixed(1)}L
              </span>
            </div>
            <div
              style={{
                height: "20px",
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#0B111E",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress * 100}%`,
                  backgroundColor: "#00E676",
                  boxShadow: "0 0 12px #00E676",
                  transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
          </div>

          {/* Regular / High Fee Plan */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: 800,
              }}
            >
              <span style={{ color: "#FF1744" }}>REGULAR PLAN (1.5% FEE)</span>
              <span style={{ color: "#FF1744" }}>
                {currencySymbol}
                {((regularCorpus * progress) / 100000).toFixed(1)}L
              </span>
            </div>
            <div
              style={{
                height: "20px",
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#0B111E",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(regularCorpus / directCorpus) * progress * 100}%`,
                  backgroundColor: "#FF1744",
                  boxShadow: "0 0 12px #FF1744",
                  transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Warning Callout */}
        <div
          style={{
            padding: "16px 20px",
            borderRadius: "20px",
            backgroundColor: "#1A0F1A",
            border: "1px solid rgba(255, 23, 68, 0.4)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 800 }}>
            COMMISSION LOST TO FEES:
          </span>
          <span style={{ fontSize: "20px", color: "#FF1744", fontWeight: 900 }}>
            -{currencySymbol}
            {((feeImpact * progress) / 100000).toFixed(1)} LAKH
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseRatioImpact;
