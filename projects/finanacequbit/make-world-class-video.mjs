import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const videoDir = path.join(root, "src", "remotion", "platforms", "youtube", "videos", "world-class-video");
const componentsDir = path.join(videoDir, "components");

const log = (msg) => console.log(`\n✅ ${msg}`);

// 1. Create folders
fs.mkdirSync(componentsDir, { recursive: true });
log("Created world-class-video folder structure");

// 2. GoldRupee Component (For the hook)
fs.writeFileSync(
  path.join(componentsDir, "GoldRupee.jsx"),
  `import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";

export const GoldRupee = ({ delay, shatterFrame }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Pop in
  const scaleIn = spring({ frame: frame - delay, fps, config: { damping: 12 } });
  
  // Shatter effect (scale down to 0 quickly and fade out)
  const shatterProgress = interpolate(frame, [shatterFrame, shatterFrame + 10], [1, 0], { extrapolateRight: "clamp" });
  const shatterOpacity = interpolate(frame, [shatterFrame, shatterFrame + 10], [1, 0], { extrapolateRight: "clamp" });
  
  // Rotation for a dynamic feel
  const rotation = interpolate(frame, [0, 60], [0, 360]);

  // Final combined transform
  const finalScale = scaleIn * shatterProgress;

  return (
    <div style={{ 
      transform: \`scale(\${finalScale}) rotate(\${rotation}deg)\`, 
      opacity: shatterOpacity,
      display: "flex", justifyContent: "center", alignItems: "center",
      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))"
    }}>
      <div style={{
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, #FDE047 0%, #EAB308 60%, #A16207 100%)",
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: "inset 0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(234, 179, 8, 0.6)",
        position: "relative"
      }}>
        {/* Inner ring */}
        <div style={{ position: "absolute", inset: 15, borderRadius: "50%", border: "4px solid rgba(255,255,255,0.3)" }} />
        
        {/* Rupee Symbol */}
        <span style={{ fontSize: "150px", fontWeight: 900, color: "#0A0A0F", textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>₹</span>
      </div>
    </div>
  );
};
`
);
log("Wrote GoldRupee.jsx");

