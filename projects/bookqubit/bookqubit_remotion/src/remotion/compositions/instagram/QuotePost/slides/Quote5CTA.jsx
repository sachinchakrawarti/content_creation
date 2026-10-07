import React from "react";
import PostFrame from "../../../../shared/components/PostFrame.jsx";
import BrandLogo from "../../../../shared/components/BrandLogo.jsx";

const Quote5CTA = ({ set }) => (
  <PostFrame bg="#09090b" label="BOOKQUBIT" index={5} headerColor="#71717a">
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <BrandLogo size={72} />
      <div style={{ marginTop: 80, fontSize: 60, fontWeight: 900, lineHeight: 1.1, letterSpacing: -2 }}>
        {set.cta.headline}
      </div>
      <div style={{ marginTop: 40, fontSize: 28, color: "#a1a1aa", lineHeight: 1.4 }}>
        {set.cta.sub}
      </div>
      <div style={{ marginTop: 70, padding: "20px 46px", borderRadius: 50, backgroundColor: "#fff", color: "#09090b", fontSize: 26, fontWeight: 800 }}>
        {set.cta.handle}
      </div>
    </div>
  </PostFrame>
);

export default Quote5CTA;
