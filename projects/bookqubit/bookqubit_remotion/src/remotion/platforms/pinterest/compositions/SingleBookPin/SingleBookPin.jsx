import React from "react";
import { AbsoluteFill } from "remotion";
import BookCover from "../../components/BookCover.jsx";
import CTA from "../../components/CTA.jsx";
import SaveBadge from "../../components/SaveBadge.jsx";
import KeyPoint from "../../components/KeyPoint.jsx";

const PLAYFAIR = '"Playfair Display", Georgia, "Times New Roman", serif';
const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
const DEVANAGARI_SERIF = '"Noto Serif Devanagari", "Nirmala UI", "Mangal", serif';
const DEVANAGARI_SANS = '"Noto Sans Devanagari", "Nirmala UI", "Mangal", sans-serif';

const hasDevanagari = (s = "") => /[\u0900-\u097F]/.test(s);

const SingleBookPin = ({
  book,
  siteName = "BookQubit",
  tagline = "",
  saveLabel = "Save",
  keyPointsLabel = "Key Points",
  byLabel = "by",
}) => {
  const p = book.palette;
  const isHindi = hasDevanagari(book.title) || hasDevanagari(siteName);

  const titleFont = isHindi ? DEVANAGARI_SERIF : PLAYFAIR;
  const titleSize = isHindi ? 72 : 84;
  const titleLineHeight = isHindi ? 1.18 : 0.98;
  const titleLetterSpacing = isHindi ? 0 : -2.5;
  const uiFont = isHindi ? DEVANAGARI_SANS : INTER;

  return (
    <AbsoluteFill
style={{
  fontFamily: uiFont,
  overflow: "hidden",
  background: `linear-gradient(180deg, ${p.bg} 0%, ${p.bg2} 55%, ${p.bg} 100%)`,
  color: p.text
}}
 >
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 18%, ${p.accent}22 0%, transparent 55%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "70px 70px 60px 70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: p.accent, boxShadow: `0 0 18px ${p.accent}`, flexShrink: 0 }} />
            <div style={{ fontFamily: uiFont, fontSize: isHindi ? 30 : 28, fontWeight: 900, letterSpacing: isHindi ? 0 : 3, color: p.text }}>
              {siteName}
            </div>
          </div>
          <SaveBadge label={saveLabel} theme={{ accent: p.accent, text: p.text }} isHindi={isHindi} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: isHindi ? 44 : 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
            <BookCover title={book.title} author={book.author} palette={p} width={340} height={480} isHindi={isHindi} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: isHindi ? 14 : 18 }}>
              <div style={{ fontFamily: uiFont, fontSize: isHindi ? 20 : 22, fontWeight: 800, letterSpacing: isHindi ? 1 : 5, color: p.accent, textTransform: isHindi ? "none" : "uppercase" }}>
                {book.tag}
              </div>
              <div style={{ fontFamily: titleFont, fontSize: titleSize, fontWeight: 900, letterSpacing: titleLetterSpacing, lineHeight: titleLineHeight, color: p.text }}>
                {book.title}
              </div>
              <div style={{ fontFamily: uiFont, fontSize: isHindi ? 26 : 28, color: p.muted, fontWeight: 600, letterSpacing: isHindi ? 0 : 0.5, marginTop: 6 }}>
                {byLabel ? `${byLabel} ${book.author}` : book.author}
              </div>
            </div>
          </div>

          <div style={{ height: 1, backgroundColor: `${p.accent}55` }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 8, height: 32, borderRadius: 6, background: p.accent }} />
              <div style={{ fontFamily: uiFont, fontSize: isHindi ? 26 : 28, fontWeight: 900, letterSpacing: isHindi ? 1 : 6, color: p.accent, textTransform: isHindi ? "none" : "uppercase" }}>
                {keyPointsLabel}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {book.keyPoints.map((point, i) => (
                <KeyPoint key={i} text={point} accent={p.accent} textColor={p.text} isHindi={isHindi} />
              ))}
            </div>
          </div>
        </div>

        <CTA website="www.bookqubit.com" tagline={tagline} isHindi={isHindi} />
      </div>
    </AbsoluteFill>
  );
};

export default SingleBookPin;