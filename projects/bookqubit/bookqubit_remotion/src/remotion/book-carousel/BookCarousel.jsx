import React from "react";
import { AbsoluteFill, Series } from "remotion";

import book from "./data/book";

import everybodyLiesCover from "./images/everybody-lies.jpg";
import sethStephensDavidowitz from "./images/seth-stephens-davidowitz.jpg";

import Slide1Hook from "./slides/Slide1Hook";
import Slide2Book from "./slides/Slide2Book";
import Slide3Author from "./slides/Slide3Author";
import Slide4WhyRead from "./slides/Slide4WhyRead";
import Slide5CTA from "./slides/Slide5CTA";

const BookCarousel = () => {
  return (
    <AbsoluteFill>
      <Series>
        <Series.Sequence durationInFrames={90}>
          <Slide1Hook
            book={book}
            cover={everybodyLiesCover}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={90}>
          <Slide2Book
            book={book}
            cover={everybodyLiesCover}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={90}>
          <Slide3Author
            book={book}
            authorImage={sethStephensDavidowitz}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={90}>
          <Slide4WhyRead book={book} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={90}>
          <Slide5CTA book={book} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

export default BookCarousel;