import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
} from "remotion";

import everybodyLiesCover from "../images/everybody-lies.jpg";

const Slide1Hook = ({ book }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 90], [1.08, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#09090b",
        color: "#ffffff",
        overflow: "hidden",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <Img
        src={everybodyLiesCover}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
          opacity: 0.35,
        }}
      />

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.95) 100%)",
        }}
      />

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
        }}
      >
        <span>BOOKQUBIT</span>
        <span>01 / 05</span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 70,
          right: 70,
          bottom: 100,
          opacity,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 4,
            color: "#d4d4d8",
            marginBottom: 30,
          }}
        >
          BOOK DISCOVERY
        </div>

        <div
          style={{
            fontSize: 94,
            lineHeight: 0.92,
            fontWeight: 900,
            letterSpacing: -5,
          }}
        >
          EVERYBODY
          <br />
          LIES.
        </div>

        <div
          style={{
            marginTop: 35,
            maxWidth: 850,
            fontSize: 32,
            lineHeight: 1.35,
            color: "#d4d4d8",
          }}
        >
          But the internet might reveal what people really think.
        </div>

        <div
          style={{
            marginTop: 35,
            fontSize: 25,
            color: "#a1a1aa",
          }}
        >
          {book.author}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Slide1Hook;