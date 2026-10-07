import React from "react";
import { AbsoluteFill } from "remotion";
import PostChrome from "../components/PostChrome.jsx";
import BrandLogo from "../../../../shared/components/BrandLogo.jsx";

const Top5_7CTA = ({ data }) => {
  const t = data.theme;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#09090b", color: "#fff", fontFamily: "Arial",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        overflow: "hidden",
      }}
    >
      <AbsoluteFill style={{ background: `radial-gradient(circle at 50% 40%, ${t.bg} 0%, #09090b 70%)` }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <BrandLogo size={72} />
        <div style={{ marginTop: 80, fontSize: 66, fontWeight: 900, lineHeight: 1.1, letterSpacing: -2 }}>
          Save this list.
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: "#a1a1aa", lineHeight: 1.4 }}>
          Which one are you reading first?
        </div>
        <div
          style={{
            marginTop: 80, padding: "22px 50px", borderRadius: 50,
            backgroundColor: "#fff", color: "#09090b",
            fontSize: 26, fontWeight: 800,
          }}
        >
          @bookqubit
        </div>
      </div>

      <PostChrome
        index={7}
        total={7}
        headerColor="#a1a1aa"
        footerColor="#71717a"
        website={data.website || "www.book.qubit.com"}
        brand={data.brand || "BOOKQUBIT"}
      />
    </AbsoluteFill>
  );
};

export default Top5_7CTA;
