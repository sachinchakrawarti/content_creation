// src/remotion/Root.jsx
import React from "react";
import { Composition } from "remotion";
import { QuotePost } from "./compositions/Instagram/ImagePost/QuotePost/QuotePost.jsx";
import { getRandomQuote } from "./compositions/Instagram/ImagePost/QuotePost/data/quote.js";

// Make sure to export the component
export const Root = () => {
  const randomQuote = getRandomQuote();

  return (
    <>
      <Composition
        id="QuotePost"
        component={QuotePost}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          quote: randomQuote,
          textColor: "#FFD700",
          fontSize: 42,
          delay: 10,
        }}
      />
    </>
  );
};

// Default export is also required
export default Root;
