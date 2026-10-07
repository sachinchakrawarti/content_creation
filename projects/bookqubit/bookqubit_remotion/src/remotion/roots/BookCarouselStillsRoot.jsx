import React from "react";
import { Composition } from "remotion";
import book from "../compositions/instagram/BookCarousel/data/book.js";
import Slide1Hook from "../compositions/instagram/BookCarousel/slides/Slide1Hook.jsx";
import Slide2Book from "../compositions/instagram/BookCarousel/slides/Slide2Book.jsx";
import Slide3Author from "../compositions/instagram/BookCarousel/slides/Slide3Author.jsx";
import Slide4WhyRead from "../compositions/instagram/BookCarousel/slides/Slide4WhyRead.jsx";
import Slide5CTA from "../compositions/instagram/BookCarousel/slides/Slide5CTA.jsx";
import { theme } from "../theme.js";

const common = {
  durationInFrames: 1,
  fps: 30,
  width: theme.width,
  height: theme.height,
  defaultProps: { book },
};

export const BookCarouselStillsRoot = () => (
  <>
    <Composition id="IG-Slide-1-Hook"     component={Slide1Hook}     {...common} />
    <Composition id="IG-Slide-2-Book"     component={Slide2Book}     {...common} />
    <Composition id="IG-Slide-3-Author"   component={Slide3Author}   {...common} />
    <Composition id="IG-Slide-4-WhyRead"  component={Slide4WhyRead}  {...common} />
    <Composition id="IG-Slide-5-CTA"      component={Slide5CTA}      {...common} />
  </>
);
