import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const componentsDir = path.join(root, "src", "remotion", "platforms", "youtube", "components");

fs.mkdirSync(componentsDir, { recursive: true });
const log = (msg) => console.log(`\n✅ ${msg}`);

// --- 1. CLAY BOX (The base container for all UI) ---
fs.writeFileSync(
  path.join(componentsDir, "ClayBox.jsx"),
  `import React from "react";

export const ClayBox = ({ children, style = {}, glowColor = null, delay = 0 }) => {
  const glow = glowColor ? \`0 0 60px \${glowColor}44\` : "0 20px 40px rgba(0, 0, 0, 0.8)";
  
  return (
    <div style={{
      background: "linear-gradient(145deg, #1C1C28, #0C0C12)",
      borderRadius: "32px",
      padding: "40px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderTop: "2px solid rgba(255, 255, 255, 0.15)",
      boxShadow: \`inset 6px 6px 12px rgba(255, 255, 255, 0.05), inset -6px -6px 16px rgba(0, 0, 0, 0.9), \${glow}\`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }}>
      {children}
    </div>
  );
};
`
);
log("Wrote ClayBox.jsx");

// --- 2. NEON TEXT (Animated text with gradient and glow) ---
fs.writeFileSync(
  path.join(componentsDir, "NeonText.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const NeonText = ({ text, size = 48, color = "#FFFFFF", glowColor = null, delay = 0, weight = 900, align = "center", isGold = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const opacity = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const translateY = interpolate(frame - delay, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  const textStyle = isGold ? {
    background: "linear-gradient(180deg, #FDE047 0%, #EAB308 50%, #A16207 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    filter: "drop-shadow(0 0 20px rgba(234, 179, 8, 0.5))"
  } : {
    color,
    textShadow: glowColor ? \`0 0 30px \${glowColor}\` : "0 4px 20px rgba(0,0,0,0.8)"
  };

  return (
    <h1 style={{
      fontSize: \`\${size}px\`,
      fontWeight: weight,
      margin: 0,
      textAlign: align,
      opacity,
      transform: \`translateY(\${translateY}px)\`,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: "0.05em",
      lineHeight: 1.2,
      ...textStyle
    }}>
      {text}
    </h1>
  );
};
`
);
log("Wrote NeonText.jsx");

// --- 3. GOLD COIN (The iconic gold coin with pop/shatter) ---
fs.writeFileSync(
  path.join(componentsDir, "GoldCoin.jsx"),
  `import React from "react";
import { useCurrentFrame, spring, useVideoConfig, interpolate } from "remotion";

export const GoldCoin = ({ value = "₹1,000", delay = 0, shatterFrame = null, rotate = true }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Pop in animation
  const scaleIn = spring({ frame: frame - delay, fps, config: { damping: 12, stiffness: 100 } });
  
  // Shatter (if specified)
  const shatterProgress = shatterFrame !== null 
    ? interpolate(frame, [shatterFrame, shatterFrame + 10], [1, 0], { extrapolateRight: "clamp" })
    : 1;
    
  const shatterOpacity = shatterFrame !== null 
    ? interpolate(frame, [shatterFrame, shatterFrame + 10], [1, 0], { extrapolateRight: "clamp" })
    : 1;

  // Continuous rotation
  const rotation = rotate ? interpolate(frame, [0, 120], [0, 360]) : 0;

  return (
    <div style={{ 
      transform: \`scale(\${scaleIn * shatterProgress}) rotate(\${rotation}deg)\`, 
      opacity: shatterOpacity,
      display: "flex", justifyContent: "center", alignItems: "center",
    }}>
      <div style={{
        width: "350px", height: "350px", borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #FDE047 0%, #EAB308 50%, #A16207 100%)",
        display: "flex", justifyContent: "center", alignItems: "center",
        boxShadow: "inset 0 0 50px rgba(255,255,255,0.6), 0 30px 60px rgba(0,0,0,0.8), 0 0 100px rgba(234, 179, 8, 0.4)",
        position: "relative",
        border: "4px solid #A16207"
      }}>
        {/* Inner Ring */}
        <div style={{ position: "absolute", inset: 20, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.4)" }} />
        
        {/* Text */}
        <span style={{ 
          fontSize: "110px", fontWeight: 900, color: "#0A0A0F", 
          textShadow: "0 4px 10px rgba(0,0,0,0.5)",
          fontFamily: "'Inter', sans-serif"
        }}>
          {value}
        </span>
      </div>
    </div>
  );
};
`
);
log("Wrote GoldCoin.jsx");

// --- 4. NEON CHART (Animated SVG path chart) ---
fs.writeFileSync(
  path.join(componentsDir, "NeonChart.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { getLength } from "@remotion/paths";

export const NeonChart = ({ 
  dataPath = "M 50 50 L 150 80 L 250 60 L 350 150 L 450 180 L 550 250", 
  color = "#EF4444", 
  glowColor = "rgba(239, 68, 68, 0.8)",
  labels = [{ x: 30, y: 30, text: "₹10k", color: "#10B981" }, { x: 500, y: 280, text: "₹8k", color: "#EF4444" }]
}) => {
  const frame = useCurrentFrame();
  
  // Animate drawing the path
  const drawProgress = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });
  const pathLength = getLength(dataPath);

  return (
    <div style={{ 
      width: "900px", height: "450px", 
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative"
    }}>
      <svg viewBox="0 0 600 300" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        {/* Grid lines */}
        {[0, 75, 150, 225, 300].map(y => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        ))}
        
        {/* Chart Path */}
        <path d={dataPath} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={pathLength} strokeDashoffset={pathLength * (1 - drawProgress)}
          style={{ filter: \`drop-shadow(0 0 15px \${glowColor})\` }} />
        
        {/* Labels */}
        {labels.map((lbl, i) => (
          <text key={i} x={lbl.x} y={lbl.y} fill={lbl.color} fontSize="24" fontWeight="900" opacity={drawProgress} style={{ textShadow: \`0 0 10px \${lbl.color}\` }}>
            {lbl.text}
          </text>
        ))}
      </svg>
    </div>
  );
};
`
);
log("Wrote NeonChart.jsx");

// --- 5. GLOW ORB (Background decoration) ---
fs.writeFileSync(
  path.join(componentsDir, "GlowOrb.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const GlowOrb = ({ color = "rgba(234, 179, 8, 0.3)", size = 800, position = { top: "-20%", left: "-20%" }, speed = 15 }) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame / speed), [-1, 1], [0.5, 1]);

  return (
    <div style={{
      position: "absolute",
      width: \`\${size}px\`,
      height: \`\${size}px\`,
      borderRadius: "50%",
      background: \`radial-gradient(circle, \${color} 0%, transparent 70%)\`,
      opacity: pulse,
      filter: "blur(80px)",
      ...position
    }} />
  );
};
`
);
log("Wrote GlowOrb.jsx");

// --- 6. FOOTER BRAND (The consistent brand outro) ---
fs.writeFileSync(
  path.join(componentsDir, "FooterBrand.jsx"),
  `import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const FooterBrand = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({ frame, fps, config: { damping: 14 } });
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity, transform: \`scale(\${scale})\` }}>
      <h1 style={{ fontSize: "80px", color: "#FFFFFF", fontWeight: 900, letterSpacing: "0.2em", margin: 0, textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>
        FINANCE QUBIT
      </h1>
      <p style={{ fontSize: "30px", color: "#A78BFA", letterSpacing: "0.3em", marginTop: "20px", fontWeight: 600, textShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}>
        LEARN FINANCE. GROW WEALTH.
      </p>
      <div style={{ marginTop: "40px", width: "100px", height: "4px", background: "#A78BFA", borderRadius: "10px", boxShadow: "0 0 20px #A78BFA" }} />
    </div>
  );
};
`
);
log("Wrote FooterBrand.jsx");

console.log("\n🎉 Component Library Successfully Created!");
console.log("📁 Path: src/remotion/platforms/youtube/components/");
console.log("\nYou now have 6 reusable components:");
console.log("1. ClayBox.jsx      (3D Container)");
console.log("2. NeonText.jsx     (Animated Text)");
console.log("3. GoldCoin.jsx     (Animated Rupee Coin)");
console.log("4. NeonChart.jsx    (SVG Line Chart)");
console.log("5. GlowOrb.jsx      (Background Glow)");
console.log("6. FooterBrand.jsx  (Brand Outro)");
console.log("\nRun `npx remotion studio src/remotion/index.js` to verify they load.");