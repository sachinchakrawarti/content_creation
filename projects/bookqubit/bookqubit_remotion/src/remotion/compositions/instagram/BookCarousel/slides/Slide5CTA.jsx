import React from "react";
import { AbsoluteFill } from "remotion";
import BrandLogo from "../../../../shared/components/BrandLogo.jsx";
import SlideHeader from "../../../../shared/components/SlideHeader.jsx";

const Slide5CTA = () => (
  <AbsoluteFill
    style={{
      backgroundColor: "#09090b",
      color: "#fff",
      fontFamily: "Arial",
      padding: 70,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <div style={{ position: "absolute", top: 65, left: 70, right: 70 }}>
      <SlideHeader left="BOOKQUBIT" index={5} color="#71717a" />
    </div>

    <BrandLogo size={72} />

    <div style={{ marginTop: 90, fontSize: 68, fontWeight: 900, lineHeight: 1.05, letterSpacing: -3 }}>
      DISCOVER.<br />SUMMARIES.<br />CONNECT.
    </div>

    <div style={{ marginTop: 60, fontSize: 30, lineHeight: 1.4, color: "#a1a1aa" }}>
      Books, authors and stories<br />worth knowing.
    </div>

    <div
      style={{
        marginTop: 80,
        padding: "22px 50px",
        borderRadius: 50,
        backgroundColor: "#fff",
        color: "#09090b",
        fontSize: 26,
        fontWeight: 800,
        display: "inline-block",
      }}
    >
      bookqubit.com
    </div>

    <div style={{ position: "absolute", bottom: 55, fontSize: 18, letterSpacing: 3, color: "#52525b" }}>
      YOUR NEXT STORY IS WAITING.
    </div>
  </AbsoluteFill>
);

export default Slide5CTA;
