import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import AuthorImage from "../components/AuthorImage";
import sethStephensDavidowitz from "../images/seth-stephens-davidowitz.jpg";

const Slide3Author = ({ book }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.85, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#111827",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: 70,
        alignItems: "center",
        justifyContent: "center",
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
          color: "#9ca3af",
        }}
      >
        <span>THE AUTHOR</span>
        <span>03 / 05</span>
      </div>

      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 850,
        }}
      >
        <AuthorImage
          src={sethStephensDavidowitz}
          size={300}
        />

        <div
          style={{
            marginTop: 45,
            fontSize: 56,
            lineHeight: 1,
            fontWeight: 900,
            letterSpacing: -3,
          }}
        >
          {book.author}
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 27,
            lineHeight: 1.5,
            color: "#d1d5db",
          }}
        >
          {book.authorBio}
        </div>

        <div
          style={{
            marginTop: 45,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {book.tags.slice(0, 3).map((tag) => (
            <div
              key={tag}
              style={{
                padding: "12px 20px",
                borderRadius: 30,
                border: "1px solid #4b5563",
                fontSize: 19,
                color: "#d1d5db",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default Slide3Author;