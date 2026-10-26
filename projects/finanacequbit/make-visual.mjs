import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const videoDir = path.join(root, "src", "remotion", "platforms", "youtube", "videos", "loss-aversion-1min");
const componentsDir = path.join(videoDir, "components");

const log = (msg) => console.log(`\n✅ ${msg}`);

// 1. Install Dependencies
console.log("📦 Installing animation libraries (GSAP + Remotion Utils)...");
try {
  execSync("npm i @remotion/animation-utils @remotion/paths gsap", { stdio: "inherit", cwd: root });
  log("Libraries installed successfully");
} catch (e) {
  console.error("Failed to install libraries. Check your internet connection.");
  process.exit(1);
}

// 2. Write the Advanced MoneyGraphic (Using GSAP timeline style + Remotion springs)
fs.writeFileSync(
  path.join(componentsDir, "MoneyGraphic.jsx"),
  `import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";
import { scale } from "@remotion/animation-utils"; // Helper for smooth scaling

export const MoneyGraphic = ({ type, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Professional Spring: Custom damping for a smooth overshoot
  const popIn = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.5 },
  });

  // Continuous subtle float after it appears
  const float = interpolate(Math.sin((frame - delay) / 15), [-1, 1], [-5, 5]);

  const isGain = type === "gain";
  const color = isGain ? "#10B981" : "#EF4444";
  const label = isGain ? "+₹1,000" : "-₹1,000";
  const emotion = isGain ? "Happy" : "Painful";

  return (
    <div style={{ 
      display: "flex", flexDirection: "column", alignItems: "center", 
      transform: \`scale(\${popIn}) translateY(\${float}px)\` // Pop-in + gentle float
    }}>
      {/* 3D Clay Coin with Neon Glow */}
      <div style={{
        width: "240px", height: "240px", borderRadius: "50%",
        background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: \`inset 6px 6px 12px rgba(255, 255, 255, 0.1), inset -6px -6px 16px rgba(0, 0, 0, 0.9), 30px 30px 60px rgba(0, 0, 0, 0.9), 0 0 60px \${color}44\`,
        border: \`2px solid \${color}\`,
        position: "relative"
      }}>
        {/* Inner neon ring */}
        <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: \`1px solid \${color}66\` }} />
        
        <span style={{ fontSize: "55px", fontWeight: 900, color: color, textShadow: \`0 0 25px \${color}\`, fontFamily: "'Inter', sans-serif" }}>{label}</span>
      </div>
      <p style={{ color: color, fontSize: "36px", fontWeight: 800, marginTop: "24px", letterSpacing: "0.1em", textTransform: "uppercase", textShadow: \`0 0 20px \${color}88\`, fontFamily: "'Inter', sans-serif" }}>{emotion}</p>
    </div>
  );
};
`
);
log("Wrote advanced MoneyGraphic.jsx");

// 3. Write the GSAP-Style ChartGraphic (Using Remotion's SVG path drawing)
fs.writeFileSync(
  path.join(componentsDir, "ChartGraphic.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { getLength } from "@remotion/paths"; // Professional path measuring

const UP_PATH = "M 0 300 L 150 200 L 300 100";
const DOWN_PATH = "M 300 100 L 450 250 L 600 350";

export const ChartGraphic = () => {
  const frame = useCurrentFrame();
  
  // Timeline: 0-60 draws UP, 60-120 draws DOWN
  const drawUp = interpolate(frame, [10, 60], [0, 1], { extrapolateRight: "clamp" });
  const drawDown = interpolate(frame, [60, 110], [0, 1], { extrapolateRight: "clamp" });

  const upLength = getLength(UP_PATH);
  const downLength = getLength(DOWN_PATH);

  return (
    <div style={{ 
      position: "relative", width: "700px", height: "450px", marginTop: "40px", 
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)", borderRadius: "32px", padding: "40px",
      boxShadow: "inset 6px 6px 12px rgba(255, 255, 255, 0.05), inset -6px -6px 16px rgba(0, 0, 0, 0.9), 30px 30px 60px rgba(0, 0, 0, 0.9)",
      border: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <svg viewBox="0 0 600 400" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Grid lines */}
        {[0, 100, 200, 300].map(y => (
          <line key={y} x1="0" y1={y + 50} x2="600" y2={y + 50} stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        ))}
        
        {/* Green Up Trend */}
        <path d={UP_PATH} fill="none" stroke="#10B981" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={upLength} strokeDashoffset={upLength * (1 - drawUp)}
          style={{ filter: "drop-shadow(0 0 15px rgba(16, 185, 129, 0.8))" }} />
        
        {/* Red Down Crash */}
        <path d={DOWN_PATH} fill="none" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={downLength} strokeDashoffset={downLength * (1 - drawDown)}
          style={{ filter: "drop-shadow(0 0 15px rgba(239, 68, 68, 0.8))" }} />
        
        {/* Price Labels */}
        <text x="290" y="80" fill="#10B981" fontSize="24" fontWeight="900" opacity={drawUp} style={{ textShadow: "0 0 10px #10B981" }}>₹10k</text>
        <text x="560" y="340" fill="#EF4444" fontSize="24" fontWeight="900" opacity={drawDown} style={{ textShadow: "0 0 10px #EF4444" }}>₹8k</text>
      </svg>
    </div>
  );
};
`
);
log("Wrote advanced ChartGraphic.jsx with SVG drawing");

// 4. Write the Master Visual Scene (The "Hook")
fs.writeFileSync(
  path.join(videoDir, "VisualHook.jsx"),
  `import React from "react";
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
      <div style={{ position: "absolute", width: "1200px", height: "1200px", borderRadius: "50%", background: \`radial-gradient(circle, rgba(139,92,246,\${pulse}) 0%, rgba(10,10,15,0) 70%)\`, top: "-20%", left: "-20%", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", width: "800px", height: "800px", borderRadius: "50%", background: \`radial-gradient(circle, rgba(59,130,246,\${pulse * 0.8}) 0%, rgba(10,10,15,0) 70%)\`, bottom: "-10%", right: "-10%", filter: "blur(80px)" }} />

      {/* 1. Intro Title */}
      <Sequence from={0} durationInFrames={90}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ transform: \`scale(\${titleSpring})\`, textAlign: "center" }}>
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
`
);
log("Wrote VisualHook.jsx (15-second professional animation)");

// 5. Update YouTube Root
const ytRootPath = path.join(root, "src", "remotion", "platforms", "youtube", "Root.jsx");
let ytRootContent = fs.readFileSync(ytRootPath, "utf-8");

if (!ytRootContent.includes("VisualHook")) {
  // Add import
  ytRootContent = ytRootContent.replace(
    `import { LossAversion1Min } from "./videos/loss-aversion-1min/LossAversion1Min";`,
    `import { LossAversion1Min } from "./videos/loss-aversion-1min/LossAversion1Min";\nimport { VisualHook } from "./videos/loss-aversion-1min/VisualHook";`
  );
  
  // Add composition
  ytRootContent = ytRootContent.replace(
    `</>`,
    `  <Composition id="VisualHook" component={VisualHook} durationInFrames={450} fps={30} width={1280} height={720} />\n    </>`
  );
  
  fs.writeFileSync(ytRootPath, ytRootContent);
  log("Registered VisualHook in Root.jsx");
}

console.log("\n🚀 Starting Remotion Studio...");
try {
  execSync("npx remotion studio src/remotion/index.js", { stdio: "inherit", cwd: root });
} catch (e) {
  console.error("Studio failed to start.");
}