import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const YTEndScreen = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Entrance Animations (Smooth spring physics)
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  const leftPanelSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 16, stiffness: 60 },
  });

  const rightPanelSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 16, stiffness: 60 },
  });

  // 2. Continuous Neon Pulse
  const pulse = interpolate(Math.sin(frame / 10), [-1, 1], [0.3, 0.7]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#07070A",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(7,7,10,0) 70%)",
          top: "-20%",
          left: "-10%",
          filter: "blur(60px)",
          opacity: pulse,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(7,7,10,0) 70%)",
          bottom: "-20%",
          right: "-10%",
          filter: "blur(60px)",
          opacity: pulse,
        }}
      />

      {/* Top Center: Massive FQ Logo */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "50%",
          transform: `translateX(-50%) scale(${logoSpring})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* FQ Clay Icon */}
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "36px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
            boxShadow: `
              inset 4px 4px 10px rgba(255, 255, 255, 0.08),
              inset -4px -4px 12px rgba(0, 0, 0, 0.9),
              20px 20px 40px rgba(0, 0, 0, 0.8),
              -10px -10px 30px rgba(139, 92, 246, 0.15)
            `,
            border: "1px solid rgba(255, 255, 255, 0.05)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-2px",
            }}
          >
            <span
              style={{
                fontSize: "65px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-2px",
              }}
            >
              F
            </span>
            <span
              style={{
                fontSize: "65px",
                fontWeight: 900,
                marginLeft: "4px",
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

        <h1
          style={{
            color: "#FFFFFF",
            fontWeight: 900,
            letterSpacing: "0.2em",
            fontSize: "42px",
            margin: 0,
            textShadow: "0 4px 15px rgba(0,0,0,0.8)",
          }}
        >
          FINANCE QUBIT
        </h1>
        <p
          style={{
            color: "#C4B5FD",
            fontWeight: 600,
            letterSpacing: "0.3em",
            fontSize: "16px",
            marginTop: "12px",
            textTransform: "uppercase",
          }}
        >
          Decode Finance. Build Wealth.
        </p>
      </div>

      {/* Bottom Section: Floating Glass Panels */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "60px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* LEFT PANEL: Subscribe */}
        <div
          style={{
            width: "450px",
            height: "240px",
            borderRadius: "32px",
            background: "rgba(28, 28, 40, 0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
            boxShadow:
              "0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transform: `translateX(${interpolate(leftPanelSpring, [0, 1], [-100, 0])}px)`,
            opacity: leftPanelSpring,
          }}
        >
          {/* Glowing Sub Button */}
          <div
            style={{
              background: "linear-gradient(90deg, #8B5CF6, #A78BFA)",
              padding: "16px 48px",
              borderRadius: "40px",
              boxShadow: `0 0 30px rgba(139, 92, 246, ${pulse})`,
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: "28px",
                letterSpacing: "0.1em",
              }}
            >
              SUBSCRIBE
            </span>
          </div>
          <p
            style={{
              color: "#9CA3AF",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              margin: 0,
            }}
          >
            🔔 Turn on notifications
          </p>
        </div>

        {/* RIGHT PANEL: Watch Next */}
        <div
          style={{
            width: "450px",
            height: "240px",
            borderRadius: "32px",
            background: "rgba(28, 28, 40, 0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            boxShadow:
              "0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transform: `translateX(${interpolate(rightPanelSpring, [0, 1], [100, 0])}px)`,
            opacity: rightPanelSpring,
          }}
        >
          {/* Glowing Watch Next Button */}
          <div
            style={{
              background: "linear-gradient(90deg, #3B82F6, #60A5FA)",
              padding: "16px 48px",
              borderRadius: "40px",
              boxShadow: `0 0 30px rgba(59, 130, 246, ${pulse})`,
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontWeight: 900,
                fontSize: "28px",
                letterSpacing: "0.1em",
              }}
            >
              WATCH NEXT
            </span>
          </div>
          <p
            style={{
              color: "#9CA3AF",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              margin: 0,
            }}
          >
            ▶️ More Finance Secrets
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
