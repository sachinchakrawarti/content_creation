import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const remotionDir = path.join(root, "src", "remotion");

const log = (msg) => console.log(`\n✅ ${msg}`);

// 1. Clean up old video files and folders
log("Cleaning up video files...");
const filesToDelete = [
  "Composition.jsx",
  "videos/CryptoUpdate.jsx",
  "LogoScene.jsx",
  "ChannelAssets.jsx" // removing old root version
];
filesToDelete.forEach(f => {
  const p = path.join(remotionDir, f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
});

// 2. Ensure ONLY the image folder structure exists
fs.mkdirSync(path.join(remotionDir, "components"), { recursive: true });
fs.mkdirSync(path.join(remotionDir, "images"), { recursive: true });
fs.mkdirSync(path.join(root, "out"), { recursive: true });
log("Created image folder structure");

// 3. Write the reusable Icon Component
const qubitIconJsx = `import React from "react";

export const QubitIcon = ({ scale = 1 }) => (
  <div style={{ transform: \`scale(\${scale})\`, marginBottom: 20 }} className="relative w-[300px] h-[340px] flex justify-center items-center">
    <div className="absolute w-[240px] h-[260px] bg-gradient-to-br from-[#fde047] to-[#eab308] clip-hexagon shadow-2xl" />
    <div className="absolute w-[220px] h-[240px] bg-[#0b0f19] clip-hexagon" />
    <span className="absolute text-[#fde047] font-bold text-[100px] font-sans" style={{ marginTop: -20 }}>₹</span>
    <div className="absolute bottom-[20px] right-[10px] w-[100px] h-[30px] bg-gradient-to-r from-[#eab308] to-[#fde047] rotate-[45deg] rounded-sm shadow-xl" />
  </div>
);
`;
fs.writeFileSync(path.join(remotionDir, "components", "QubitIcon.jsx"), qubitIconJsx);

// 4. Write Image Compositions (ONLY Images)
const channelAssets = `import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { QubitIcon } from "../components/QubitIcon";

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
fs.writeFileSync(path.join(remotionDir, "images", "ChannelAssets.jsx"), channelAssets);

// 5. Write Root.jsx (ONLY Stills, no Compositions)
const rootJsx = `import { Still } from "remotion";
import { ChannelLogo, ChannelBanner } from "./images/ChannelAssets";
import "./index.css";

export const RemotionRoot = () => {
  return (
    <>
      <style>{\`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      \`}</style>

      {/* ONLY Images - No video code! */}
      <Still id="ChannelLogo" component={ChannelLogo} width={800} height={800} />
      <Still id="ChannelBanner" component={ChannelBanner} width={2560} height={1440} />
    </>
  );
};
`;
fs.writeFileSync(path.join(remotionDir, "Root.jsx"), rootJsx);

log("Updated Root.jsx for Images ONLY");

// 6. Render the images
try {
  console.log("\n🎨 Rendering channel logo...");
  execSync("npx remotion still src/remotion/index.js ChannelLogo out/channel-logo.png", { stdio: "inherit", cwd: root });
  
  console.log("\n🎨 Rendering channel banner...");
  execSync("npx remotion still src/remotion/index.js ChannelBanner out/channel-banner.png", { stdio: "inherit", cwd: root });

  console.log("\n🎉 DONE! Check the 'out' folder for your images.");
} catch (e) {
  console.error("\n❌ Render failed. Make sure your Next.js dev server is stopped.");
}