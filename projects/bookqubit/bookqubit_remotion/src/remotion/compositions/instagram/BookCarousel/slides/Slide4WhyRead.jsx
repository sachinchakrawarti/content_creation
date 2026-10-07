import React from "react";
import { AbsoluteFill } from "remotion";
import SlideHeader from "../../../../shared/components/SlideHeader.jsx";

const Slide4WhyRead = ({ book }) => (
  <AbsoluteFill style={{ backgroundColor: "#fafafa", color: "#171717", fontFamily: "Arial", padding: 70 }}>
    <SlideHeader left="WHY READ IT?" index={4} />

    <div style={{ marginTop: 90, fontSize: 78, lineHeight: 1, fontWeight: 900, letterSpacing: -4 }}>
      4 reasons<br />to read it.
    </div>

    <div style={{ marginTop: 80, display: "flex", flexDirection: "column", gap: 32 }}>
      {book.whyRead.map((reason, index) => (
        <div key={reason} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
          <div
            style={{
              minWidth: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "#171717",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.4, paddingTop: 10, maxWidth: 800 }}>{reason}</div>
        </div>
      ))}
    </div>

    <div style={{ position: "absolute", bottom: 55, left: 70, fontSize: 20, color: "#737373" }}>
      BOOKQUBIT
    </div>
  </AbsoluteFill>
);

export default Slide4WhyRead;
