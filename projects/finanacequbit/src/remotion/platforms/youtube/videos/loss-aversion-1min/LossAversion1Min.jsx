import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { TitleCard } from "./components/TitleCard";
import { MoneyGraphic } from "./components/MoneyGraphic";
import { ChartGraphic } from "./components/ChartGraphic";
import { TimerGraphic } from "./components/TimerGraphic";

export const LossAversion1Min = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / 15), [-1, 1], [0.1, 0.25]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0F", fontFamily: "'Inter', sans-serif" }}>
      
      <div style={{ position: "absolute", width: "1000px", height: "1000px", borderRadius: "50%", background: `radial-gradient(circle, rgba(139,92,246,${pulse}) 0%, rgba(10,10,15,0) 70%)`, top: "-10%", left: "-10%", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", width: "800px", height: "800px", borderRadius: "50%", background: `radial-gradient(circle, rgba(59,130,246,${pulse * 0.8}) 0%, rgba(10,10,15,0) 70%)`, bottom: "-10%", right: "-10%", filter: "blur(60px)" }} />

      {/* SCENE 1: HOOK */}
      <Sequence from={0} durationInFrames={360}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <Sequence from={0} durationInFrames={120}>
            <TitleCard title="Why does losing ₹1,000 hurt more than gaining it?" isBig={false} />
          </Sequence>
          <Sequence from={120} durationInFrames={240}>
             <div style={{ display: "flex", gap: "80px" }}>
                <MoneyGraphic type="gain" delay={130} />
                <MoneyGraphic type="loss" delay={180} />
             </div>
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2: SCIENCE */}
      <Sequence from={360} durationInFrames={360}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
           <TitleCard title="LOSS AVERSION" subtitle="Kahneman & Tversky (1979)" titleColor="#A78BFA" isBig={true} />
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3: STOCK MARKET */}
      <Sequence from={720} durationInFrames={480}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <Sequence from={0} durationInFrames={240}>
            <TitleCard title="You invest ₹10,000..." titleColor="#FFFFFF" isBig={false} />
            <ChartGraphic />
          </Sequence>
          <Sequence from={240} durationInFrames={240}>
             <TitleCard title="You refuse to sell." subtitle="'I'll wait until it comes back.'" isBig={true} />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4: SHOPPING */}
      <Sequence from={1200} durationInFrames={300}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <TitleCard title="Or shopping: 'Discount ends in 10 minutes!'" isBig={false} />
          <TimerGraphic />
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 5: SOLUTION + OUTRO */}
      <Sequence from={1500} durationInFrames={300}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <TitleCard title="How to protect yourself?" titleColor="#A78BFA" />
          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px", fontSize: "32px", color: "#FFFFFF" }}>
            <span>1. Don't decide in a panic.</span>
            <span>2. Focus on facts, not emotions.</span>
            <span>3. Ask: 'Am I afraid of losing?'</span>
          </div>
        </AbsoluteFill>
        <Sequence from={240} durationInFrames={60}>
          <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#0A0A0F" }}>
             <h1 style={{ color: "#FFFFFF", fontSize: "50px", fontWeight: 900, letterSpacing: "0.2em" }}>FINANCE QUBIT</h1>
             <p style={{ color: "#A78BFA", fontSize: "20px", letterSpacing: "0.3em", marginTop: "15px" }}>LEARN FINANCE. GROW WEALTH.</p>
          </AbsoluteFill>
        </Sequence>
      </Sequence>

    </AbsoluteFill>
  );
};
