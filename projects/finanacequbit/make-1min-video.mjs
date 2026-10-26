import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const videoDir = path.join(root, "src", "remotion", "platforms", "youtube", "videos", "loss-aversion-1min");
const componentsDir = path.join(videoDir, "components");
const ytRootPath = path.join(root, "src", "remotion", "platforms", "youtube", "Root.jsx");

const log = (msg) => console.log(`\n✅ ${msg}`);

// 1. Create folders
fs.mkdirSync(componentsDir, { recursive: true });
log("Created loss-aversion-1min folder structure");

// 2. Write TitleCard.jsx
fs.writeFileSync(
  path.join(componentsDir, "TitleCard.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const TitleCard = ({ title, subtitle, titleColor = "#FFFFFF" }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const translateY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity, transform: \`translateY(\${translateY}px)\` }}>
      <h1 style={{ fontSize: "60px", fontWeight: 900, color: titleColor, margin: 0, textAlign: "center", padding: "0 40px", textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: "32px", color: "#A78BFA", marginTop: "20px", fontWeight: 600, textAlign: "center", padding: "0 40px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
`
);
log("Wrote components/TitleCard.jsx");

// 3. Write MoneyGraphic.jsx
fs.writeFileSync(
  path.join(componentsDir, "MoneyGraphic.jsx"),
  `import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const MoneyGraphic = ({ type, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({ frame: frame - delay, fps, config: { damping: 12 } });
  const isGain = type === "gain";
  const color = isGain ? "#10B981" : "#EF4444";
  const label = isGain ? "+₹1,000" : "-₹1,000";
  const emotion = isGain ? "Happy" : "Painful";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", transform: \`scale(\${scale})\` }}>
      <div style={{
        width: "200px", height: "200px", borderRadius: "50%",
        background: \`rgba(\${isGain ? '16, 185, 129' : '239, 68, 68'}, 0.1)\`,
        border: \`4px solid \${color}\`,
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: \`0 0 50px \${color}66\`
      }}>
        <span style={{ fontSize: "50px", fontWeight: 900, color }}>{label}</span>
      </div>
      <p style={{ color, fontSize: "32px", fontWeight: 700, marginTop: "20px" }}>{emotion}</p>
    </div>
  );
};
`
);
log("Wrote components/MoneyGraphic.jsx");

// 4. Write ChartGraphic.jsx
fs.writeFileSync(
  path.join(componentsDir, "ChartGraphic.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const ChartGraphic = () => {
  const frame = useCurrentFrame();
  const climb = interpolate(frame, [20, 80], [0, 1], { extrapolateRight: "clamp" });
  const crash = interpolate(frame, [80, 140], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ position: "relative", width: "600px", height: "300px", marginTop: "40px", borderBottom: "4px solid #333", borderLeft: "4px solid #333" }}>
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "100%", borderTop: "6px solid #10B981", borderRight: "6px solid #10B981", transform: \`scaleY(\${climb})\`, transformOrigin: "bottom" }} />
      <div style={{ position: "absolute", top: "10px", left: "10%", color: "#10B981", fontWeight: 900, opacity: climb, fontSize: "24px" }}>₹10,000</div>
      <div style={{ position: "absolute", bottom: 0, left: "50%", width: "50%", height: "60%", borderTop: "6px solid #EF4444", borderLeft: "6px solid #EF4444", transform: \`scaleY(\${crash})\`, transformOrigin: "top" }} />
      <div style={{ position: "absolute", bottom: "60%", right: "5%", color: "#EF4444", fontWeight: 900, opacity: crash, fontSize: "24px" }}>₹8,000</div>
    </div>
  );
};
`
);
log("Wrote components/ChartGraphic.jsx");

// 5. Write TimerGraphic.jsx
fs.writeFileSync(
  path.join(componentsDir, "TimerGraphic.jsx"),
  `import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const TimerGraphic = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 10 } });

  return (
    <div style={{ transform: \`scale(\${scale})\`, marginTop: "40px", padding: "30px 60px", borderRadius: "30px", background: "rgba(239, 68, 68, 0.1)", border: "4px solid #EF4444", boxShadow: "0 0 50px rgba(239, 68, 68, 0.4)" }}>
      <span style={{ fontSize: "80px", fontWeight: 900, color: "#EF4444", fontVariantNumeric: "tabular-nums" }}>09:59</span>
    </div>
  );
};
`
);
log("Wrote components/TimerGraphic.jsx");

// 6. Write LossAversion1Min.jsx
fs.writeFileSync(
  path.join(videoDir, "LossAversion1Min.jsx"),
  `import React from "react";
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
      
      <div style={{ position: "absolute", width: "1000px", height: "1000px", borderRadius: "50%", background: \`radial-gradient(circle, rgba(139,92,246,\${pulse}) 0%, rgba(10,10,15,0) 70%)\`, top: "-10%", left: "-10%", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", width: "800px", height: "800px", borderRadius: "50%", background: \`radial-gradient(circle, rgba(59,130,246,\${pulse * 0.8}) 0%, rgba(10,10,15,0) 70%)\`, bottom: "-10%", right: "-10%", filter: "blur(60px)" }} />

      {/* SCENE 1: HOOK */}
      <Sequence from={0} durationInFrames={360}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <Sequence from={0} durationInFrames={120}>
            <TitleCard title="Why does losing ₹1,000 hurt more than gaining it?" />
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
           <TitleCard title="LOSS AVERSION" subtitle="Discovered by Kahneman & Tversky (1979)" titleColor="#A78BFA" />
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3: STOCK MARKET */}
      <Sequence from={720} durationInFrames={480}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <Sequence from={0} durationInFrames={240}>
            <TitleCard title="You invest ₹10,000..." />
            <ChartGraphic />
          </Sequence>
          <Sequence from={240} durationInFrames={240}>
             <TitleCard title="You refuse to sell." subtitle="'I'll wait until it comes back.'" />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 4: SHOPPING */}
      <Sequence from={1200} durationInFrames={300}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <TitleCard title="Or shopping: 'Discount ends in 10 minutes!'" />
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
`
);
log("Wrote LossAversion1Min.jsx");

// 7. Update YouTube Root.jsx safely
let ytRootContent = fs.readFileSync(ytRootPath, "utf-8");

// Add import
if (!ytRootContent.includes("LossAversion1Min")) {
  ytRootContent = ytRootContent.replace(
    `import { YTThumbnail } from "./images/YTThumbnail";`,
    `import { YTThumbnail } from "./images/YTThumbnail";\nimport { LossAversion1Min } from "./videos/loss-aversion-1min/LossAversion1Min";`
  );
  
  // Add composition
  ytRootContent = ytRootContent.replace(
    `</>`,
    `  <Composition id="LossAversion1Min" component={LossAversion1Min} durationInFrames={1800} fps={30} width={1280} height={720} />\n    </>`
  );
  
  fs.writeFileSync(ytRootPath, ytRootContent);
  log("Updated platforms/youtube/Root.jsx");
} else {
  log("Root.jsx already up to date");
}

// 8. Start the Studio
console.log("\n🚀 Starting Remotion Studio...");
try {
  execSync("npx remotion studio src/remotion/index.js", { stdio: "inherit", cwd: root });
} catch (e) {
  console.error("Studio failed to start. Please check the errors above.");
}