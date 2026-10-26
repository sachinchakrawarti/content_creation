import React from "react";

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

const LinkBadge = ({
  siteName = "BookQubit",
  tagline = "A multilingual book discovery platform",
  website = "www.bookqubit.com",
  theme = { accent: "#fde047", bg: "#09090b", text: "#ffffff" },
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
    }}
  >
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 16,
        padding: "18px 52px",
        borderRadius: 60,
        backgroundColor: theme.accent,
        color: theme.bg,
        fontFamily: INTER,
        fontSize: 30,
        fontWeight: 900,
        letterSpacing: 0.3,
        boxShadow: `0 18px 40px ${theme.accent}66, 0 4px 12px rgba(0,0,0,0.4)`,
      }}
    >
      <span>{siteName}</span>
      <span style={{ fontSize: 30, lineHeight: 1 }}>→</span>
    </div>

    <div
      style={{
        fontFamily: INTER,
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: 0.4,
        color: theme.text,
        opacity: 0.75,
        textAlign: "center",
      }}
    >
      {tagline}
    </div>

    <div
      style={{
        fontFamily: INTER,
        fontSize: 20,
        fontWeight: 900,
        letterSpacing: 1,
        color: theme.accent,
        textAlign: "center",
      }}
    >
      {website}
    </div>
  </div>
);

export default LinkBadge;