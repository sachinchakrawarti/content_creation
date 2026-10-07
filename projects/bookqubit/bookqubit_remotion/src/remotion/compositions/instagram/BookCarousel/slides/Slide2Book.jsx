import React from "react";
import { AbsoluteFill } from "remotion";
import SlideHeader from "../../../../shared/components/SlideHeader.jsx";
import CSSBookCover from "../../../../shared/components/CSSBookCover.jsx";

const Slide2Book = ({ book }) => (
  <AbsoluteFill style={{ backgroundColor: "#f4f1ea", color: "#171717", fontFamily: "Arial", padding: 70 }}>
    <SlideHeader left="THE BOOK" index={2} />
    <div style={{ display: "flex", alignItems: "center", gap: 55, marginTop: 100 }}>
      <CSSBookCover title={book.title} author={book.author} palette={book.palette} width={360} height={500} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 56, lineHeight: 1, fontWeight: 900, letterSpacing: -3 }}>{book.title}</div>
        <div style={{ marginTop: 25, fontSize: 24, lineHeight: 1.4, color: "#525252" }}>{book.subtitle}</div>
        <div style={{ marginTop: 35, fontSize: 20, color: "#737373" }}>
          {book.publisher} • {book.publicationYear}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 80, fontSize: 26, lineHeight: 1.55, color: "#404040" }}>
      {book.summary}
    </div>
  </AbsoluteFill>
);

export default Slide2Book;
