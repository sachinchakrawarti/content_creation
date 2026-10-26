import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { MoneyGraphic } from "./components/MoneyGraphic";
import { ChartGraphic } from "./components/ChartGraphic";

export const VisualHook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background pulse
  const pulse = interpolate(Math.sin(frame / 10), [-1, 1], [0.1, 0.3]);

  // Cinematic Text Sequence
  const titleSpring = spring({ frame, fps, config: { damping: 14 } });
  
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0F", fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>
      
      {/* Background Ambience */}
      <div style={{ position: "absolute", width: "1200px", height: "1200px", borderRadius: "50%", background: `radial-gradient(circle, rgba(139,92,246,${pulse}) 0%, rgba(10,10,15,0) 70%)`, top: "-20%", left: "-20%", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", width: "800px", height: "800px", borderRadius: "50%", background: `radial-gradient(circle, rgba(59,130,246,${pulse * 0.8}) 0%, rgba(10,10,15,0) 70%)`, bottom: "-10%", right: "-10%", filter: "blur(80px)" }} />

      {/* 1. Intro Title */}
      <Sequence from={0} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ transform: `scale(${titleSpring})`, textAlign: "center" }}>
            <h1 style={{ fontSize: "70px", fontWeight: 900, color: "#FFFFFF", margin: 0, textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
              Why does losing ₹1,000
            </h1>
            <h1 style={{ fontSize: "70px", fontWeight: 900, color: "#A78BFA", margin: 0, marginTop: "10px", textShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}>
              hurt more than gaining it?
            </h1>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 2. The Emotional Comparison */}
      <Sequence from={90} durationInFrames={150}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "100px" }}>
            <MoneyGraphic type="gain" delay={0} />
            <MoneyGraphic type="loss" delay={30} />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 3. The Stock Chart */}
      <Sequence from={240} durationInFrames={210}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <h2 style={{ fontSize: "40px", color: "#FFFFFF", fontWeight: 800, marginBottom: "20px", letterSpacing: "0.1em" }}>STOCK MARKET</h2>
          <ChartGraphic />
        </AbsoluteFill>
      </Sequence>

    </AbsoluteFill>
  );
};
