import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { QubitIcon } from "../../../components/QubitIcon";

export const IGReelCrypto = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 30], [0.8, 1], { extrapolateRight: "clamp" });
  
  return (
    <AbsoluteFill className="bg-[#0b0f19] text-white justify-center items-center flex-col">
      <div style={{ transform: `scale(${scale})` }} className="flex flex-col items-center">
        <QubitIcon scale={1.2} />
        <h1 className="text-5xl font-bold mt-12 text-center px-8">Top Crypto News Today</h1>
        <p className="text-[#eab308] text-3xl mt-8">Swipe Up!</p>
      </div>
    </AbsoluteFill>
  );
};
