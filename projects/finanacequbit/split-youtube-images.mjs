import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const remotionDir = path.join(root, "src", "remotion");
const ytImagesDir = path.join(remotionDir, "platforms", "youtube", "images");

const log = (msg) => console.log(`✅ ${msg}`);

// 1. Delete the old combined file
const oldFile = path.join(ytImagesDir, "Index.jsx");
if (fs.existsSync(oldFile)) {
  fs.unlinkSync(oldFile);
  log("Deleted old combined Index.jsx");
}

// 2. Create YTChannelLogo.jsx
const logoJsx = `import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { QubitIcon } from "../../../components/QubitIcon";

export const YTChannelLogo = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [0, 30], [0.4, 0.6], { extrapolateRight: "clamp" });
  
  return (
    <AbsoluteFill className="bg-[#0b0f19] justify-center items-center">
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px]" 
        style={{ background: "radial-gradient(circle, #eab308, transparent)", opacity: glow }} 
      />
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
`;
fs.writeFileSync(path.join(ytImagesDir, "YTChannelLogo.jsx"), logoJsx);
log("Created YTChannelLogo.jsx");

// 3. Create YTChannelBanner.jsx
const bannerJsx = `import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { QubitIcon } from "../../../components/QubitIcon";

export const YTChannelBanner = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [0, 30], [0.3, 0.5], { extrapolateRight: "clamp" });
  
  return (
    <AbsoluteFill className="bg-[#0b0f19]">
      <div 
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[180px]" 
        style={{ 
          left: 100, 
          top: "50%", 
          transform: "translateY(-50%)", 
          background: "radial-gradient(circle, #eab308, transparent)", 
          opacity: glow 
        }} 
      />
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-20" 
        style={{ width: 1235, height: 338 }}
      >
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
fs.writeFileSync(path.join(ytImagesDir, "YTChannelBanner.jsx"), bannerJsx);
log("Created YTChannelBanner.jsx");

// 4. Create YTThumbnail.jsx (Just in case you wanted this separated too)
const thumbJsx = `import React from "react";
import { AbsoluteFill } from "remotion";

export const YTThumbnail = () => (
  <AbsoluteFill className="bg-[#0b0f19] justify-center items-center flex-col">
    <h1 className="text-white text-8xl font-black mb-8">CRYPTO UPDATE</h1>
    <div className="bg-[#eab308] px-8 py-4 rounded-xl">
      <h2 className="text-black text-6xl font-bold">BITCOIN $67K</h2>
    </div>
  </AbsoluteFill>
);
`;
fs.writeFileSync(path.join(ytImagesDir, "YTThumbnail.jsx"), thumbJsx);
log("Created YTThumbnail.jsx");

// 5. Update Root.jsx to point to the new individual files
const rootPath = path.join(remotionDir, "Root.jsx");
let rootContent = fs.readFileSync(rootPath, "utf-8");

// Replace the old combined import with three new imports
rootContent = rootContent.replace(
  `import { YTChannelLogo, YTChannelBanner, YTThumbnail } from "./platforms/youtube/images/Index";`,
  `import { YTChannelLogo } from "./platforms/youtube/images/YTChannelLogo";
import { YTChannelBanner } from "./platforms/youtube/images/YTChannelBanner";
import { YTThumbnail } from "./platforms/youtube/images/YTThumbnail";`
);

fs.writeFileSync(rootPath, rootContent);
log("Updated Root.jsx with new individual imports");

console.log("\n🎉 Success! YouTube images are now in separate files.");
console.log("👉 Run: npx remotion studio src/remotion/index.js to preview.");