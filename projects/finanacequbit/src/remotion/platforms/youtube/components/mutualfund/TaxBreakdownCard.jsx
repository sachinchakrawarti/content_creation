import React, { useState, useEffect } from "react";

export const TaxBreakdownCard = ({
  profitAmount = 200000,
  stcgRate = 20,
  ltcgRate = 12.5,
  ltcgExemption = 125000,
  currencySymbol = "₹",
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const stcgTax = profitAmount * (stcgRate / 100);
  const taxableLtcg = Math.max(0, profitAmount - ltcgExemption);
  const ltcgTax = taxableLtcg * (ltcgRate / 100);

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
            MUTUAL FUND TAXATION
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#F8FAFC",
              marginTop: "4px",
            }}
          >
            PROFIT RECOVERY: {currencySymbol}
            {profitAmount.toLocaleString("en-IN")}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* STCG Card */}
          <div
            style={{
              padding: "24px",
              borderRadius: "24px",
              backgroundColor: "#1A0F1A",
              border: "1px solid rgba(255,23,68,0.4)",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#FF1744", fontWeight: 800 }}
            >
              STCG (&lt; 1 YEAR HOLDING)
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 900,
                color: "#FF1744",
                marginTop: "8px",
              }}
            >
              {currencySymbol}
              {Math.round(stcgTax * progress).toLocaleString("en-IN")}
            </div>
            <div
              style={{ fontSize: "12px", color: "#64748B", marginTop: "6px" }}
            >
              Flat {stcgRate}% Tax on Profits
            </div>
          </div>

          {/* LTCG Card */}
          <div
            style={{
              padding: "24px",
              borderRadius: "24px",
              backgroundColor: "#0F1A15",
              border: "1px solid rgba(0,230,118,0.4)",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#00E676", fontWeight: 800 }}
            >
              LTCG (&gt; 1 YEAR HOLDING)
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 900,
                color: "#00E676",
                marginTop: "8px",
              }}
            >
              {currencySymbol}
              {Math.round(ltcgTax * progress).toLocaleString("en-IN")}
            </div>
            <div
              style={{ fontSize: "12px", color: "#64748B", marginTop: "6px" }}
            >
              {ltcgRate}% Tax above {currencySymbol}1.25L Exemption
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "16px",
            borderRadius: "16px",
            backgroundColor: "#0B111E",
            textAlign: "center",
            color: "#00F0FF",
            fontWeight: 800,
          }}
        >
          💡 TAX SAVED BY HOLDING &gt;1 YEAR: {currencySymbol}
          {Math.round((stcgTax - ltcgTax) * progress).toLocaleString("en-IN")}
        </div>
      </div>
    </div>
  );
};

export default TaxBreakdownCard;
