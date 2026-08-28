// find_animal/FindAnimalGame.jsx
import React, { useState, useEffect, useMemo } from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from 'remotion';
import { animals, getRandomAnimals, getAnimalById } from './data/animals';
import { soundManager } from './sounds/animalSounds';

// Import sub-components
import { IntroScreen } from './components/IntroScreen';
import { GameGrid } from './components/GameGrid';
import { CelebrationScreen } from './components/CelebrationScreen';
import { GameHeader } from './components/GameHeader';
import { ProgressBar } from './components/ProgressBar';

interface FindAnimalGameProps {
  titleText?: string;
  durationInFrames?: number;
  enableSound?: boolean;
}

export const FindAnimalGame: React.FC<FindAnimalGameProps> = ({
  titleText = '🎯 Find the Animal!',
  durationInFrames = 300,
  enableSound = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [celebrationPlayed, setCelebrationPlayed] = useState(false);
  const [foundAnimal, setFoundAnimal] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  
  // Game phases
  const phase = frame < fps * 2 
    ? 'intro' 
    : frame < durationInFrames - fps * 2 
      ? 'game' 
      : 'celebration';
  
  // Game animals
  const gameAnimals = useMemo(() => {
    return getRandomAnimals(6);
  }, []);
  
  // Target animal (the one to find)
  const targetAnimal = useMemo(() => {
    return gameAnimals[Math.floor(Math.random() * gameAnimals.length)];
  }, [gameAnimals]);
  
  // Initialize sound
  useEffect(() => {
    if (enableSound) {
      soundManager.init();
    }
    return () => {
      soundManager.dispose();
    };
  }, [enableSound]);
  
  // Play sounds at specific moments
  useEffect(() => {
    if (!enableSound) return;
    
    // Play animal sound when game starts
    if (phase === 'game' && !soundPlayed && targetAnimal) {
      soundManager.playAnimalSound(targetAnimal.id);
      setSoundPlayed(true);
    }
    
    // Play celebration at end
    if (phase === 'celebration' && !celebrationPlayed) {
      soundManager.playCelebration();
      setCelebrationPlayed(true);
    }
    
    // Simulate finding the animal (at frame where highlight appears)
    if (phase === 'game' && frame > fps * 3 && frame % (fps * 2) === 0) {
      if (!foundAnimal) {
        soundManager.playCorrect();
        setFoundAnimal(true);
      }
    }
  }, [frame, phase, soundPlayed, celebrationPlayed, foundAnimal, enableSound, targetAnimal, fps]);
  
  // Animation values
  const introScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  const introOpacity = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10 },
  });
  
  const gridOpacity = interpolate(
    frame,
    [fps * 2, fps * 2 + 20],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );
  
  const celebrationScale = spring({
    frame: frame - (durationInFrames - fps * 2),
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  
  // Get the correct animal found status
  const isAnimalFound = frame > fps * 4 && frame < fps * 6;
  
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
      
      {/* Decorative shapes */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', fontSize: 40, opacity: 0.3 }}>⭐</div>
      <div style={{ position: 'absolute', bottom: '15%', right: '8%', fontSize: 50, opacity: 0.3 }}>🌟</div>
      <div style={{ position: 'absolute', top: '20%', right: '15%', fontSize: 30, opacity: 0.2 }}>✨</div>
      
      {/* Sound indicator */}
      {enableSound && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            fontSize: 20,
            color: '#636E72',
            backgroundColor: 'rgba(255,255,255,0.7)',
            padding: '5px 15px',
            borderRadius: '15px',
            backdropFilter: 'blur(5px)',
            zIndex: 10,
          }}
        >
          🔊 Sound ON
        </div>
      )}
      
      {/* INTRO PHASE */}
      {phase === 'intro' && (
        <IntroScreen
          titleText={titleText}
          introScale={introScale}
          introOpacity={introOpacity}
        />
      )}
      
      {/* GAME PHASE */}
      {phase === 'game' && targetAnimal && (
        <>
          <GameHeader
            targetAnimal={targetAnimal}
            currentRound={currentRound}
            totalRounds={3}
          />
          
          <GameGrid
            animals={gameAnimals}
            targetAnimal={targetAnimal}
            frame={frame}
            fps={fps}
            gridOpacity={gridOpacity}
            foundAnimal={isAnimalFound}
            onAnimalClick={(animalId) => {
              if (animalId === targetAnimal.id) {
                soundManager.playCorrect();
                setFoundAnimal(true);
              } else {
                soundManager.playWrong();
              }
            }}
          />
          
          <ProgressBar
            currentRound={currentRound}
            totalRounds={3}
            frame={frame}
            fps={fps}
          />
        </>
      )}
      
      {/* CELEBRATION PHASE */}
      {phase === 'celebration' && (
        <CelebrationScreen
          celebrationScale={celebrationScale}
          animals={animals}
        />
      )}
    </AbsoluteFill>
  );
};

export default FindAnimalGame;