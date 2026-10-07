import React from "react";
import { Composition } from "remotion";
import { BookCarousel } from "../compositions/instagram/BookCarousel/BookCarousel.jsx";
import { theme } from "../theme.js";

export const BookCarouselRoot = () => (
  <Composition
    id="IG-BookCarousel-Preview"
    component={BookCarousel}
    durationInFrames={450}
    fps={30}
    width={theme.width}
    height={theme.height}
  />
);
