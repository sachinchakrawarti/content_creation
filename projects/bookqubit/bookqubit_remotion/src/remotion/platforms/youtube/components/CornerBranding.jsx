import React from "react";
import { FiGlobe } from "react-icons/fi";

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

const CornerBranding = ({ palette, website = "www.bookqubit.com" }) => (
  <>
    <div
      style={{
        position: "absolute",
        top: 55,
        left: 75,
        display: "flex",
        alignItems: "center",
        gap: 12,
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: palette.accent,
          boxShadow: `0 0 20px ${palette.accent}`,
        }}
      />
      <div
        style={{
          fontFamily: INTER,
          fontSize: 24,
          fontWeight: 900,
          letterSpacing: 3,
          color: palette.text,
          opacity: 0.95,
        }}
      >
        BookQubit
      </div>
    </div>

    <div
      style={{
        position: "absolute",
        bottom: 55,
        right: 75,
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: INTER,
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 1.2,
        color: palette.text,
        opacity: 0.6,
        zIndex: 10,
      }}
    >
      <FiGlobe size={18} color={palette.accent} strokeWidth={2.4} />
      <span>{website}</span>
    </div>
  </>
);

export default CornerBranding;