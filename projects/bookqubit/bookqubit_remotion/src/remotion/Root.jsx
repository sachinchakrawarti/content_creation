import React from "react";
import { Composition } from "remotion";

import { TestVideo } from "./test";
import { InstagramEndClip } from "./InstagramEndClip";
import BookCarousel from "./book-carousel/BookCarousel";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="TestVideo"
        component={TestVideo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="InstagramEndClip"
        component={InstagramEndClip}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="BookCarousel"
        component={BookCarousel}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1350}
      />
    </>
  );
};