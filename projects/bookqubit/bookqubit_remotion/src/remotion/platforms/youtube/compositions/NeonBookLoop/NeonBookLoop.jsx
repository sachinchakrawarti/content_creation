import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import LiquidNeonBackground from "../../components/LiquidNeonBackground.jsx";
import BookCover from "../../components/BookCover.jsx";
import CornerBranding from "../../components/CornerBranding.jsx";
import { FiBookOpen, FiGlobe, FiTrendingUp } from "react-icons/fi";

const PLAYFAIR = '"Playfair Display", Georgia, "Times New Roman", serif';
const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

const NeonBookLoop = ({ book, website = "www.bookqubit.com" }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const p = book.palette;

  // Cover entrance
  const coverSpring = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 90 },
  });
  const coverY = interpolate(coverSpring, [0, 1], [120, 0]);
  const coverOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const coverRotate = interpolate(coverSpring, [0, 1], [-8, 0]);
  const coverScale = interpolate(coverSpring, [0, 1], [0.9, 1]);

  // Text entrance
  const textSpring = spring({
    frame: frame - 12,
    fps,
    config: { damping: 18, stiffness: 90 },
  });
  const textX = interpolate(textSpring, [0, 1], [60, 0]);
  const textOpacity = interpolate(frame, [12, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Ad block entrance (after title)
  const adSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 20, stiffness: 80 },
  });
  const adY = interpolate(adSpring, [0, 1], [40, 0]);
  const adOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glow pulse on title (seamless)
  const t = (frame / durationInFrames) * Math.PI * 2;
  const glowPhase = Math.sin(t * 4);
  const glowSpread = 40 + glowPhase * 12;

  // Cover float
  const floatY = Math.sin(t * 2) * 6;

  return (
    <AbsoluteFill>
      <LiquidNeonBackground palette={p} />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 120px",
        }}
      >
        {/* ═══ TOP ROW: Cover LEFT + Title RIGHT ═══ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 90,
            marginBottom: 60,
          }}
        >
          {/* Cover (smaller) */}
          <div
            style={{
              opacity: coverOpacity,
              transform: `translateY(${coverY + floatY}px) rotate(${coverRotate}deg) scale(${coverScale})`,
              flexShrink: 0,
            }}
          >
            <BookCover
              title={book.title}
              author={book.author}
              palette={p}
              width={260}
              height={380}
            />
          </div>

          {/* Title + author */}
          <div
            style={{
              opacity: textOpacity,
              transform: `translateX(${textX}px)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: 900,
            }}
          >
            <div
              style={{
                fontFamily: INTER,
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: 10,
                color: p.accent,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Now Reading
            </div>

            <div
              style={{
                fontFamily: PLAYFAIR,
                fontSize: 110,
                fontWeight: 900,
                letterSpacing: -3,
                lineHeight: 1,
                color: p.text,
                textShadow: `0 0 ${glowSpread}px ${p.accent}`,
              }}
            >
              {book.title}
            </div>

            <div
              style={{
                marginTop: 34,
                width: 90,
                height: 5,
                borderRadius: 6,
                background: p.accent,
                boxShadow: `0 0 26px ${p.accent}`,
              }}
            />

            <div
              style={{
                marginTop: 34,
                fontFamily: INTER,
                fontSize: 32,
                fontWeight: 600,
                letterSpacing: 1.2,
                color: p.muted,
              }}
            >
              by {book.author}
            </div>
          </div>
        </div>

        {/* ═══ BOTTOM: BookQubit Ad Block ═══ */}
        <div
          style={{
            opacity: adOpacity,
            transform: `translateY(${adY}px)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 50,
            padding: "32px 56px",
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.06)",
            border: `1px solid ${p.accent}55`,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: `0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`,
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: p.accent,
                boxShadow: `0 0 18px ${p.accent}`,
              }}
            />
            <span
              style={{
                fontFamily: INTER,
                fontSize: 24,
                fontWeight: 900,
                letterSpacing: 2,
                color: p.text,
              }}
            >
              BookQubit
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 40,
              background: `${p.accent}44`,
            }}
          />

          {/* Feature 1: Multilingual */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FiGlobe size={20} color={p.accent} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: INTER,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 0.5,
                color: p.text,
                opacity: 0.9,
              }}
            >
              Multilingual
            </span>
          </div>

          {/* Feature 2: Reading history */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FiTrendingUp size={20} color={p.accent} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: INTER,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 0.5,
                color: p.text,
                opacity: 0.9,
              }}
            >
              Track your reading
            </span>
          </div>

          {/* Feature 3: Summaries */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <FiBookOpen size={20} color={p.accent} strokeWidth={2.4} />
            <span
              style={{
                fontFamily: INTER,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 0.5,
                color: p.text,
                opacity: 0.9,
              }}
            >
              Book summaries
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 1,
              height: 40,
              background: `${p.accent}44`,
            }}
          />

          {/* Website */}
          <span
            style={{
              fontFamily: INTER,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: 1,
              color: p.accent,
            }}
          >
            {website}
          </span>
        </div>
      </AbsoluteFill>

      <CornerBranding palette={p} website={website} />
    </AbsoluteFill>
  );
};

export default NeonBookLoop;