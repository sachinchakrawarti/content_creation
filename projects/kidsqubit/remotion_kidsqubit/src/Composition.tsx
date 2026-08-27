// src/Composition.tsx
import React, { useMemo } from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from 'remotion';
import { animals, Animal } from './animals'; // Make sure this import is correct

interface FindAnimalGameProps {
  titleText?: string;
  durationInFrames?: number;
}

export const FindAnimalGame: React.FC<FindAnimalGameProps> = ({
  titleText = '🎯 Find the Animal!',
  durationInFrames = 300,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Game phases
  const phase = frame < fps * 2 
    ? 'intro' 
    : frame < durationInFrames - fps * 2 
      ? 'game' 
      : 'celebration';
  
  // Random game animals - with safety check
  const gameAnimals = useMemo(() => {
    if (!animals || animals.length === 0) {
      // Fallback animals if import fails
      return [
        { id: 'lion', name: 'Lion', emoji: '🦁', sound: 'Roar!', color: '#F4A460', fact: 'Lions are cool!' },
        { id: 'elephant', name: 'Elephant', emoji: '🐘', sound: 'Trumpet!', color: '#708090', fact: 'Elephants are big!' },
      ];
    }
    const shuffled = [...animals].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  }, []);
  
  // Target animal with safety check
  const targetAnimal = useMemo(() => {
    if (!gameAnimals || gameAnimals.length === 0) {
      return { id: 'default', name: 'Animal', emoji: '🐾', sound: '', color: '#000', fact: '' };
    }
    return gameAnimals[Math.floor(Math.random() * gameAnimals.length)];
  }, [gameAnimals]);
  
  // Intro animations
  const introScale = spring({
    frame: frame - 5,
    fps,
    config: {
      damping: 12,
      stiffness: 100,
    },
  });
  
  const introOpacity = spring({
    frame: frame - 10,
    fps,
    config: {
      damping: 10,
    },
  });
  
  // Game grid animations
  const gridOpacity = interpolate(
    frame,
    [fps * 2, fps * 2 + 20],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );
  
  // Celebration animation
  const celebrationScale = spring({
    frame: frame - (durationInFrames - fps * 2),
    fps,
    config: {
      damping: 10,
      stiffness: 80,
    },
  });
  
  return (
    <AbsoluteFill style={{ backgroundColor: '#FFE5B4' }}>
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 10% 20%, #FFD700 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, #FF6B6B 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, #4ECDC4 0%, transparent 50%),
            linear-gradient(135deg, #FFE5B4 0%, #FFD93D 100%)
          `,
        }}
      />
      
      {/* Decorative floating shapes */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          fontSize: 40,
          opacity: 0.3,
        }}
      >
        ⭐
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          fontSize: 50,
          opacity: 0.3,
        }}
      >
        🌟
      </div>
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          fontSize: 30,
          opacity: 0.2,
        }}
      >
        ✨
      </div>
      
      {/* INTRO PHASE */}
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
              textShadow: '0 10px 30px rgba(0,0,0,0.1)',
              fontFamily: 'Arial Black, sans-serif',
            }}
          >
            {titleText}
          </h1>
          <p
            style={{
              fontSize: 35,
              color: '#636E72',
              opacity: introOpacity * 0.8,
              marginTop: 10,
            }}
          >
            Can you find the hidden animal?
          </p>
          <div
            style={{
              marginTop: 30,
              fontSize: 30,
              color: '#FF6B6B',
              opacity: introOpacity * 0.6,
            }}
          >
            👆 Look carefully!
          </div>
        </AbsoluteFill>
      )}
      
      {/* GAME PHASE */}
      {phase === 'game' && targetAnimal && (
        <AbsoluteFill
          style={{
            padding: '60px 40px 40px 40px',
            opacity: gridOpacity,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <div
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                color: '#2D3436',
                backgroundColor: 'rgba(255,255,255,0.8)',
                padding: '10px 25px',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
              }}
            >
              🔍 Find the {targetAnimal.name}!
            </div>
            <div
              style={{
                fontSize: 25,
                color: '#636E72',
                backgroundColor: 'rgba(255,255,255,0.8)',
                padding: '10px 20px',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
              }}
            >
              ⭐ Level 1
            </div>
          </div>
          
          {/* Animal Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 30,
              maxWidth: '90%',
              margin: '20px auto',
            }}
          >
            {gameAnimals.map((animal, index) => {
              const isCorrect = animal.id === targetAnimal.id;
              const delay = index * 5;
              const cardScale = spring({
                frame: frame - fps * 2 - delay,
                fps,
                config: {
                  damping: 14,
                  stiffness: 90,
                },
              });
              
              // Highlight animation for correct animal
              const highlightPulse = isCorrect 
                ? Math.sin(frame * 0.05) * 0.2 + 0.8
                : 1;
              
              return (
                <div
                  key={animal.id}
                  style={{
                    backgroundColor: isCorrect 
                      ? 'rgba(46, 213, 115, 0.3)' 
                      : 'rgba(255,255,255,0.85)',
                    borderRadius: '25px',
                    padding: '30px 20px',
                    textAlign: 'center',
                    transform: `scale(${cardScale * highlightPulse})`,
                    boxShadow: isCorrect 
                      ? '0 0 50px rgba(46, 213, 115, 0.4)' 
                      : '0 10px 30px rgba(0,0,0,0.1)',
                    border: isCorrect 
                      ? '6px solid #2ECC71' 
                      : '3px solid rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: 80, marginBottom: 15 }}>
                    {animal.emoji}
                  </div>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 'bold',
                      color: '#2D3436',
                    }}
                  >
                    {animal.name}
                  </div>
                  {isCorrect && (
                    <div
                      style={{
                        marginTop: 15,
                        fontSize: 24,
                        color: '#27AE60',
                        fontWeight: 'bold',
                        animation: 'bounce 0.5s infinite',
                      }}
                    >
                      ✅ Found me!
                    </div>
                  )}
                  {!isCorrect && (
                    <div
                      style={{
                        marginTop: 15,
                        fontSize: 20,
                        color: '#B2BEC3',
                      }}
                    >
                      👆 Click me!
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Hint */}
          <div
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 22,
              color: '#636E72',
              backgroundColor: 'rgba(255,255,255,0.7)',
              padding: '10px 20px',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              maxWidth: '60%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            💡 Hint: Look for the {targetAnimal.emoji}!
          </div>
        </AbsoluteFill>
      )}
      
      {/* CELEBRATION PHASE */}
      {phase === 'celebration' && (
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(255, 215, 0, 0.15)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <div
            style={{
              fontSize: 120,
              transform: `scale(${celebrationScale})`,
            }}
          >
            🎉
          </div>
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#2D3436',
              transform: `scale(${celebrationScale})`,
              textShadow: '0 10px 30px rgba(0,0,0,0.1)',
              marginTop: 20,
              fontFamily: 'Arial Black, sans-serif',
            }}
          >
            You Found It! 🌟
          </h1>
          <p
            style={{
              fontSize: 35,
              color: '#636E72',
              marginTop: 10,
            }}
          >
            Great job! You're an animal expert!
          </p>
          <div
            style={{
              display: 'flex',
              gap: 25,
              marginTop: 30,
              fontSize: 60,
            }}
          >
            {animals && animals.slice(0, 5).map((animal) => (
              <span key={animal.id} style={{ animation: 'bounce 1s infinite' }}>
                {animal.emoji}
              </span>
            ))}
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 25,
              color: '#FF6B6B',
              backgroundColor: 'rgba(255,255,255,0.8)',
              padding: '15px 30px',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
            }}
          >
            🎬 Thanks for watching! Subscribe for more!
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};