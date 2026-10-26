import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const remotionDir = path.join(root, "src", "remotion");

const log = (msg) => console.log(`✅ ${msg}`);

// 1. Clean up old flat files
log("Cleaning up old Remotion files...");
const filesToDelete = [
  "ChannelAssets.jsx", 
  "Composition.jsx", 
  "LogoScene.jsx"
];
filesToDelete.forEach(f => {
  const p = path.join(remotionDir, f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
});

// 2. Create the new platform folder structure
fs.mkdirSync(path.join(remotionDir, "components"), { recursive: true });
fs.mkdirSync(path.join(remotionDir, "platforms", "youtube", "videos"), { recursive: true });
fs.mkdirSync(path.join(remotionDir, "platforms", "youtube", "images"), { recursive: true });
fs.mkdirSync(path.join(remotionDir, "platforms", "instagram", "videos"), { recursive: true });
fs.mkdirSync(path.join(remotionDir, "platforms", "pinterest", "images"), { recursive: true });
log("Created platform folders (youtube, instagram, pinterest)");

// 3. Create Shared Components (QubitIcon.jsx)
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
log("Wrote components/QubitIcon.jsx");

// 4. YouTube Images (Logo, Banner, Thumbnail)
const ytImages = `import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { QubitIcon } from "../../../components/QubitIcon";

export const YTChannelLogo = () => {
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

export const YTChannelBanner = () => {
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

export const YTThumbnail = () => (
  <AbsoluteFill className="bg-[#0b0f19] justify-center items-center flex-col">
    <h1 className="text-white text-8xl font-black mb-8">CRYPTO UPDATE</h1>
    <div className="bg-[#eab308] px-8 py-4 rounded-xl">
      <h2 className="text-black text-6xl font-bold">BITCOIN $67K</h2>
    </div>
  </AbsoluteFill>
);
`;
fs.writeFileSync(path.join(remotionDir, "platforms", "youtube", "images", "Index.jsx"), ytImages);
log("Wrote platforms/youtube/images/Index.jsx");

// 5. YouTube Video (Daily Crypto)
const ytVideo = `import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Sequence } from "remotion";
import { QubitIcon } from "../../../components/QubitIcon";

export const YTDailyCrypto = ({ marketData }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill className="bg-[#0b0f19] text-white justify-center items-center">
      <Sequence from={0} durationInFrames={150}>
        <AbsoluteFill className="justify-center items-center flex-col">
          <QubitIcon scale={1.5} />
          <h1 className="text-6xl font-bold mt-10">Daily Crypto Update</h1>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={150} durationInFrames={450}>
        <AbsoluteFill className="justify-center items-center flex-col">
          <h1 className="text-8xl font-black text-[#eab308]">BTC</h1>
          <h2 className="text-9xl font-bold mt-4">\${marketData.bitcoin.price}</h2>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
`;
fs.writeFileSync(path.join(remotionDir, "platforms", "youtube", "videos", "DailyCrypto.jsx"), ytVideo);
log("Wrote platforms/youtube/videos/DailyCrypto.jsx");

// 6. Instagram Video (Reels - 9:16)
const igVideo = `import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { QubitIcon } from "../../../components/QubitIcon";

export const IGReelCrypto = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 30], [0.8, 1], { extrapolateRight: "clamp" });
  
  return (
    <AbsoluteFill className="bg-[#0b0f19] text-white justify-center items-center flex-col">
      <div style={{ transform: \`scale(\${scale})\` }} className="flex flex-col items-center">
        <QubitIcon scale={1.2} />
        <h1 className="text-5xl font-bold mt-12 text-center px-8">Top Crypto News Today</h1>
        <p className="text-[#eab308] text-3xl mt-8">Swipe Up!</p>
      </div>
    </AbsoluteFill>
  );
};
`;
fs.writeFileSync(path.join(remotionDir, "platforms", "instagram", "videos", "ReelCrypto.jsx"), igVideo);
log("Wrote platforms/instagram/videos/ReelCrypto.jsx");

// 7. Pinterest Image (Infographic - 2:3)
const pinImage = `import React from "react";
import { AbsoluteFill } from "remotion";
import { QubitIcon } from "../../../components/QubitIcon";

export const PinInfographic = () => (
  <AbsoluteFill className="bg-white justify-center items-center flex-col p-10">
    <QubitIcon scale={1} />
    <h1 className="text-[#0b0f19] text-6xl font-black mt-12 text-center">5 RULES OF WEALTH</h1>
    <div className="mt-12 flex flex-col gap-6 w-full max-w-2xl">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="bg-gray-100 p-6 rounded-xl flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#eab308] text-white flex justify-center items-center font-bold text-2xl">{i}</div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  </AbsoluteFill>
);
`;
fs.writeFileSync(path.join(remotionDir, "platforms", "pinterest", "images", "Infographic.jsx"), pinImage);
log("Wrote platforms/pinterest/images/Infographic.jsx");

// 8. Write Root.jsx (This is where everything connects)
const rootJsx = `import { Composition, Still } from "remotion";
import { YTDailyCrypto } from "./platforms/youtube/videos/DailyCrypto";
import { YTChannelLogo, YTChannelBanner, YTThumbnail } from "./platforms/youtube/images/Index";
import { IGReelCrypto } from "./platforms/instagram/videos/ReelCrypto";
import { PinInfographic } from "./platforms/pinterest/images/Infographic";
import "./index.css";

export const RemotionRoot = () => {
  return (
    <>
      <style>{\`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      \`}</style>

      {/* ================= YOUTUBE ================= */}
      {/* Videos */}
      <Composition
        id="YTDailyCrypto"
        component={YTDailyCrypto}
        durationInFrames={1800}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{ marketData: { bitcoin: { price: 67000, change24h: 2.4 }, fetchedAt: new Date().toISOString() } }}
      />
      
      {/* Images */}
      <Still id="YTChannelLogo" component={YTChannelLogo} width={800} height={800} />
      <Still id="YTChannelBanner" component={YTChannelBanner} width={2560} height={1440} />
      <Still id="YTThumbnail" component={YTThumbnail} width={1280} height={720} />

      {/* ================= INSTAGRAM ================= */}
      {/* Reels (Vertical 9:16) */}
      <Composition
        id="IGReelCrypto"
        component={IGReelCrypto}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ================= PINTEREST ================= */}
      {/* Infographic (Vertical 2:3) */}
      <Still id="PinInfographic" component={PinInfographic} width={1000} height={1500} />
    </>
  );
};
`;
fs.writeFileSync(path.join(remotionDir, "Root.jsx"), rootJsx);
log("Wrote Root.jsx with all platform registrations");

// 9. Write index.js
fs.writeFileSync(
  path.join(remotionDir, "index.js"),
  `import { registerRoot } from "remotion";\nimport { RemotionRoot } from "./Root";\nregisterRoot(RemotionRoot);\n`
);

console.log("\n🎉 Success! Your project is now organized by platform.");
console.log("\nTo preview everything in the Studio, run:");
console.log("👉 npx remotion studio src/remotion/index.js");