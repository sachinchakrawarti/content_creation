import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { GoldRupee } from "./components/GoldRupee";
import { ShatterParticles } from "./components/ShatterParticles";
import { PortfolioChart } from "./components/PortfolioChart";
import { BrainGraphic } from "./components/BrainGraphic";

export const WorldClassVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Global ambient pulse
  const pulse = interpolate(Math.sin(frame / 15), [-1, 1], [0.1, 0.25]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0F", fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>
      
      {/* 1. Cinematic Background Ambience */}
      <div style={{ position: "absolute", width: "1500px", height: "1500px", borderRadius: "50%", background: `radial-gradient(circle, rgba(234, 179, 8, ${pulse}) 0%, rgba(10,10,15,0) 70%)`, top: "-20%", left: "-20%", filter: "blur(100px)" }} />
      <div style={{ position: "absolute", width: "1000px", height: "1000px", borderRadius: "50%", background: `radial-gradient(circle, rgba(139, 92, 246, ${pulse}) 0%, rgba(10,10,15,0) 70%)`, bottom: "-10%", right: "-10%", filter: "blur(100px)" }} />

      {/* 2. Hook (0s - 8s) | Frames 0 - 240 */}
      <Sequence from={0} durationInFrames={240}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <Sequence from={0} durationInFrames={120}>
            <h1 style={{ fontSize: "60px", color: "#FFFFFF", fontWeight: 900, textAlign: "center", textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
              Why does losing ₹1,000<br/>hurt more than winning?
            </h1>
          </Sequence>
          <Sequence from={60} durationInFrames={180}>
            <GoldRupee delay={0} shatterFrame={160} />
            <ShatterParticles triggerFrame={160} />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* 3. Example (8s - 22s) | Frames 240 - 660 */}
      <Sequence from={240} durationInFrames={420}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <Sequence from={0} durationInFrames={180}>
            <h1 style={{ fontSize: "50px", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px", textAlign: "center" }}>
              Imagine you invest ₹10,000...
            </h1>
          </Sequence>
          <Sequence from={60} durationInFrames={360}>
            <PortfolioChart />
          </Sequence>
          <Sequence from={240} durationInFrames={180}>
            <h1 style={{ fontSize: "60px", color: "#EF4444", fontWeight: 900, marginTop: "40px", textShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}>
              ...it drops to ₹8,000
            </h1>
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* 4. Science (22s - 38s) | Frames 660 - 1140 */}
      <Sequence from={660} durationInFrames={480}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <h1 style={{ fontSize: "50px", color: "#FFFFFF", fontWeight: 800, marginBottom: "20px" }}>
            This is called
          </h1>
          <h1 style={{ fontSize: "90px", color: "#A78BFA", fontWeight: 900, letterSpacing: "0.1em", marginBottom: "40px", textShadow: "0 0 40px rgba(139, 92, 246, 0.6)" }}>
            LOSS AVERSION
          </h1>
          <Sequence from={60} durationInFrames={420}>
            <BrainGraphic />
          </Sequence>
          <Sequence from={200} durationInFrames={280}>
            <p style={{ color: "#9CA3AF", fontSize: "30px", marginTop: "30px", textAlign: "center", maxWidth: "800px" }}>
              Losses affect us more strongly than equivalent gains.
            </p>
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* 5. The Lesson (38s - 52s) | Frames 1140 - 1560 */}
      <Sequence from={1140} durationInFrames={420}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <Sequence from={0} durationInFrames={140}>
            <h1 style={{ fontSize: "50px", color: "#FFFFFF", fontWeight: 800, textAlign: "center" }}>
              That fear makes us sell in panic.
            </h1>
          </Sequence>
          <Sequence from={140} durationInFrames={140}>
            <h1 style={{ fontSize: "50px", color: "#EF4444", fontWeight: 900, textAlign: "center", textShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}>
              Or buy things just because a sale is ending.
            </h1>
          </Sequence>
          <Sequence from={280} durationInFrames={140}>
            <h1 style={{ fontSize: "50px", color: "#10B981", fontWeight: 900, textAlign: "center", textShadow: "0 0 30px rgba(16, 185, 129, 0.6)" }}>
              Pause. Look at the facts.
            </h1>
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* 6. The Brand Outro (52s - 60s) | Frames 1560 - 1800 */}
      <Sequence from={1560} durationInFrames={240}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#0A0A0F" }}>
          <div style={{ 
            display: "flex", flexDirection: "column", alignItems: "center",
            opacity: interpolate(frame - 1560, [0, 30], [0, 1], { extrapolateRight: "clamp" }),
            transform: `scale(${spring({ frame: frame - 1560, fps, config: { damping: 14 } })})`
          }}>
            <h1 style={{ fontSize: "80px", color: "#FFFFFF", fontWeight: 900, letterSpacing: "0.2em", margin: 0 }}>
              FINANCE QUBIT
            </h1>
            <p style={{ fontSize: "30px", color: "#A78BFA", letterSpacing: "0.3em", marginTop: "20px", fontWeight: 600 }}>
              LEARN FINANCE. GROW WEALTH.
            </p>
            <div style={{ marginTop: "40px", width: "100px", height: "4px", background: "#A78BFA", borderRadius: "10px", boxShadow: "0 0 20px #A78BFA" }} />
          </div>
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
