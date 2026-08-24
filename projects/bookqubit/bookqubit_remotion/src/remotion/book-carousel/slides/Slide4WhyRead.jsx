import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const Slide4WhyRead = ({ book }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#fafafa",
        color: "#171717",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: 70,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 3,
          color: "#737373",
        }}
      >
        <span>WHY READ IT?</span>
        <span>04 / 05</span>
      </div>

      <div
        style={{
          marginTop: 70,
          fontSize: 68,
          lineHeight: 1,
          fontWeight: 900,
          letterSpacing: -4,
        }}
      >
        4 reasons
        <br />
        to read it.
      </div>

      <div
        style={{
          marginTop: 70,
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        {book.whyRead.map((reason, index) => {
          const progress = spring({
            frame: frame - index * 8,
            fps,
            config: {
              damping: 15,
              stiffness: 120,
            },
          });

          const translateX = interpolate(
            progress,
            [0, 1],
            [120, 0]
          );

          return (
            <div
              key={reason}
              style={{
                display: "flex",
                gap: 25,
                alignItems: "flex-start",
                opacity: progress,
                transform: `translateX(${translateX}px)`,
              }}
            >
              <div
                style={{
                  minWidth: 55,
                  height: 55,
                  borderRadius: "50%",
                  backgroundColor: "#171717",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  fontWeight: 800,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div
                style={{
                  fontSize: 27,
                  lineHeight: 1.35,
                  paddingTop: 8,
                  maxWidth: 800,
                }}
              >
                {reason}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 55,
          left: 70,
          fontSize: 20,
          color: "#737373",
        }}
      >
        BOOKQUBIT
      </div>
    </AbsoluteFill>
  );
};

export default Slide4WhyRead;