import React, { useState, useEffect } from "react";

export const StepUpSipCalculator = ({
  initialSip = 10000,
  stepUpRate = 10,
  years = 15,
  regularTotal = 6700000,
  stepUpTotal = 12400000,
  currencySymbol = "₹",
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
            {years}-YEAR WEALTH ACCELERATOR
          </div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 900,
              color: "#F8FAFC",
              marginTop: "4px",
            }}
          >
            REGULAR SIP vs {stepUpRate}% STEP-UP SIP
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {/* Normal SIP Box */}
          <div
            style={{
              padding: "24px",
              borderRadius: "24px",
              backgroundColor: "#0B111E",
              boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#64748B", fontWeight: 800 }}
            >
              FLAT SIP ({currencySymbol}
              {initialSip}/mo)
            </div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#00F0FF",
                marginTop: "8px",
              }}
            >
              {currencySymbol}
              {((regularTotal * progress) / 100000).toFixed(1)}L
            </div>
          </div>

          {/* Step-Up SIP Box */}
          <div
            style={{
              padding: "24px",
              borderRadius: "24px",
              backgroundColor: "#0F1A15",
              boxShadow: "inset 0 0 15px rgba(0, 230, 118, 0.2)",
              border: "1px solid rgba(0, 230, 118, 0.4)",
            }}
          >
            <div
              style={{ fontSize: "12px", color: "#00E676", fontWeight: 800 }}
            >
              +{stepUpRate}% ANNUAL STEP-UP
            </div>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#00E676",
                marginTop: "8px",
              }}
            >
              {currencySymbol}
              {((stepUpTotal * progress) / 100000).toFixed(1)}L
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            color: "#FFD700",
            fontWeight: 800,
            fontSize: "16px",
          }}
        >
          ⚡ EXTRA WEALTH CREATED: {currencySymbol}
          {(((stepUpTotal - regularTotal) * progress) / 100000).toFixed(1)} LAKH
        </div>
      </div>
    </div>
  );
};

export default StepUpSipCalculator;
