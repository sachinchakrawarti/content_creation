import React from "react";
import { Composition } from "remotion";
import { books } from "./data/books.js";
import NeonBookLoop from "./compositions/NeonBookLoop/NeonBookLoop.jsx";
import { config } from "./config.js";

if (typeof document !== "undefined" && !document.getElementById("bq-fonts")) {
  const link = document.createElement("link");
  link.id = "bq-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;600;700;900&display=swap";
  document.head.appendChild(link);
}

export const Root = () => (
  <>
    {books.map((book) => (
      <Composition
        key={book.id}
        id={`${config.prefix}-Neon-${book.id}`}
        component={NeonBookLoop}
        durationInFrames={config.durationInFrames}
        fps={config.fps}
        width={config.width}
        height={config.height}
        defaultProps={{ book, website: config.website }}
      />
    ))}
  </>
);