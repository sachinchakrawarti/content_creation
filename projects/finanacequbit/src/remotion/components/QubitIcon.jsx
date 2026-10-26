import React from "react";

export const QubitIcon = ({ scale = 1 }) => (
  <div style={{ transform: `scale(${scale})`, marginBottom: 20 }} className="relative w-[300px] h-[340px] flex justify-center items-center">
    <div className="absolute w-[240px] h-[260px] bg-gradient-to-br from-[#fde047] to-[#eab308] clip-hexagon shadow-2xl" />
    <div className="absolute w-[220px] h-[240px] bg-[#0b0f19] clip-hexagon" />
    <span className="absolute text-[#fde047] font-bold text-[100px] font-sans" style={{ marginTop: -20 }}>₹</span>
    <div className="absolute bottom-[20px] right-[10px] w-[100px] h-[30px] bg-gradient-to-r from-[#eab308] to-[#fde047] rotate-[45deg] rounded-sm shadow-xl" />
  </div>
);
