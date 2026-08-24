import React from 'react';
import { AbsoluteFill, Img, interpolate, useCurrentFrame } from 'remotion';

export const QuoteAuthor = ({ 
  authorName, 
  authorTitle, 
  authorImage, 
  textColor = '#FFFFFF',
  imageSize = 80 
}) => {
  const frame = useCurrentFrame();
  
  // Fade in animation
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Slide up animation
  const translateY = interpolate(frame, [0, 20], [20, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 80,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '15px 30px',
          borderRadius: 50,
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Author Image */}
        {authorImage && (
          <Img
            src={authorImage}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: '50%',
              objectFit: 'cover',
              border: `3px solid ${textColor}`,
            }}
            alt={authorName}
          />
        )}

        {/* Author Info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              color: textColor,
              fontSize: 24,
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {authorName}
          </span>
          {authorTitle && (
            <span
              style={{
                color: textColor,
                fontSize: 16,
                opacity: 0.8,
                fontFamily: 'Arial, sans-serif',
              }}
            >
              {authorTitle}
            </span>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};