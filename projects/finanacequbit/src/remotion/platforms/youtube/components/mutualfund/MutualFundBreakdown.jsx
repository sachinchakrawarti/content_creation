import React, { useState, useEffect } from "react";

export const MutualFundBreakdown = ({
  fundName = "NIFTY 50 INDEX FUND",
  category = "LARGE CAP • DIRECT PLAN",
  monthlySIP = 10000,
  cagr = 14.5,
  expenseRatio = 0.2,
  years = 10,
  currencySymbol = "₹",
}) => {
  const [progress, setProgress] = useState(0);

  // Animate progress on load
  useEffect(() => {
    const timer = setTimeout(() => setProgress(1), 100);
    return () => clearTimeout(timer);
  }, []);

  // Smooth SVG Path
  const chartPath =
    "M 50 240 C 120 230, 200 210, 280 180 C 360 145, 450 90, 550 50";
  const pathLength = 620; // Approximate total length of the curve

  // Projected Values
  const totalInvested = monthlySIP * 12 * years;
  const projectedCorpus = Math.round(
    monthlySIP + (2820000 - monthlySIP) * progress,
  );

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#070B14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Claymorphic 3D Outer Card Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "920px",
          height: "540px",
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
        {/* Neon Ambient Background Glows */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 230, 118, 0.15) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />

        {/* Top Header & Dynamic Projected Corpus */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            zIndex: 10,
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#64748B",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              {category}
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: 900,
                color: "#F8FAFC",
                letterSpacing: "-0.02em",
                marginBottom: "6px",
              }}
            >
              {fundName}
            </div>
            <div
              style={{
                fontSize: "42px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#00E676",
                fontVariantNumeric: "tabular-nums",
                textShadow: "0 0 20px rgba(0, 230, 118, 0.4)",
              }}
            >
              {currencySymbol}
              {projectedCorpus.toLocaleString("en-IN")}
            </div>
          </div>

          {/* Claymorphic CAGR & Expense Ratio Badges */}
          <div style={{ display: "flex", gap: "12px" }}>
            <div
              style={{
                padding: "10px 18px",
                borderRadius: "20px",
                backgroundColor: "#0F1A15",
                boxShadow:
                  "inset 0 0 12px rgba(0, 230, 118, 0.2), 0 8px 18px rgba(0, 230, 118, 0.2)",
                border: "1px solid rgba(0, 230, 118, 0.4)",
                color: "#00E676",
                fontWeight: 800,
                fontSize: "16px",
                textAlign: "center",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: progress,
                transform: `scale(${0.7 + progress * 0.3})`,
              }}
            >
              <div
                style={{ fontSize: "10px", color: "#64748B", fontWeight: 700 }}
              >
                HISTORICAL CAGR
              </div>
              <div>+{cagr}%</div>
            </div>

            <div
              style={{
                padding: "10px 18px",
                borderRadius: "20px",
                backgroundColor: "#161A26",
                boxShadow:
                  "inset 0 0 12px rgba(0, 240, 255, 0.15), 0 8px 18px rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(0, 240, 255, 0.3)",
                color: "#00F0FF",
                fontWeight: 800,
                fontSize: "16px",
                textAlign: "center",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: progress,
                transform: `scale(${0.7 + progress * 0.3})`,
              }}
            >
              <div
                style={{ fontSize: "10px", color: "#64748B", fontWeight: 700 }}
              >
                EXPENSE RATIO
              </div>
              <div>{expenseRatio}%</div>
            </div>
          </div>
        </div>

        {/* SVG Neon Chart Canvas */}
        <div style={{ position: "relative", width: "100%", height: "280px" }}>
          <svg
            viewBox="0 0 600 280"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <defs>
              <linearGradient
                id="mfLineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="60%" stopColor="#00E676" />
                <stop offset="100%" stopColor="#FFD700" />
              </linearGradient>

              <linearGradient
                id="mfAreaGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00E676" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
              </linearGradient>

              <filter id="mfGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid Background */}
            {[60, 120, 180, 240].map((y) => (
              <line
                key={y}
                x1="30"
                y1={y}
                x2="570"
                y2={y}
                stroke="rgba(255, 255, 255, 0.04)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            ))}

            {/* Filled Growth Area */}
            <path
              d={`${chartPath} L 550 260 L 50 260 Z`}
              fill="url(#mfAreaGradient)"
              style={{
                transition: "opacity 1.2s ease-in-out",
                opacity: progress,
              }}
            />

            {/* Main SIP Growth Curve */}
            <path
              d={chartPath}
              fill="none"
              stroke="url(#mfLineGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - progress)}
              filter="url(#mfGlow)"
              style={{
                transition:
                  "stroke-dashoffset 1.5s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            />

            {/* Target Endpoint Tag */}
            <g
              transform="translate(550, 50)"
              style={{
                transition: "all 0.8s ease-out 1.2s",
                opacity: progress,
                transform: `translate(550px, 50px) scale(${progress})`,
              }}
            >
              <circle r="12" fill="#FFD700" opacity="0.3" />
              <circle r="6" fill="#FFD700" stroke="#FFFFFF" strokeWidth="2" />
              <text
                x="0"
                y="-20"
                fill="#FFD700"
                fontSize="14"
                fontWeight="900"
                textAnchor="middle"
                style={{ textShadow: "0 0 12px rgba(255, 215, 0, 0.8)" }}
              >
                {years} YRS WEALTH: {currencySymbol}28.2L
              </text>
            </g>
          </svg>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              padding: "10px 18px",
              borderRadius: "16px",
              backgroundColor: "#0B111E",
              boxShadow:
                "inset 2px 2px 5px rgba(0,0,0,0.6), inset -1px -1px 3px rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#00F0FF",
                boxShadow: "0 0 8px #00F0FF",
              }}
            />
            <span
              style={{ fontSize: "12px", color: "#64748B", fontWeight: 700 }}
            >
              MONTHLY SIP:
            </span>
            <span
              style={{ fontSize: "14px", color: "#F8FAFC", fontWeight: 800 }}
            >
              {currencySymbol}
              {monthlySIP.toLocaleString("en-IN")}
            </span>
          </div>

          <div
            style={{
              padding: "10px 18px",
              borderRadius: "16px",
              backgroundColor: "#0B111E",
              boxShadow:
                "inset 2px 2px 5px rgba(0,0,0,0.6), inset -1px -1px 3px rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#00E676",
                boxShadow: "0 0 8px #00E676",
              }}
            />
            <span
              style={{ fontSize: "12px", color: "#64748B", fontWeight: 700 }}
            >
              TOTAL INVESTED:
            </span>
            <span
              style={{ fontSize: "14px", color: "#00E676", fontWeight: 800 }}
            >
              {currencySymbol}
              {totalInvested.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundBreakdown;
