// src/remotion/compositions/Instagram/ImagePost/QuotePost/components/QuoteAuthor.jsx

import React from 'react';
import { Img, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const QuoteAuthor = ({ 
  authorName, 
  authorTitle, 
  authorImage,
  textColor = '#FFFFFF',
  imageSize = 80,
  delay = 0
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring animation for smooth entrance
  const scale = spring({
    frame: frame - delay,
    fps,
    from: 0.5,
    to: 1,
    durationInFrames: 30,
  });

  const opacity = spring({
    frame: frame - delay,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 20,
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '12px 24px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 50,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        opacity,
        transform: `scale(${scale})`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Author Image */}
      {authorImage && (
        <div
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: '50%',
            overflow: 'hidden',
            border: `3px solid ${textColor}`,
            flexShrink: 0,
          }}
        >
          <Img
            src={authorImage}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            alt={authorName}
          />
        </div>
      )}

      {/* Author Info */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 4,
        }}
      >
        <span
          style={{
            color: textColor,
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '0.5px',
          }}
        >
          {authorName}
        </span>
        
        {authorTitle && (
          <span
            style={{
              color: textColor,
              fontSize: 14,
              opacity: 0.8,
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {authorTitle}
          </span>
        )}
      </div>
    </div>
  );
};