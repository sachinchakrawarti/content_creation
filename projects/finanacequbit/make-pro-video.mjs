import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const videoDir = path.join(root, "src", "remotion", "platforms", "youtube", "videos", "loss-aversion-1min");
const componentsDir = path.join(videoDir, "components");

const log = (msg) => console.log(`\n✅ ${msg}`);

// 1. Write the Ultra-Premium TitleCard (Neon Clay)
fs.writeFileSync(
  path.join(componentsDir, "TitleCard.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const TitleCard = ({ title, subtitle, titleColor = "#FFFFFF", isBig = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({ frame, fps, config: { damping: 14 } });
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ 
      display: "flex", flexDirection: "column", alignItems: "center", 
      transform: \`scale(\${scale})\`, opacity,
      padding: "60px 80px", borderRadius: "48px",
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
      boxShadow: "inset 4px 4px 10px rgba(255, 255, 255, 0.05), inset -4px -4px 12px rgba(0, 0, 0, 0.9), 30px 30px 60px rgba(0, 0, 0, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderTop: "2px solid rgba(255, 255, 255, 0.15)",
      maxWidth: "1000px", textAlign: "center", zIndex: 10
    }}>
      <h1 style={{ fontSize: isBig ? "90px" : "60px", fontWeight: 900, color: titleColor, margin: 0, letterSpacing: isBig ? "-2px" : "0", textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: "32px", color: "#A78BFA", marginTop: "20px", fontWeight: 600, textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
`
);
log("Upgraded TitleCard.jsx with Clay Box");

// 2. Write the MoneyGraphic (Neon Clay Coin)
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
      {/* The Neon Clay Coin */}
      <div style={{
        width: "240px", height: "240px", borderRadius: "50%",
        background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: \`inset 4px 4px 10px rgba(255, 255, 255, 0.1), inset -4px -4px 12px rgba(0, 0, 0, 0.9), 20px 20px 40px rgba(0, 0, 0, 0.8), 0 0 50px \${color}33\`,
        border: \`2px solid \${color}\`,
        position: "relative"
      }}>
        {/* Neon Glow Border */}
        <div style={{ position: "absolute", inset: -4, borderRadius: "50%", border: \`2px solid \${color}\`, filter: "blur(6px)", opacity: 0.5 }} />
        
        <span style={{ fontSize: "55px", fontWeight: 900, color: color, textShadow: \`0 0 20px \${color}\` }}>{label}</span>
      </div>
      <p style={{ color: color, fontSize: "36px", fontWeight: 800, marginTop: "24px", letterSpacing: "0.1em", textTransform: "uppercase", textShadow: \`0 0 15px \${color}66\` }}>{emotion}</p>
    </div>
  );
};
`
);
log("Upgraded MoneyGraphic.jsx with Clay Coin");

// 3. Write the ChartGraphic (Neon Clay Chart)
fs.writeFileSync(
  path.join(componentsDir, "ChartGraphic.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const ChartGraphic = () => {
  const frame = useCurrentFrame();
  const climb = interpolate(frame, [20, 80], [0, 1], { extrapolateRight: "clamp" });
  const crash = interpolate(frame, [80, 140], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ 
      position: "relative", width: "700px", height: "350px", marginTop: "40px", 
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)", borderRadius: "32px", padding: "40px",
      boxShadow: "inset 4px 4px 10px rgba(255, 255, 255, 0.05), inset -4px -4px 12px rgba(0, 0, 0, 0.9), 20px 20px 40px rgba(0, 0, 0, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "flex-end"
    }}>
      <div style={{ position: "relative", width: "100%", height: "100%", borderBottom: "2px solid #333", borderLeft: "2px solid #333" }}>
        {/* Climb */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "100%", borderTop: "6px solid #10B981", borderRight: "6px solid #10B981", transform: \`scaleY(\${climb})\`, transformOrigin: "bottom", boxShadow: "0 -10px 20px rgba(16, 185, 129, 0.3)" }} />
        <div style={{ position: "absolute", top: "10px", left: "10%", color: "#10B981", fontWeight: 900, opacity: climb, fontSize: "28px", textShadow: "0 0 10px rgba(16, 185, 129, 0.5)" }}>₹10,000</div>
        
        {/* Crash */}
        <div style={{ position: "absolute", bottom: 0, left: "50%", width: "50%", height: "60%", borderTop: "6px solid #EF4444", borderLeft: "6px solid #EF4444", transform: \`scaleY(\${crash})\`, transformOrigin: "top", boxShadow: "0 10px 20px rgba(239, 68, 68, 0.3)" }} />
        <div style={{ position: "absolute", bottom: "60%", right: "5%", color: "#EF4444", fontWeight: 900, opacity: crash, fontSize: "28px", textShadow: "0 0 10px rgba(239, 68, 68, 0.5)" }}>₹8,000</div>
      </div>
    </div>
  );
};
`
);
log("Upgraded ChartGraphic.jsx with Clay Container");

// 4. Write the TimerGraphic (Neon Clay Timer)
fs.writeFileSync(
  path.join(componentsDir, "TimerGraphic.jsx"),
  `import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";

export const TimerGraphic = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 10 } });
  const pulse = interpolate(Math.sin(frame / 5), [-1, 1], [0.5, 1]);

  return (
    <div style={{ 
      transform: \`scale(\${scale})\`, marginTop: "40px", padding: "40px 80px", borderRadius: "40px", 
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)", 
      border: "2px solid #EF4444",
      boxShadow: \`inset 4px 4px 10px rgba(255, 255, 255, 0.05), inset -4px -4px 12px rgba(0, 0, 0, 0.9), 20px 20px 40px rgba(0, 0, 0, 0.8), 0 0 60px rgba(239, 68, 68, \${pulse * 0.4})\`
    }}>
      <span style={{ fontSize: "90px", fontWeight: 900, color: "#EF4444", fontVariantNumeric: "tabular-nums", textShadow: "0 0 30px rgba(239, 68, 68, 0.8)" }}>09:59</span>
    </div>
  );
};
`
);
log("Upgraded TimerGraphic.jsx with Clay Timer");

// 5. Update the Master Video file to use the new TitleCard options
const masterPath = path.join(videoDir, "LossAversion1Min.jsx");
let masterContent = fs.readFileSync(masterPath, "utf-8");

// Swap out the old TitleCard usage with the new props
masterContent = masterContent.replace(
  `<TitleCard title="Why does losing ₹1,000 hurt more than gaining it?" />`,
  `<TitleCard title="Why does losing ₹1,000 hurt more than gaining it?" isBig={false} />`
);
masterContent = masterContent.replace(
  `<TitleCard title="LOSS AVERSION" subtitle="Discovered by Kahneman & Tversky (1979)" titleColor="#A78BFA" />`,
  `<TitleCard title="LOSS AVERSION" subtitle="Kahneman & Tversky (1979)" titleColor="#A78BFA" isBig={true} />`
);
masterContent = masterContent.replace(
  `<TitleCard title="You invest ₹10,000..." />`,
  `<TitleCard title="You invest ₹10,000..." titleColor="#FFFFFF" isBig={false} />`
);
masterContent = masterContent.replace(
  `<TitleCard title="You refuse to sell." subtitle="'I'll wait until it comes back.'" />`,
  `<TitleCard title="You refuse to sell." subtitle="'I'll wait until it comes back.'" isBig={true} />`
);
masterContent = masterContent.replace(
  `<TitleCard title="Or shopping: 'Discount ends in 10 minutes!'" />`,
  `<TitleCard title="Or shopping: 'Discount ends in 10 minutes!'" isBig={false} />`
);

fs.writeFileSync(masterPath, masterContent);
log("Updated LossAversion1Min.jsx layout");

console.log("\n🚀 Starting Remotion Studio with the Pro Neon Clay theme...");
try {
  execSync("npx remotion studio src/remotion/index.js", { stdio: "inherit", cwd: root });
} catch (e) {
  console.error("Studio failed to start.");
}