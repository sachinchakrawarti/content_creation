import React from "react";
import { AbsoluteFill } from "remotion";

export const YTChannelLogo = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0A0F",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* 1. Ambient Neon Background Glows */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(10,10,15,0) 70%)",
          top: "30%",
          left: "20%",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(10,10,15,0) 70%)",
          bottom: "20%",
          right: "20%",
          filter: "blur(40px)",
        }}
      />

      {/* 2. Main Clay Container (The FQ Monogram Box) */}
      <div
        style={{
          position: "relative",
          width: "220px",
          height: "220px",
          borderRadius: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "48px",
          // The Clay Magic: Deep inner shadows + soft outer shadow
          background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
          boxShadow: `
            inset 4px 4px 10px rgba(255, 255, 255, 0.08),
            inset -4px -4px 12px rgba(0, 0, 0, 0.9),
            20px 20px 40px rgba(0, 0, 0, 0.7),
            -10px -10px 30px rgba(139, 92, 246, 0.15)
          `,
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Neon Glow Border (Floating on top of the clay) */}
        <div
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: "56px",
            border: "2px solid rgba(139, 92, 246, 0.4)",
            filter: "blur(3px)",
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
            borderRadius: "56px 56px 0 0",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.06) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* The "FQ" Typography */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            // Slight negative margin to make the letters sit perfectly in the center
            marginLeft: "-4px",
          }}
        >
          {/* White "F" */}
          <span
            style={{
              fontSize: "90px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1,
              textShadow: "0 0 20px rgba(255,255,255,0.3)",
              letterSpacing: "-2px", // Fixed: removed the -6px overlap
            }}
          >
            F
          </span>

          {/* Neon "Q" */}
          <span
            style={{
              fontSize: "90px",
              fontWeight: 900,
              lineHeight: 1,
              marginLeft: "4px", // Adds clean breathing room between F and Q
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #C4B5FD 40%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              filter: "drop-shadow(0px 0px 15px rgba(139, 92, 246, 0.8))",
              letterSpacing: "-2px",
            }}
          >
            Q
          </span>
        </div>
      </div>

      {/* 3. Premium Typography Below */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            color: "#FFFFFF",
            fontWeight: 900,
            letterSpacing: "0.3em",
            fontSize: "46px",
            lineHeight: 1,
            margin: 0,
            textShadow: "0 4px 15px rgba(0,0,0,0.8)",
          }}
        >
          FINANCE
        </h1>

        <h1
          style={{
            fontWeight: 900,
            letterSpacing: "0.3em",
            fontSize: "46px",
            lineHeight: 1,
            margin: 0,
            marginTop: "12px",
            background: "linear-gradient(180deg, #FFFFFF 0%, #A78BFA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            filter: "drop-shadow(0px 0px 20px rgba(139, 92, 246, 0.5))",
          }}
        >
          QUBIT
        </h1>

        {/* Neon Clay Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "36px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "3px",
              borderRadius: "10px",
              background: "linear-gradient(to right, transparent, #8B5CF6)",
              boxShadow: "0 0 8px #8B5CF6",
            }}
          />
          <p
            style={{
              color: "#C4B5FD",
              fontWeight: 700,
              letterSpacing: "0.4em",
              fontSize: "15px",
              textTransform: "uppercase",
              margin: 0,
              textShadow: "0 0 12px rgba(139, 92, 246, 0.8)",
            }}
          >
            Hindi
          </p>
          <div
            style={{
              width: "50px",
              height: "3px",
              borderRadius: "10px",
              background: "linear-gradient(to left, transparent, #8B5CF6)",
              boxShadow: "0 0 8px #8B5CF6",
            }}
          />
        </div>

        <p
          style={{
            color: "#9CA3AF",
            fontSize: "14px",
            marginTop: "28px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Decode Finance • Build Wealth
        </p>
      </div>
    </AbsoluteFill>
  );
};
