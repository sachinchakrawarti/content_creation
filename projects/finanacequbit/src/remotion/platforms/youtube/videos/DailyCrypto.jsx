import React from "react";
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
          <h2 className="text-9xl font-bold mt-4">${marketData.bitcoin.price}</h2>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
