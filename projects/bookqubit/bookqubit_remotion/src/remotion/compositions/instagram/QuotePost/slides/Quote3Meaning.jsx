import React from "react";
import PostFrame from "../../../../shared/components/PostFrame.jsx";

const Quote3Meaning = ({ set }) => (
  <PostFrame bg="#111827" label="WHAT IT MEANS" index={3} headerColor="#9ca3af">
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: 34, color: "#facc15", fontWeight: 700, letterSpacing: 4, marginBottom: 40 }}>
        THE IDEA
      </div>
      <div style={{ fontSize: 54, lineHeight: 1.3, fontWeight: 700, color: "#f8fafc", fontFamily: "Georgia, serif" }}>
        {set.meaning}
      </div>
    </div>
  </PostFrame>
);

export default Quote3Meaning;
