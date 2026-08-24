import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const features = [
  {
    title: "DISCOVER",
    subtitle: "Find your next story",
    icon: "✦",
  },
  {
    title: "SUMMARIES",
    subtitle: "Understand more. Read smarter.",
    icon: "◈",
  },
  {
    title: "CONNECT",
    subtitle: "Share stories with readers",
    icon: "◉",
  },
];

export const InstagramEndClip: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const logoScale = spring({
    frame,
    fps,
    config: {
      damping: 12,
      stiffness: 100,
    },
  });

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#09090b",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.25), transparent 65%)",
          top: -250,
          left: -200,
        }}
      />

      {/* Main content */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 90,
        }}
      >
        {/* Logo */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            textAlign: "center",
            marginBottom: 100,
          }}
        >
          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              letterSpacing: -4,
              background: "linear-gradient(135deg, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BookQubit
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 28,
              color: "#a1a1aa",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Discover • Read • Connect
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {features.map((feature, index) => {
            const start = 25 + index * 20;

            const progress = spring({
              frame: frame - start,
              fps,
              config: {
                damping: 14,
                stiffness: 120,
              },
            });

            const translateX = interpolate(progress, [0, 1], [500, 0]);

            return (
              <div
                key={feature.title}
                style={{
                  opacity: progress,
                  transform: `translateX(${translateX}px)`,
                  display: "flex",
                  alignItems: "center",
                  padding: "32px 36px",
                  borderRadius: 28,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 20,
                    background: "linear-gradient(135deg, #818cf8, #c084fc)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
                    fontWeight: 800,
                    marginRight: 28,
                  }}
                >
                  {feature.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 34,
                      fontWeight: 800,
                      letterSpacing: 1,
                    }}
                  >
                    {feature.title}
                  </div>

                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 23,
                      color: "#a1a1aa",
                    }}
                  >
                    {feature.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 90,
            textAlign: "center",
            opacity: interpolate(
              frame,
              [fps * 3, fps * 4],
              [0, 1],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }
            ),
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              background: "linear-gradient(135deg, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your next story is waiting.
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 25,
              color: "#a1a1aa",
            }}
          >
            bookqubit.com
          </div>
        </div>
      </AbsoluteFill>

      {/* Bottom branding */}
      <div
        style={{
          position: "absolute",
          bottom: 55,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 20,
          color: "#52525b",
          letterSpacing: 2,
        }}
      >
        BOOKQUBIT
      </div>
    </AbsoluteFill>
  );
};