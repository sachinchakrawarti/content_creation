import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import BookCover from "../components/BookCover";
import everybodyLiesCover from "../images/everybody-lies.jpg";

const Slide2Book = ({ book }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(progress, [0, 1], [80, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#f4f1ea",
        color: "#171717",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: 70,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 3,
          color: "#737373",
        }}
      >
        <span>THE BOOK</span>
        <span>02 / 05</span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 55,
          opacity: progress,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <BookCover
          src={everybodyLiesCover}
          width={390}
          height={540}
        />

        <div
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 58,
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: -3,
            }}
          >
            {book.title}
          </div>

          <div
            style={{
              marginTop: 25,
              fontSize: 25,
              lineHeight: 1.4,
              color: "#525252",
            }}
          >
            {book.subtitle}
          </div>

          <div
            style={{
              marginTop: 35,
              fontSize: 21,
              color: "#737373",
            }}
          >
            {book.publisher} • {book.publicationYear}
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: 25,
          lineHeight: 1.5,
          color: "#525252",
          paddingBottom: 20,
        }}
      >
        {book.summary}
      </div>
    </AbsoluteFill>
  );
};

export default Slide2Book;