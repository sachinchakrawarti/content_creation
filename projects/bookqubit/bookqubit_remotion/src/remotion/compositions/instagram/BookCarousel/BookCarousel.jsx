import React from "react";
import { AbsoluteFill, Series } from "remotion";
import book from "./data/book.js";
import Slide1Hook from "./slides/Slide1Hook.jsx";
import Slide2Book from "./slides/Slide2Book.jsx";
import Slide3Author from "./slides/Slide3Author.jsx";
import Slide4WhyRead from "./slides/Slide4WhyRead.jsx";
import Slide5CTA from "./slides/Slide5CTA.jsx";

export const BookCarousel = () => (
  <AbsoluteFill>
    <Series>
      <Series.Sequence durationInFrames={90}><Slide1Hook book={book} /></Series.Sequence>
      <Series.Sequence durationInFrames={90}><Slide2Book book={book} /></Series.Sequence>
      <Series.Sequence durationInFrames={90}><Slide3Author book={book} /></Series.Sequence>
      <Series.Sequence durationInFrames={90}><Slide4WhyRead book={book} /></Series.Sequence>
      <Series.Sequence durationInFrames={90}><Slide5CTA book={book} /></Series.Sequence>
    </Series>
  </AbsoluteFill>
);

export default BookCarousel;
