import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import AmbientBackground from "../../components/AmbientBackground.jsx";
import BookCover from "../../components/BookCover.jsx";
import CornerBranding from "../../components/CornerBranding.jsx";
import ChapterLabel from "../../components/ChapterLabel.jsx";

const PLAYFAIR = '"Playfair Display", Georgia, "Times New Roman", serif';
const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

const AmbientAudiobook = ({ book, website = "www.bookqubit.com" }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const p = book.palette;

  const pulse = 1 + Math.sin((frame / 120) * Math.PI) * 0.015;
  const floatY = Math.sin((frame / 180) * Math.PI) * 8;
  const introOpacity = interpolate(frame, [0, 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <AmbientBackground palette={p} durationInFrames={durationInFrames} />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
          opacity: introOpacity,
        }}
      >
        <div style={{ marginBottom: 50 }}>
          <ChapterLabel chapter={book.chapter} palette={p} delay={20} />
        </div>

        <div style={{ transform: `translateY(${floatY}px) scale(${pulse})` }}>
          <BookCover
            title={book.title}
            author={book.author}
            palette={p}
            width={340}
            height={490}
          />
        </div>

        <div style={{ marginTop: 60, textAlign: "center", maxWidth: 1200 }}>
          <div
            style={{
              fontFamily: PLAYFAIR,
              fontSize: 62,
              fontWeight: 900,
              letterSpacing: -1.5,
              lineHeight: 1.1,
              color: p.text,
            }}
          >
            {book.title}
          </div>
          <div
            style={{
              marginTop: 20,
              fontFamily: INTER,
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 0.5,
              color: p.muted,
            }}
          >
            by {book.author}
          </div>
        </div>
      </AbsoluteFill>

      <CornerBranding palette={p} website={website} />
    </AbsoluteFill>
  );
};

export default AmbientAudiobook;