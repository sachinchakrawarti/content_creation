import React from "react";
import { FiBookmark } from "react-icons/fi";

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
const DEVANAGARI_SANS = '"Noto Sans Devanagari", "Nirmala UI", "Mangal", sans-serif';

const SaveBadge = ({
  label = "Save",
  theme = { accent: "#fde047", text: "#ffffff" },
  isHindi = false,
}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 24px",
      borderRadius: 40,
      backgroundColor: "rgba(255,255,255,0.08)",
      border: `1px solid ${theme.accent}88`,
      color: theme.text,
      fontFamily: isHindi ? DEVANAGARI_SANS : INTER,
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: isHindi ? 0 : 0.5,
      backdropFilter: "blur(10px)",
      flexShrink: 0,
    }}
  >
    <FiBookmark size={20} color={theme.accent} strokeWidth={2.4} />
    <span>{label}</span>
  </div>
);

export default SaveBadge;