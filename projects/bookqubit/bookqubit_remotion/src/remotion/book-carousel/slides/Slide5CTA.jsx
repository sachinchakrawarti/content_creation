import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import BrandLogo from "../components/BrandLogo";

const Slide5CTA = ({ book }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: {
      damping: 14,
      stiffness: 100,
    },
  });

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#09090b",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: 70,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 65,
          left: 70,
          right: 70,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 3,
          color: "#71717a",
        }}
      >
        <span>BOOKQUBIT</span>
        <span>05 / 05</span>
      </div>

      <div
        style={{
          opacity,
          transform: `scale(${progress})`,
        }}
      >
        <BrandLogo size={68} />

        <div
          style={{
            marginTop: 90,
            fontSize: 60,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -3,
          }}
        >
          DISCOVER.
          <br />
          SUMMARIES.
          <br />
          CONNECT.
        </div>

        <div
          style={{
            marginTop: 55,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#a1a1aa",
          }}
        >
          Books, authors and stories
          <br />
          worth knowing.
        </div>

        <div
          style={{
            marginTop: 70,
            padding: "20px 45px",
            borderRadius: 50,
            backgroundColor: "#ffffff",
            color: "#09090b",
            fontSize: 25,
            fontWeight: 800,
            display: "inline-block",
          }}
        >
          bookqubit.com
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 55,
          fontSize: 18,
          letterSpacing: 3,
          color: "#52525b",
        }}
      >
        YOUR NEXT STORY IS WAITING.
      </div>
    </AbsoluteFill>
  );
};

export default Slide5CTA;