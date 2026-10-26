import React from "react";
import { Composition } from "remotion";
import { books, getBook } from "./data/books.js";
import SingleBookPin from "./compositions/SingleBookPin/SingleBookPin.jsx";
import { config } from "./config.js";

// Load Devanagari + Latin fonts once
if (typeof document !== "undefined" && !document.getElementById("bq-fonts")) {
  const link = document.createElement("link");
  link.id = "bq-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;600;700;900&family=Noto+Sans+Devanagari:wght@400;600;700;900&family=Noto+Serif+Devanagari:wght@700;900&display=swap";
  document.head.appendChild(link);
}

export const Root = () => (
  <>
    {books.map((book) => (
      <React.Fragment key={book.id}>
        {/* English */}
        <Composition
          id={`${config.prefix}-Book-${book.id}`}
          component={SingleBookPin}
          durationInFrames={1}
          fps={config.fps}
          width={config.width}
          height={config.height}
          defaultProps={{
            book: getBook(book, "en"),
            siteName: "BookQubit",
            tagline: "A multilingual book discovery platform",
            saveLabel: "Save",
            keyPointsLabel: "Key Points",
            byLabel: "by",
          }}
        />

        {/* Hindi — no tagline */}
        <Composition
          id={`${config.prefix}-Book-${book.id}-hi`}
          component={SingleBookPin}
          durationInFrames={1}
          fps={config.fps}
          width={config.width}
          height={config.height}
          defaultProps={{
            book: getBook(book, "hi"),
            siteName: "बुकक्यूबिट",
            tagline: "",
            saveLabel: "सेव करें",
            keyPointsLabel: "मुख्य बातें",
            byLabel: "",
          }}
        />
      </React.Fragment>
    ))}
  </>
);