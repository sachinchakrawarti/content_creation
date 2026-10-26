import React from "react";
import { FiCheck } from "react-icons/fi";

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
const DEVANAGARI_SANS = '"Noto Sans Devanagari", "Nirmala UI", "Mangal", sans-serif';

const KeyPoint = ({ text, accent, textColor, isHindi = false }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
    <div
      style={{
        marginTop: 12,
        minWidth: 32,
        height: 32,
        borderRadius: "50%",
        background: `${accent}22`,
        border: `2px solid ${accent}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <FiCheck size={18} color={accent} strokeWidth={3} />
    </div>
    <div
      style={{
        fontFamily: isHindi ? DEVANAGARI_SANS : INTER,
        fontSize: isHindi ? 32 : 34,
        lineHeight: isHindi ? 1.5 : 1.35,
        fontWeight: 600,
        color: textColor,
        letterSpacing: isHindi ? 0 : -0.4,
      }}
    >
      {text}
    </div>
  </div>
);

export default KeyPoint;