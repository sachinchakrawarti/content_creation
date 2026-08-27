// src/components/AnimalFacts.tsx
import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { Animal } from '../animals';

interface AnimalFactsProps {
  animal: Animal;
  showFact: boolean;
}

export const AnimalFacts: React.FC<AnimalFactsProps> = ({ animal, showFact }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  
  if (!showFact) return null;
  
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        opacity,
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '40px 60px',
          borderRadius: '30px',
          maxWidth: '70%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}
      >
        <div style={{ fontSize: 60 }}>{animal.emoji}</div>
        <h2 style={{ fontSize: 40, color: '#2D3436' }}>
          Fun Fact About {animal.name}!
        </h2>
        <p style={{ fontSize: 30, color: '#636E72', marginTop: 20 }}>
          {animal.fact}
        </p>
        <div style={{ fontSize: 24, color: '#FF6B6B', marginTop: 20 }}>
          {animal.sound}
        </div>
      </div>
    </AbsoluteFill>
  );
};