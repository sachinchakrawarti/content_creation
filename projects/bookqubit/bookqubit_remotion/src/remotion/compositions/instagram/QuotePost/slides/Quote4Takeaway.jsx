import React from "react";
import PostFrame from "../../../../shared/components/PostFrame.jsx";

const Quote4Takeaway = ({ set }) => (
  <PostFrame bg="#fafafa" fg="#171717" label="TAKE THIS WITH YOU" index={4} headerColor="#737373">
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ width: 90, height: 8, backgroundColor: "#171717", borderRadius: 8, marginBottom: 50 }} />
      <div style={{ fontSize: 52, lineHeight: 1.4, fontWeight: 700, color: "#171717", maxWidth: 900 }}>
        {set.takeaway}
      </div>
    </div>
  </PostFrame>
);

export default Quote4Takeaway;
