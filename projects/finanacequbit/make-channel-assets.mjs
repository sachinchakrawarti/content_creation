import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const log = (msg) => console.log(`\n✅ ${msg}`);

// 1. Ensure folders exist
fs.mkdirSync(path.join(root, "src", "remotion"), { recursive: true });
fs.mkdirSync(path.join(root, "public"), { recursive: true });
fs.mkdirSync(path.join(root, "out"), { recursive: true });

// 2. Write remotion.config.ts
fs.writeFileSync(
  path.join(root, "remotion.config.ts"),
  `import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind-v4";
Config.overrideBundlerConfig((c) => enableTailwind(c));\n`
);

// 3. Write index.css
fs.writeFileSync(path.join(root, "src", "remotion", "index.css"), `@import 'tailwindcss';\n`);

// 4. Write the 3D Icon as a Base64 image directly into the public folder
// (This is a transparent PNG of the golden 3D hexagon you provided)
const base64Icon = "iVBORw0KGgoAAAANSUhEUgAAA... (truncated)";
// (Note: Using pure CSS for the 3D effect below so it stays razor sharp in video rendering!)

// 5. Write ChannelAssets.jsx
const channelAssets = `import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const QubitIcon = ({ scale = 1 }) => (
  <div style={{ transform: \`scale(\${scale})\`, marginBottom: 20 }} className="relative w-[300px] h-[340px] flex justify-center items-center">
    {/* 3D Hexagon base */}
    <div className="absolute w-[240px] h-[260px] bg-gradient-to-br from-[#fde047] to-[#eab308] clip-hexagon shadow-2xl" />
    <div className="absolute w-[220px] h-[240px] bg-[#0b0f19] clip-hexagon" />
    
    {/* Rupee Symbol */}
    <span className="absolute text-[#fde047] font-bold text-[100px] font-sans" style={{ marginTop: -20 }}>₹</span>
    
    {/* 3D Q Tail */}
    <div className="absolute bottom-[20px] right-[10px] w-[100px] h-[30px] bg-gradient-to-r from-[#eab308] to-[#fde047] rotate-[45deg] rounded-sm shadow-xl" />
  </div>
);

export const ChannelLogo = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [0, 30], [0.4, 0.6], { extrapolateRight: "clamp" });
  
  return (
    <AbsoluteFill className="bg-[#0b0f19] justify-center items-center">
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, #eab308, transparent)", opacity: glow }} />
      
      <div className="relative flex flex-col items-center justify-center mt-10">
        <QubitIcon scale={0.9} />
        
        <div className="flex flex-col items-center mt-6">
          <h1 className="text-white font-black tracking-widest leading-none font-sans" style={{ fontSize: 64 }}>FINANCE</h1>
          <h1 className="text-white font-black tracking-widest leading-none font-sans mt-2" style={{ fontSize: 64 }}>QUBIT</h1>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="w-16 h-1 bg-[#eab308]" />
            <p className="text-[#eab308] font-bold tracking-widest text-2xl">HINDI</p>
            <div className="w-16 h-1 bg-[#eab308]" />
          </div>
          
          <p className="text-[#94a3b8] text-xl mt-4 font-medium tracking-wide">Learn Finance. Grow Wealth.</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const ChannelBanner = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [0, 30], [0.3, 0.5], { extrapolateRight: "clamp" });
  
  return (
    <AbsoluteFill className="bg-[#0b0f19]">
      <div className="absolute w-[1000px] h-[1000px] rounded-full blur-[180px]" style={{ left: 100, top: "50%", transform: "translateY(-50%)", background: "radial-gradient(circle, #eab308, transparent)", opacity: glow }} />
      
      {/* Safe Area Container */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-20" style={{ width: 1235, height: 338 }}>
        <QubitIcon scale={0.8} />
        
        <div className="text-left flex flex-col items-start">
          <h1 className="text-white font-black tracking-widest leading-none m-0 font-sans" style={{ fontSize: 110 }}>FINANCE</h1>
          <h1 className="text-white font-black tracking-widest leading-none m-0 font-sans" style={{ fontSize: 110 }}>QUBIT</h1>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="w-20 h-2 bg-[#eab308]" />
            <p className="text-[#eab308] font-bold tracking-widest text-4xl">HINDI</p>
            <div className="w-20 h-2 bg-[#eab308]" />
          </div>
          
          <p className="text-[#94a3b8] text-3xl mt-4 font-medium tracking-wide">Learn Finance. Grow Wealth.</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
`;

fs.writeFileSync(path.join(root, "src", "remotion", "ChannelAssets.jsx"), channelAssets);

// 6. Write Root.jsx (Adding CSS clip-path utility for the hexagon)
const rootJsx = `import { Composition, Still } from "remotion";
import { ChannelLogo, ChannelBanner } from "./ChannelAssets";
import "./index.css";

export const RemotionRoot = () => {
  return (
    <>
      <style>{\`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      \`}</style>
      <Still id="ChannelLogo" component={ChannelLogo} width={800} height={800} />
      <Still id="ChannelBanner" component={ChannelBanner} width={2560} height={1440} />
    </>
  );
};
`;
fs.writeFileSync(path.join(root, "src", "remotion", "Root.jsx"), rootJsx);

// 7. Write index.js
fs.writeFileSync(
  path.join(root, "src", "remotion", "index.js"),
  `import { registerRoot } from "remotion";\nimport { RemotionRoot } from "./Root";\nregisterRoot(RemotionRoot);\n`
);

log("All files updated with the Golden 3D Theme!");

// 8. Install & Render
try {
  console.log("\n📦 Ensuring dependencies are installed...");
  // Only install if missing to save time
  if (!fs.existsSync(path.join(root, "node_modules", "@remotion", "tailwind-v4"))) {
    execSync("npm i remotion @remotion/cli @remotion/tailwind-v4 tailwindcss", { stdio: "inherit", cwd: root });
  }

  console.log("\n🎨 Rendering channel logo...");
  execSync("npx remotion still src/remotion/index.js ChannelLogo out/channel-logo.png", { stdio: "inherit", cwd: root });
  
  console.log("\n🎨 Rendering channel banner...");
  execSync("npx remotion still src/remotion/index.js ChannelBanner out/channel-banner.png", { stdio: "inherit", cwd: root });

  console.log("\n🎉 DONE! Check the 'out' folder for your PNGs.");
} catch (e) {
  console.error("Render failed. Make sure your Next.js dev server is stopped (Ctrl+C).");
}