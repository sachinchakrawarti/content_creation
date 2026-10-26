import React from "react";
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
