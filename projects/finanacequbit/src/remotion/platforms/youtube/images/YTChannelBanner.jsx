import React from "react";
import { AbsoluteFill } from "remotion";

export const YTChannelBanner = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0A0F",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 1. High-Tech Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 2. Ambient Neon Glows & Orbs */}
      <div
        style={{
          position: "absolute",
          width: "1200px",
          height: "1200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(10,10,15,0) 60%)",
          top: "-40%",
          left: "-20%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(10,10,15,0) 60%)",
          bottom: "-30%",
          right: "0%",
          filter: "blur(80px)",
        }}
      />

      {/* Floating Neon Orb */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(10,10,15,0) 70%)",
          top: "-50px",
          right: "15%",
          filter: "blur(20px)",
        }}
      />

      {/* Cinematic Light Ray */}
      <div
        style={{
          position: "absolute",
          width: "150%",
          height: "200px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
          top: "10%",
          left: "-20%",
          transform: "rotate(-15deg)",
          pointerEvents: "none",
        }}
      />

      {/* 3. Safe Area Container (Centered) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "1235px",
          height: "338px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        {/* 4. Left Side: 3D Clay FQ Monogram */}
        <div
          style={{
            position: "relative",
            width: "260px",
            height: "260px",
            borderRadius: "65px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
            boxShadow: `
              inset 5px 5px 15px rgba(255, 255, 255, 0.08),
              inset -5px -5px 15px rgba(0, 0, 0, 0.9),
              30px 30px 60px rgba(0, 0, 0, 0.8),
              -15px -15px 40px rgba(139, 92, 246, 0.15)
            `,
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Neon Glow Border */}
          <div
            style={{
              position: "absolute",
              inset: -3,
              borderRadius: "65px",
              border: "2px solid rgba(139, 92, 246, 0.5)",
              filter: "blur(5px)",
            }}
          />

          {/* Inner Glass Highlight */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "50%",
              borderRadius: "65px 65px 0 0",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* FQ Text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              marginLeft: "-6px",
            }}
          >
            <span
              style={{
                fontSize: "110px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1,
                textShadow: "0 0 30px rgba(255,255,255,0.4)",
                letterSpacing: "-3px",
              }}
            >
              F
            </span>
            <span
              style={{
                fontSize: "110px",
                fontWeight: 900,
                lineHeight: 1,
                marginLeft: "6px",
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #C4B5FD 40%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                filter: "drop-shadow(0px 0px 25px rgba(139, 92, 246, 0.9))",
                letterSpacing: "-3px",
              }}
            >
              Q
            </span>
          </div>
        </div>

        {/* 5. Right Side: Premium Typography */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            flex: 1,
            paddingLeft: "60px",
          }}
        >
          {/* Main Titles */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
            <h1
              style={{
                color: "#FFFFFF",
                fontWeight: 900,
                letterSpacing: "0.15em",
                fontSize: "85px",
                lineHeight: 1,
                margin: 0,
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              FINANCE
            </h1>
            <h1
              style={{
                fontWeight: 900,
                letterSpacing: "0.15em",
                fontSize: "85px",
                lineHeight: 1,
                margin: 0,
                background: "linear-gradient(180deg, #FFFFFF 0%, #A78BFA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                filter: "drop-shadow(0px 0px 30px rgba(139, 92, 246, 0.6))",
              }}
            >
              QUBIT
            </h1>
          </div>

          {/* Bilingual Hindi Text + Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "12px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "3px",
                borderRadius: "10px",
                background: "linear-gradient(to right, transparent, #8B5CF6)",
                boxShadow: "0 0 12px #8B5CF6",
              }}
            />
            <p
              style={{
                color: "#C4B5FD",
                fontWeight: 700,
                letterSpacing: "0.3em",
                fontSize: "22px",
                textTransform: "uppercase",
                margin: 0,
                textShadow: "0 0 15px rgba(139, 92, 246, 0.8)",
              }}
            >
              हिंदी में फाइनेंस
            </p>
            <div
              style={{
                width: "50px",
                height: "3px",
                borderRadius: "10px",
                background: "linear-gradient(to left, transparent, #8B5CF6)",
                boxShadow: "0 0 12px #8B5CF6",
              }}
            />
          </div>

          {/* Sub-badges (Tags) */}
          <div style={{ display: "flex", gap: "14px", marginBottom: "24px" }}>
            {["Crypto", "Stocks", "Personal Finance"].map((tag, i) => (
              <div
                key={i}
                style={{
                  padding: "6px 18px",
                  borderRadius: "30px",
                  border: "1px solid rgba(139, 92, 246, 0.4)",
                  background: "rgba(139, 92, 246, 0.1)",
                  color: "#C4B5FD",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  boxShadow: "inset 0 0 10px rgba(139, 92, 246, 0.1)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Tagline & Upload Schedule Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: "40px",
            }}
          >
            {/* New Tagline */}
            <p
              style={{
                color: "#E2E8F0",
                fontSize: "28px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                margin: 0,
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              Decode Finance. Build Wealth.
            </p>

            {/* Upload Schedule Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                padding: "8px 16px",
                borderRadius: "30px",
              }}
            >
              {/* Pulsing Green Dot */}
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 10px #10B981",
                }}
              />
              <span
                style={{
                  color: "#10B981",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                New Videos Every Day
              </span>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
