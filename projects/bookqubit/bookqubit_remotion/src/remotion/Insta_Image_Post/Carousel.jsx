import React from "react";
import { bookData } from "./data/book";
import { Slide1Hook } from "./slides/Slide1Hook";
import { Slide2Book } from "./slides/Slide2Book";
import { Slide3Author } from "./slides/Slide3Author";
import { Slide4WhyRead } from "./slides/Slide4WhyRead";
import { Slide5CTA } from "./slides/Slide5CTA";

export const BookCarousel = () => {
  const slides = [
    { id: 1, component: Slide1Hook },
    { id: 2, component: Slide2Book },
    { id: 3, component: Slide3Author },
    { id: 4, component: Slide4WhyRead },
    { id: 5, component: Slide5CTA },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        background: "#0a0a0f",
        padding: 20,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {slides.map(({ id, component: Slide }) => (
          <div
            key={id}
            style={{
              aspectRatio: "1/1",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              position: "relative",
              background: "#0f0f1a",
              width: "100%",
              maxWidth: 400,
              margin: "0 auto",
            }}
          >
            <Slide bookData={bookData} />
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div
        style={{
          textAlign: "center",
          color: "#52525b",
          fontSize: 14,
          padding: 20,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        📱 Instagram Carousel • {slides.length} Slides • Share these images in order on Instagram
      </div>
    </div>
  );
};