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
// ✅ CORRECT - Use relative path from Root.jsx location
import { QuotePost } from "./compositions/Instagram/ImagePost/QuotePost/QuotePost.jsx";
import { quoteData } from "./compositions/Instagram/ImagePost/QuotePost/data/quote.js";

const Root = () => {
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
          quote: quoteData,
          textColor: "#FFD700",
          fontSize: 42,
          delay: 10,
        }}
      />
    </>
  );
};

export default Root;
