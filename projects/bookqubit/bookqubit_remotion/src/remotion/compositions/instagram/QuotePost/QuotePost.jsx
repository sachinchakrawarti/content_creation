import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { QuoteText } from "./components/QuoteText.jsx";
import { QuoteAuthor } from "./components/QuoteAuthor.jsx";
import { QuoteBackground } from "./components/QuoteBackground.jsx";
import { getRandomQuote } from "./data/quote.js";

export const QuotePost = ({
  quote = getRandomQuote(),
  textColor = "#FFFFFF",
  fontSize = 48,
  delay = 0,
  width = 1080,
  height = 1080,
}) => (
  <AbsoluteFill style={{ width, height, backgroundColor: "#1A1A2E", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 60, position: "relative", overflow: "hidden" }}>
    <QuoteBackground src={quote.background} />
    <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <Sequence from={delay}>
        <QuoteText quote={quote.quote} textColor={textColor} fontSize={fontSize} />
      </Sequence>
      <Sequence from={delay + 15}>
        <div style={{ marginTop: 40 }}>
          <QuoteAuthor authorName={quote.author.name} authorTitle={quote.author.title} authorImage={quote.author.image} textColor={textColor} />
        </div>
      </Sequence>
    </div>
  </AbsoluteFill>
);

export default QuotePost;
