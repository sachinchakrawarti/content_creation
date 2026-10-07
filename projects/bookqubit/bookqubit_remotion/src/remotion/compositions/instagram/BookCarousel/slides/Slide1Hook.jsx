import React from "react";
import { AbsoluteFill } from "remotion";
import SlideHeader from "../../../../shared/components/SlideHeader.jsx";

const Slide1Hook = ({ book }) => (
  <AbsoluteFill style={{ backgroundColor: "#09090b", color: "#fff", fontFamily: "Arial", padding: 70 }}>
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #1a1a2e 0%, #09090b 60%)",
      }}
    />
    <div style={{ position: "absolute", top: 65, left: 70, right: 70 }}>
      <SlideHeader left="BOOKQUBIT" index={1} color="#a1a1aa" />
    </div>
    <div style={{ position: "absolute", left: 70, right: 70, top: 420 }}>
      <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 4, color: "#d4d4d8", marginBottom: 30 }}>
        BOOK DISCOVERY
      </div>
      <div style={{ fontSize: 110, lineHeight: 0.92, fontWeight: 900, letterSpacing: -5 }}>
        EVERYBODY<br />LIES.
      </div>
      <div style={{ marginTop: 50, maxWidth: 850, fontSize: 34, lineHeight: 1.35, color: "#d4d4d8" }}>
        But the internet might reveal what people really think.
      </div>
      <div style={{ marginTop: 50, fontSize: 26, color: "#a1a1aa" }}>{book.author}</div>
    </div>
  </AbsoluteFill>
);

export default Slide1Hook;
