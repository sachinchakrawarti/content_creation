import React from "react";
import PostFrame from "../../../../shared/components/PostFrame.jsx";

const Quote1Hook = ({ set }) => (
  <PostFrame bg="#0f172a" label="A QUOTE FROM" index={1}>
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: 140, lineHeight: 0.7, color: "#facc15", fontFamily: "Georgia, serif" }}>"</div>
      <div style={{ fontSize: 64, lineHeight: 1.25, fontWeight: 700, fontFamily: "Georgia, serif", color: "#f8fafc", marginTop: 10 }}>
        {set.quote}
      </div>
      <div style={{ marginTop: 60, fontSize: 26, color: "#cbd5e1", letterSpacing: 1 }}>
        — {set.book.author}
      </div>
    </div>
  </PostFrame>
);

export default Quote1Hook;
