import React from "react";
import PostFrame from "../../../../shared/components/PostFrame.jsx";

const Quote2Context = ({ set }) => (
  <PostFrame bg="#f4f1ea" fg="#171717" label="THE CONTEXT" index={2} headerColor="#737373">
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: -2, lineHeight: 1.1 }}>
        Where this<br />comes from.
      </div>
      <div style={{ marginTop: 60, fontSize: 34, lineHeight: 1.55, color: "#404040", maxWidth: 900 }}>
        {set.context}
      </div>
      <div style={{ marginTop: 80, fontSize: 24, color: "#737373" }}>
        {set.book.title} · {set.book.author}
      </div>
    </div>
  </PostFrame>
);

export default Quote2Context;
