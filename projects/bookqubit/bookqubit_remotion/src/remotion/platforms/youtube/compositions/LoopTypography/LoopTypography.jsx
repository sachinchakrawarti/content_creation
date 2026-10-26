import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import AmbientBackground from "../../components/AmbientBackground.jsx";
import CornerBranding from "../../components/CornerBranding.jsx";

const PLAYFAIR = '"Playfair Display", Georgia, "Times New Roman", serif';
const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

const LoopTypography = ({ book, website = "www.bookqubit.com" }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const p = book.palette;

  // Intro fade + slide
  const introOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });
  const introY = interpolate(frame, [0, 25], [30, 0], {
    extrapolateRight: "clamp",
  });

  // Rotating key points — every ~2.5s
  const perPoint = Math.floor(durationInFrames / book.keyPoints.length);
  const pointIndex = Math.floor(frame / perPoint) % book.keyPoints.length;
  const pointFrame = frame % perPoint;

  // Crossfade in/out for each key point
  const pointOpacity = interpolate(
    pointFrame,
    [0, 15, perPoint - 15, perPoint],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Title subtle "breath"
  const titleScale = 1 + Math.sin((frame / fps) * 0.4) * 0.005;

  return (
    <AbsoluteFill>
      <AmbientBackground palette={p} />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 120px",
          opacity: introOpacity,
          transform: `translateY(${introY}px)`,
        }}
      >
        {/* NOW READING label */}
        <div
          style={{
            fontFamily: INTER,
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: 10,
            color: p.accent,
            textTransform: "uppercase",
            marginBottom: 50,
          }}
        >
          Now Reading
        </div>

        {/* Book title — the hero */}
        <div
          style={{
            fontFamily: PLAYFAIR,
            fontSize: 160,
            fontWeight: 900,
            letterSpacing: -4,
            lineHeight: 1,
            color: p.text,
            textAlign: "center",
            transform: `scale(${titleScale})`,
            maxWidth: 1500,
          }}
        >
          {book.title}
        </div>

        {/* Accent divider */}
        <div
          style={{
            width: 90,
            height: 5,
            background: p.accent,
            borderRadius: 6,
            marginTop: 45,
            marginBottom: 45,
            boxShadow: `0 0 30px ${p.accent}88`,
          }}
        />

        {/* Author */}
        <div
          style={{
            fontFamily: INTER,
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: 1,
            color: p.muted,
            marginBottom: 90,
          }}
        >
          by {book.author}
        </div>

        {/* Rotating key point */}
        <div
          style={{
            opacity: pointOpacity,
            fontFamily: PLAYFAIR,
            fontSize: 54,
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: -0.5,
            lineHeight: 1.3,
            color: p.text,
            textAlign: "center",
            maxWidth: 1400,
            minHeight: 140,
          }}
        >
          “{book.keyPoints[pointIndex]}”
        </div>
      </AbsoluteFill>

      <CornerBranding palette={p} website={website} />
    </AbsoluteFill>
  );
};

export default LoopTypography;