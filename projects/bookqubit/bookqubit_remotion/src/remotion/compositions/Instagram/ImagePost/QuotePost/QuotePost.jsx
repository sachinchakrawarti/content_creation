// src/remotion/compositions/Instagram/ImagePost/QuotePost/QuotePost.jsx

import React from "react";
import { AbsoluteFill, Img, Sequence } from "remotion";
import { QuoteText } from "./components/QuoteText.jsx";
import { QuoteAuthor } from "./components/QuoteAuthor.jsx";
import { getRandomQuote } from "./data/quote.js";

export const QuotePost = ({
  quote = getRandomQuote(),
  textColor = "#FFFFFF",
  fontSize = 48,
  delay = 0,
  width = 1080,
  height = 1080,
}) => {
  return (
    <AbsoluteFill
      style={{
        width,
        height,
        backgroundColor: "#1A1A2E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      {quote.background && (
        <Img
          src={quote.background}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
          }}
        />
      )}

      {/* Overlay */}
      <AbsoluteFill
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Sequence from={delay}>
          <QuoteText
            quote={quote.quote}
            textColor={textColor}
            fontSize={fontSize}
          />
        </Sequence>

        <Sequence from={delay + 15}>
          <div style={{ marginTop: 40 }}>
            <QuoteAuthor
              authorName={quote.author.name}
              authorTitle={quote.author.title}
              authorImage={quote.author.image}
              textColor={textColor}
            />
          </div>
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

export default QuotePost;
