// import React from "react";
// import { Composition } from "remotion";

// import { TestVideo } from "./test";
// import { InstagramEndClip } from "./InstagramEndClip";
// import BookCarousel from "./book-carousel/BookCarousel";
// // In your Remotion composition
// import { QuotePost } from "./compositions/Instagram/ImagePost/QuotePost/QuotePost.jsx";

// export const RemotionRoot = () => {
//   return (
//     <>
//       <Composition
//         id="TestVideo"
//         component={TestVideo}
//         durationInFrames={150}
//         fps={30}
//         width={1920}
//         height={1080}
//       />

//       <Composition
//         id="InstagramEndClip"
//         component={InstagramEndClip}
//         durationInFrames={180}
//         fps={30}
//         width={1080}
//         height={1920}
//       />

//       <Composition
//         id="BookCarousel"
//         component={BookCarousel}
//         durationInFrames={450}
//         fps={30}
//         width={1080}
//         height={1350}
//       />

//       <QuotePost
//         quote={myQuote}
//         textColor="#FFD700"
//         fontSize={42}
//         delay={10}
//         width={1080}
//         height={1080}
//       />
//     </>
//   );
// };
// src/remotion/Root.jsx
import React from "react";
import { Composition } from "remotion";
import { QuotePost } from "./compositions/Instagram/ImagePost/QuotePost/QuotePost.jsx";
import { getRandomQuote } from "./compositions/Instagram/ImagePost/QuotePost/data/quote.js";

export const Root = () => {
  // Get a random quote
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

export default Root;
