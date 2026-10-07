import React from "react";
import { Img, interpolate, useCurrentFrame } from "remotion";

export const QuoteAuthor = ({ authorName, authorTitle, authorImage, textColor = "#FFFFFF", imageSize = 80 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const translateY = interpolate(frame, [0, 20], [20, 0], { extrapolateRight: "clamp" });

  return (
    <div style={{ opacity, transform: `translateY(${translateY}px)`, display: "flex", alignItems: "center", gap: 20, backgroundColor: "rgba(0,0,0,0.4)", padding: "15px 30px", borderRadius: 50 }}>
      {authorImage && (
        <Img src={authorImage} style={{ width: imageSize, height: imageSize, borderRadius: "50%", objectFit: "cover", border: `3px solid ${textColor}` }} />
      )}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <span style={{ color: textColor, fontSize: 24, fontWeight: "bold" }}>{authorName}</span>
        {authorTitle && <span style={{ color: textColor, fontSize: 16, opacity: 0.8 }}>{authorTitle}</span>}
      </div>
    </div>
  );
};
