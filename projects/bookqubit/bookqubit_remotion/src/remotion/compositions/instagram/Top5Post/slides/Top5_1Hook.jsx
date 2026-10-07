import React from "react";
import { AbsoluteFill } from "remotion";
import PostChrome from "../components/PostChrome.jsx";

const Top5_1Hook = ({ data }) => {
  const t = data.theme;

  return (
    <AbsoluteFill style={{ backgroundColor: "#09090b", color: "#fff", fontFamily: "Arial", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 30% 25%, ${t.bg} 0%, #09090b 60%)`,
        }}
      />

      <div style={{ position: "absolute", left: 70, right: 70, top: 480 }}>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 6, color: t.hero, marginBottom: 28 }}>
          {data.listLabel || "THE LIST"}
        </div>
        <div style={{ fontSize: 132, lineHeight: 0.92, fontWeight: 900, letterSpacing: -7, color: "#fff" }}>
          {data.title.replace(/^Top 5\s/i, "").toUpperCase().split(" ").map((w, i) => (
            <div key={i}>{w}</div>
          ))}
        </div>
        <div style={{ marginTop: 50, maxWidth: 850, fontSize: 32, lineHeight: 1.4, color: "#d4d4d8" }}>
          {data.subtitle}
        </div>
      </div>

      <PostChrome
        index={1}
        total={7}
        headerColor="#a1a1aa"
        footerColor="#71717a"
        website={data.website || "www.book.qubit.com"}
        brand={data.brand || "BOOKQUBIT"}
      />
    </AbsoluteFill>
  );
};

export default Top5_1Hook;
