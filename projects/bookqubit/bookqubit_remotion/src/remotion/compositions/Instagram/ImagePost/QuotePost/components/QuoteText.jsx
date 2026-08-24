// src/remotion/compositions/Instagram/ImagePost/QuotePost/components/QuoteText.jsx

import React from 'react';
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const QuoteText = ({ 
  quote, 
  textColor = '#FFFFFF',
  fontSize = 48,
  fontFamily = 'Georgia, serif',
  delay = 0,
  alignment = 'center'
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in animation
  const opacity = spring({
    frame: frame - delay,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 30,
  });

  // Slide up animation
  const translateY = interpolate(
    spring({
      frame: frame - delay,
      fps,
      from: 0,
      to: 1,
      durationInFrames: 30,
    }),
    [0, 1],
    [30, 0]
  );

  // Scale animation for emphasis
  const scale = spring({
    frame: frame - delay,
    fps,
    from: 0.9,
    to: 1,
    durationInFrames: 25,
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: alignment === 'center' ? 'center' : alignment === 'left' ? 'flex-start' : 'flex-end',
        justifyContent: 'center',
        padding: '20px 40px',
        maxWidth: '80%',
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        textAlign: alignment,
      }}
    >
      {/* Opening Quote Mark */}
      <div
        style={{
          fontSize: fontSize * 2,
          color: textColor,
          opacity: 0.3,
          lineHeight: 0.8,
          marginBottom: -10,
          fontFamily: 'Georgia, serif',
        }}
      >
        "
      </div>

      {/* Quote Text */}
      <p
        style={{
          color: textColor,
          fontSize,
          fontFamily,
          lineHeight: 1.4,
          margin: 0,
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          letterSpacing: '0.5px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {quote}
      </p>

      {/* Closing Quote Mark */}
      <div
        style={{
          fontSize: fontSize * 2,
          color: textColor,
          opacity: 0.3,
          lineHeight: 0.8,
          marginTop: -10,
          alignSelf: 'flex-end',
          fontFamily: 'Georgia, serif',
        }}
      >
        "
      </div>
    </div>
  );
};