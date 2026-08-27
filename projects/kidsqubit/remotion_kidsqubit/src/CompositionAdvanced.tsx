// src/CompositionAdvanced.tsx
import React, { useState, useMemo } from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Sequence,
} from 'remotion';
import { animals } from './animals';
import { AnimalFacts } from './components/AnimalFacts';

export const AdvancedFindAnimalGame: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Game phases
  const phase = frame < fps * 2 
    ? 'intro' 
    : frame < fps * 12 
      ? 'game' 
      : 'celebration';
  
  const currentRound = Math.floor((frame - fps * 2) / (fps * 3)) + 1;
  const maxRounds = 3;
  
  // Random animals for game
  const gameAnimals = useMemo(() => {
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, []);
  
  const targetAnimal = useMemo(() => {
    return gameAnimals[Math.floor(Math.random() * gameAnimals.length)];
  }, []);
  
  // Intro animation
  const introScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 15 },
  });
  
  const introOpacity = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10 },
  });
  
  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #FFE5B4, #FFD93D)' }}>
      {/* Intro */}
      {phase === 'intro' && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 100,
              transform: `scale(${introScale})`,
              opacity: introOpacity,
            }}
          >
            🎯
          </div>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#2D3436',
              transform: `scale(${introScale})`,
              opacity: introOpacity,
              marginTop: 20,
            }}
          >
            Find the Animal!
          </h1>
          <p
            style={{
              fontSize: 35,
              color: '#636E72',
              opacity: introOpacity * 0.7,
              marginTop: 10,
            }}
          >
            Can you find the hidden animal?
          </p>
        </AbsoluteFill>
      )}
      
      {/* Game */}
      {phase === 'game' && (
        <AbsoluteFill style={{ padding: 60 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 40,
              maxWidth: '80%',
              margin: '80px auto 0',
            }}
          >
            {gameAnimals.map((animal, index) => {
              const isCorrect = animal.id === targetAnimal.id;
              const delay = index * 10;
              const scale = spring({
                frame: frame - fps * 2 - delay,
                fps,
                config: { damping: 12 },
              });
              
              return (
                <div
                  key={animal.id}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    borderRadius: '30px',
                    padding: '40px',
                    textAlign: 'center',
                    transform: `scale(${scale})`,
                    boxShadow: isCorrect 
                      ? '0 0 40px rgba(46, 213, 115, 0.5)' 
                      : '0 10px 30px rgba(0,0,0,0.1)',
                    border: isCorrect 
                      ? '6px solid #2ECC71' 
                      : '3px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ fontSize: 80 }}>{animal.emoji}</div>
                  <div
                    style={{
                      fontSize: 35,
                      fontWeight: 'bold',
                      color: '#2D3436',
                      marginTop: 15,
                    }}
                  >
                    {animal.name}
                  </div>
                  {isCorrect && (
                    <div
                      style={{
                        marginTop: 15,
                        fontSize: 30,
                        color: '#27AE60',
                        fontWeight: 'bold',
                      }}
                    >
                      🎯 Correct!
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Round info */}
          <div
            style={{
              position: 'absolute',
              top: 30,
              right: 40,
              fontSize: 30,
              fontWeight: 'bold',
              color: '#2D3436',
              backgroundColor: 'rgba(255,255,255,0.8)',
              padding: '10px 25px',
              borderRadius: '20px',
            }}
          >
            Round {currentRound}/{maxRounds}
          </div>
        </AbsoluteFill>
      )}
      
      {/* Celebration */}
      {phase === 'celebration' && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 150,
              animation: 'bounce 0.5s infinite',
            }}
          >
            🎉
          </div>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#2D3436',
            }}
          >
            Great Job!
          </h1>
          <p
            style={{
              fontSize: 40,
              color: '#636E72',
            }}
          >
            You found all the animals! 🌟
          </p>
          <div
            style={{
              display: 'flex',
              gap: 30,
              marginTop: 30,
              fontSize: 70,
            }}
          >
            {animals.slice(0, 5).map((animal) => (
              <span key={animal.id}>{animal.emoji}</span>
            ))}
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};