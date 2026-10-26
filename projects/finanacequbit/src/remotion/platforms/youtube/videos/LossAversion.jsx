import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  spring,
} from "remotion";

// --- HELPER COMPONENTS ---
const TextSlideIn = ({
  text,
  delay,
  size = "40px",
  color = "#FFFFFF",
  weight = 600,
  top = "50%",
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - delay, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame - delay, [0, 20], [30, 0], {
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        top,
        width: "100%",
        textAlign: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
        fontSize: size,
        color,
        fontWeight: weight,
        padding: "0 40px",
        textShadow: "0 4px 10px rgba(0,0,0,0.5)",
      }}
    >
      {text}
    </div>
  );
};

// --- MAIN COMPONENT ---
export const LossAversion10Min = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Global Background Glow
  const pulse = interpolate(Math.sin(frame / 20), [-1, 1], [0.1, 0.3]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0A0A0F",
        fontFamily: "'Inter', sans-serif",
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
          background: `radial-gradient(circle, rgba(139,92,246,${pulse}) 0%, rgba(10,10,15,0) 70%)`,
          top: "10%",
          left: "10%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(59,130,246,${pulse * 0.8}) 0%, rgba(10,10,15,0) 70%)`,
          bottom: "10%",
          right: "10%",
          filter: "blur(80px)",
        }}
      />

      {/* ========================================================= */}
      {/* CHAPTER 1: THE HOOK (0:00 - 2:00 | Frames 0 - 3600) */}
      {/* ========================================================= */}
      <Sequence from={0} durationInFrames={3600}>
        <AbsoluteFill
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {/* Title Card */}
          <Sequence from={0} durationInFrames={150}>
            <TextSlideIn
              text="Have you ever wondered..."
              delay={10}
              size="60px"
            />
            <TextSlideIn
              text="Why losing ₹1,000 hurts more than winning feels good?"
              delay={60}
              size="40px"
              color="#A78BFA"
              top="60%"
            />
          </Sequence>

          {/* The Graphic Example */}
          <Sequence from={150} durationInFrames={1000}>
            <TextSlideIn
              text="Imagine someone gives you ₹1,000."
              delay={0}
              size="50px"
              top="30%"
            />
            <div style={{ display: "flex", gap: "100px", marginTop: "100px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: `scale(${spring({ frame: frame - 180, fps })})`,
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "4px solid #10B981",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 50px rgba(16, 185, 129, 0.4)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "50px",
                      fontWeight: 900,
                      color: "#10B981",
                    }}
                  >
                    +₹1,000
                  </span>
                </div>
                <p
                  style={{
                    color: "#10B981",
                    fontSize: "30px",
                    fontWeight: 700,
                    marginTop: "20px",
                  }}
                >
                  Happy
                </p>
              </div>
            </div>
          </Sequence>

          {/* The Loss */}
          <Sequence from={1150} durationInFrames={1000}>
            <TextSlideIn
              text="Now imagine you lose ₹1,000."
              delay={0}
              size="50px"
              top="30%"
            />
            <div style={{ display: "flex", gap: "100px", marginTop: "100px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: `scale(${spring({ frame: frame - 1150, fps })})`,
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "4px solid #EF4444",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 50px rgba(239, 68, 68, 0.4)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "50px",
                      fontWeight: 900,
                      color: "#EF4444",
                    }}
                  >
                    -₹1,000
                  </span>
                </div>
                <p
                  style={{
                    color: "#EF4444",
                    fontSize: "30px",
                    fontWeight: 700,
                    marginTop: "20px",
                  }}
                >
                  Painful
                </p>
              </div>
            </div>
          </Sequence>

          {/* The Comparison */}
          <Sequence from={2150} durationInFrames={1450}>
            <TextSlideIn
              text="The amount is exactly the same."
              delay={0}
              size="40px"
              top="20%"
            />
            <TextSlideIn
              text="So why does it hurt so much more?"
              delay={60}
              size="60px"
              color="#A78BFA"
              top="30%"
            />
            <TextSlideIn
              text="Because of a psychological concept called..."
              delay={180}
              size="40px"
              top="60%"
            />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================= */}
      {/* CHAPTER 2: THE SCIENCE (2:00 - 4:00 | Frames 3600 - 7200) */}
      {/* ========================================================= */}
      <Sequence from={3600} durationInFrames={3600}>
        <AbsoluteFill
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Sequence from={0} durationInFrames={1200}>
            <TextSlideIn
              text="LOSS AVERSION"
              delay={20}
              size="100px"
              color="#A78BFA"
              weight={900}
              top="40%"
            />
            <TextSlideIn
              text="Introduced in 1979 by Kahneman & Tversky"
              delay={120}
              size="30px"
              top="60%"
              color="#9CA3AF"
            />
          </Sequence>
          <Sequence from={1200} durationInFrames={1200}>
            <TextSlideIn
              text="Prospect Theory"
              delay={0}
              size="70px"
              color="#FFFFFF"
              weight={900}
              top="30%"
            />
            <TextSlideIn
              text="People react more strongly to losses than equivalent gains."
              delay={90}
              size="40px"
              top="60%"
            />
          </Sequence>
          <Sequence from={2400} durationInFrames={1200}>
            <TextSlideIn
              text="This affects our everyday decisions."
              delay={0}
              size="60px"
              top="40%"
            />
            <TextSlideIn
              text="In stocks... in shopping... everywhere."
              delay={90}
              size="40px"
              color="#A78BFA"
              top="60%"
            />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================= */}
      {/* CHAPTER 3: THE STOCK MARKET (4:00 - 6:00 | Frames 7200 - 10800) */}
      {/* ========================================================= */}
      <Sequence from={7200} durationInFrames={3600}>
        <AbsoluteFill
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Sequence from={0} durationInFrames={1800}>
            <TextSlideIn
              text="You invest ₹10,000 in the stock market."
              delay={20}
              size="50px"
              top="20%"
            />
            {/* Chart Graphic */}
            <div
              style={{
                position: "relative",
                width: "600px",
                height: "300px",
                marginTop: "50px",
                borderBottom: "2px solid #333",
                borderLeft: "2px solid #333",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  borderTop: "6px solid #10B981",
                  borderRight: "6px solid #10B981",
                  transform: `scaleY(${interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" })})`,
                  transformOrigin: "bottom",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: "50%",
                  height: "60%",
                  borderTop: "6px solid #EF4444",
                  borderLeft: "6px solid #EF4444",
                  transform: `scaleY(${interpolate(frame, [60, 120], [0, 1], { extrapolateRight: "clamp" })})`,
                  transformOrigin: "top",
                }}
              />
            </div>
            <TextSlideIn
              text="It drops to ₹8,000."
              delay={90}
              size="40px"
              color="#EF4444"
              top="75%"
            />
          </Sequence>

          <Sequence from={1800} durationInFrames={1800}>
            <TextSlideIn
              text="You refuse to sell."
              delay={0}
              size="60px"
              top="30%"
              color="#EF4444"
            />
            <TextSlideIn
              text="You tell yourself: 'I'll wait until it comes back.'"
              delay={90}
              size="50px"
              top="50%"
            />
            <TextSlideIn
              text="But the fear of loss is controlling your decision."
              delay={180}
              size="40px"
              color="#A78BFA"
              top="70%"
            />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================= */}
      {/* CHAPTER 4: SHOPPING & PANIC (6:00 - 8:00 | Frames 10800 - 14400) */}
      {/* ========================================================= */}
      <Sequence from={10800} durationInFrames={3600}>
        <AbsoluteFill
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Sequence from={0} durationInFrames={1800}>
            <TextSlideIn
              text="Think about shopping."
              delay={20}
              size="60px"
              top="30%"
            />
            <div
              style={{
                marginTop: "50px",
                padding: "30px 80px",
                borderRadius: "30px",
                background: "rgba(239, 68, 68, 0.1)",
                border: "3px solid #EF4444",
                boxShadow: "0 0 50px rgba(239, 68, 68, 0.4)",
                transform: `scale(${spring({ frame: frame - 10850, fps })})`,
              }}
            >
              <span
                style={{ fontSize: "80px", fontWeight: 900, color: "#EF4444" }}
              >
                09:59
              </span>
            </div>
            <TextSlideIn
              text="A discount ends in 10 minutes!"
              delay={90}
              size="40px"
              top="70%"
            />
          </Sequence>
          <Sequence from={1800} durationInFrames={1800}>
            <TextSlideIn
              text="You feel like you are losing an opportunity."
              delay={0}
              size="50px"
              top="30%"
            />
            <TextSlideIn
              text="So you buy something you never really needed."
              delay={90}
              size="50px"
              top="50%"
              color="#EF4444"
            />
            <TextSlideIn
              text="That is Loss Aversion in real life."
              delay={180}
              size="40px"
              color="#A78BFA"
              top="70%"
            />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* ========================================================= */}
      {/* CHAPTER 5: THE SOLUTION & OUTRO (8:00 - 10:00 | Frames 14400 - 18000) */}
      {/* ========================================================= */}
      <Sequence from={14400} durationInFrames={3600}>
        <AbsoluteFill
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Sequence from={0} durationInFrames={2000}>
            <TextSlideIn
              text="How can we protect ourselves?"
              delay={20}
              size="60px"
              top="20%"
              color="#A78BFA"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                marginTop: "60px",
              }}
            >
              <TextSlideIn
                text="1. Don't make decisions in a moment of panic."
                delay={90}
                size="35px"
              />
              <TextSlideIn
                text="2. Focus on facts, not emotions."
                delay={150}
                size="35px"
              />
              <TextSlideIn
                text="3. Ask: 'Am I afraid of losing money?'"
                delay={210}
                size="35px"
              />
            </div>
          </Sequence>

          {/* Outro */}
          <Sequence from={2000} durationInFrames={1600}>
            <TextSlideIn
              text="Your brain is trying to protect you."
              delay={0}
              size="50px"
              top="30%"
            />
            <TextSlideIn
              text="But that doesn't mean every fear-driven decision is right."
              delay={60}
              size="40px"
              color="#A78BFA"
              top="50%"
            />

            {/* Brand Outro */}
            <div
              style={{
                marginTop: "100px",
                textAlign: "center",
                opacity: interpolate(frame - 14400 - 2200, [0, 30], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <h1
                style={{
                  color: "#FFFFFF",
                  fontSize: "50px",
                  fontWeight: 900,
                  letterSpacing: "0.2em",
                  margin: 0,
                }}
              >
                FINANCE QUBIT
              </h1>
              <p
                style={{
                  color: "#A78BFA",
                  fontSize: "20px",
                  letterSpacing: "0.3em",
                  marginTop: "15px",
                }}
              >
                LEARN FINANCE. GROW WEALTH.
              </p>
            </div>
          </Sequence>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
