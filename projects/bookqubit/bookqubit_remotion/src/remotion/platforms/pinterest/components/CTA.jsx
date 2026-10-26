import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
const DEVANAGARI_SANS = '"Noto Sans Devanagari", "Nirmala UI", "Mangal", sans-serif';

const CTA = ({
  website = "www.bookqubit.com",
  tagline = "",
  isHindi = false,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      fontFamily: INTER,
    }}
  >
    {/* Glass pill — with solid fallback so it always renders */}
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        padding: "22px 52px",
        borderRadius: 999,
        background: "rgba(255, 255, 255, 0.14)",
        backgroundColor: "#1f2937",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow:
          "0 10px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.18)",
      }}
    >
      <span
        style={{
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: 1,
          color: "#ffffff",
          fontFamily: INTER,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {website}
      </span>
      <FiArrowUpRight
        size={30}
        color="rgba(255, 255, 255, 0.85)"
        style={{ flexShrink: 0 }}
      />
    </div>

    {tagline && (
      <div
        style={{
          fontFamily: isHindi ? DEVANAGARI_SANS : INTER,
          fontSize: isHindi ? 22 : 18,
          fontWeight: isHindi ? 600 : 500,
          letterSpacing: isHindi ? 0 : 0.8,
          lineHeight: isHindi ? 1.4 : 1.3,
          color: "rgba(255, 255, 255, 0.7)",
          textAlign: "center",
        }}
      >
        {tagline}
      </div>
    )}
  </div>
);

export default CTA;