// 3. ShatterParticles Component (For the hook shatter)
fs.writeFileSync(
  path.join(componentsDir, "ShatterParticles.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const ShatterParticles = ({ triggerFrame }) => {
  const frame = useCurrentFrame();
  
  // Only show after trigger
  if (frame < triggerFrame) return null;
  
  const progress = interpolate(frame, [triggerFrame, triggerFrame + 30], [0, 1], { extrapolateRight: "clamp" });
  
  // Generate 20 particles
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const angle = (i / 20) * Math.PI * 2;
    const distance = progress * 300; // Particles fly out 300px
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    return (
      <div key={i} style={{
        position: "absolute",
        width: "15px", height: "15px",
        background: i % 2 === 0 ? "#FDE047" : "#EAB308",
        borderRadius: i % 3 === 0 ? "50%" : "2px",
        transform: \`translate(\${x}px, \${y}px) rotate(\${progress * 360}deg)\`,
        opacity: 1 - progress,
        boxShadow: "0 0 15px rgba(234, 179, 8, 0.8)"
      }} />
    );
  });

  return (
    <div style={{ position: "absolute", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {particles}
    </div>
  );
};
`
);
log("Wrote ShatterParticles.jsx");

// 4. PortfolioChart Component (For the example)
fs.writeFileSync(
  path.join(componentsDir, "PortfolioChart.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { getLength } from "@remotion/paths";

export const PortfolioChart = () => {
  const frame = useCurrentFrame();
  
  // Animate drawing the chart path
  const drawProgress = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });
  
  // Path from 10k to 8k (Downward trend)
  const path = "M 50 50 L 150 80 L 250 60 L 350 150 L 450 180 L 550 250";
  const pathLength = getLength(path);

  return (
    <div style={{ 
      width: "800px", height: "400px", 
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)", 
      borderRadius: "32px", padding: "40px",
      boxShadow: "inset 6px 6px 12px rgba(255, 255, 255, 0.05), inset -6px -6px 16px rgba(0, 0, 0, 0.9), 30px 30px 60px rgba(0, 0, 0, 0.9)",
      border: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <svg viewBox="0 0 600 300" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Grid */}
        {[0, 100, 200, 300].map(y => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        ))}
        
        {/* The Chart Line */}
        <path d={path} fill="none" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={pathLength} strokeDashoffset={pathLength * (1 - drawProgress)}
          style={{ filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))" }} />
        
        {/* Labels */}
        <text x="30" y="30" fill="#10B981" fontSize="24" fontWeight="900" style={{ textShadow: "0 0 10px #10B981" }}>₹10,000</text>
        <text x="500" y="280" fill="#EF4444" fontSize="24" fontWeight="900" opacity={drawProgress} style={{ textShadow: "0 0 10px #EF4444" }}>₹8,000</text>
      </svg>
    </div>
  );
};
`
);
log("Wrote PortfolioChart.jsx");

// 5. BrainGraphic Component (For the science)
fs.writeFileSync(
  path.join(componentsDir, "BrainGraphic.jsx"),
  `import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";

export const BrainGraphic = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scaleIn = spring({ frame, fps, config: { damping: 14 } });
  
  // Split animation for GAIN vs LOSS
  const splitProgress = interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", transform: \`scale(\${scaleIn})\` }}>
      {/* Brain Icon */}
      <div style={{ fontSize: "120px", filter: "drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))" }}>🧠</div>
      
      {/* Gain/Loss Comparison */}
      <div style={{ display: "flex", gap: \`\${50 + splitProgress * 200}px\`, marginTop: "40px" }}>
        {/* GAIN side */}
        <div style={{ 
          padding: "20px 40px", borderRadius: "20px", 
          background: "rgba(16, 185, 129, 0.1)", border: "2px solid #10B981",
          opacity: interpolate(frame, [40, 60], [0, 1]),
          transform: \`translateX(\${interpolate(splitProgress, [0, 1], [-50, 0])}px)\`,
          boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)"
        }}>
          <span style={{ color: "#10B981", fontSize: "40px", fontWeight: 900 }}>GAIN</span>
        </div>
        
        {/* LOSS side */}
        <div style={{ 
          padding: "20px 40px", borderRadius: "20px", 
          background: "rgba(239, 68, 68, 0.1)", border: "2px solid #EF4444",
          opacity: interpolate(frame, [40, 60], [0, 1]),
          transform: \`translateX(\${interpolate(splitProgress, [0, 1], [50, 0])}px)\`,
          boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)"
        }}>
          <span style={{ color: "#EF4444", fontSize: "40px", fontWeight: 900 }}>LOSS</span>
        </div>
      </div>
      
      <p style={{ color: "#A78BFA", fontSize: "24px", fontWeight: 700, marginTop: "30px", opacity: interpolate(frame, [60, 80], [0, 1]), letterSpacing: "0.1em" }}>
        LOSSES AFFECT US MORE
      </p>
    </div>
  );
};
`
);
log("Wrote BrainGraphic.jsx");

// 6. The Master 60-Second Video (WorldClassVideo.jsx)
fs.writeFileSync(
  path.join(videoDir, "WorldClassVideo.jsx"),
  `import React from "react";
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
      <div style={{ position: "absolute", width: "1500px", height: "1500px", borderRadius: "50%", background: \`radial-gradient(circle, rgba(234, 179, 8, \${pulse}) 0%, rgba(10,10,15,0) 70%)\`, top: "-20%", left: "-20%", filter: "blur(100px)" }} />
      <div style={{ position: "absolute", width: "1000px", height: "1000px", borderRadius: "50%", background: \`radial-gradient(circle, rgba(139, 92, 246, \${pulse}) 0%, rgba(10,10,15,0) 70%)\`, bottom: "-10%", right: "-10%", filter: "blur(100px)" }} />

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
            transform: \`scale(\${spring({ frame: frame - 1560, fps, config: { damping: 14 } })})\`
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
`
);
log("Wrote WorldClassVideo.jsx");

// 7. Update YouTube Root
const ytRootPath = path.join(root, "src", "remotion", "platforms", "youtube", "Root.jsx");
let ytRootContent = fs.readFileSync(ytRootPath, "utf-8");

if (!ytRootContent.includes("WorldClassVideo")) {
  // Add import
  ytRootContent = ytRootContent.replace(
    `import { VisualHook } from "./videos/loss-aversion-1min/VisualHook";`,
    `import { VisualHook } from "./videos/loss-aversion-1min/VisualHook";\nimport { WorldClassVideo } from "./videos/world-class-video/WorldClassVideo";`
  );
  
  // Add composition (1920x1080)
  ytRootContent = ytRootContent.replace(
    `</>`,
    `  <Composition id="WorldClassVideo" component={WorldClassVideo} durationInFrames={1800} fps={30} width={1920} height={1080} />\n    </>`
  );
  
  fs.writeFileSync(ytRootPath, ytRootContent);
  log("Registered WorldClassVideo in Root.jsx");
}

console.log("\n🚀 Starting Remotion Studio...");
try {
  execSync("npx remotion studio src/remotion/index.js", { stdio: "inherit", cwd: root });
} catch (e) {
  console.error("Studio failed to start.");
}