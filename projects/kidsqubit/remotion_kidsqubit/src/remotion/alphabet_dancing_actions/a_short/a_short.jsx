import React, { useEffect, useRef } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring, Easing } from 'remotion';
import * as Tone from 'tone';

export const AShort = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  
  const totalFrames = 1800; // 60 seconds @ 30fps
  
  // Audio refs
  const audioInitialized = useRef(false);
  const melodySynth = useRef(null);
  const bassSynth = useRef(null);
  const drumLoop = useRef(null);
  const sfxSynth = useRef(null);
  const audioContext = useRef(null);

  // ============================================================
  // INITIALIZE AUDIO
  // ============================================================
  useEffect(() => {
    if (!audioInitialized.current) {
      // Create audio context
      audioContext.current = new Tone.Context();
      
      // Melody synth (cheerful, playful)
      melodySynth.current = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sine' },
        envelope: {
          attack: 0.05,
          decay: 0.1,
          sustain: 0.3,
          release: 0.2,
        },
        volume: -10,
      }).toDestination();
      
      // Bass synth (fun, bouncy)
      bassSynth.current = new Tone.Synth({
        oscillator: { type: 'square' },
        envelope: {
          attack: 0.01,
          decay: 0.1,
          sustain: 0.2,
          release: 0.1,
        },
        volume: -15,
      }).toDestination();
      
      // SFX synth (sound effects)
      sfxSynth.current = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: {
          attack: 0.01,
          decay: 0.2,
          sustain: 0.1,
          release: 0.3,
        },
        volume: -5,
      }).toDestination();
      
      // Drum loop (fun rhythm)
      drumLoop.current = new Tone.Loop((time) => {
        // Kick drum
        const kick = new Tone.MembraneSynth({
          pitchDecay: 0.05,
          octaves: 10,
          oscillator: { type: 'sine' },
          envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 0.1 },
          volume: -8,
        }).toDestination();
        kick.triggerAttackRelease('C1', '8n', time);
        
        // Snare/clap
        const clap = new Tone.NoiseSynth({
          noise: { type: 'white' },
          envelope: { attack: 0.001, decay: 0.2, sustain: 0, release: 0.1 },
          volume: -12,
        }).toDestination();
        clap.triggerAttackRelease('8n', time + 0.25);
      }, '4n');
      
      audioInitialized.current = true;
    }
    
    return () => {
      // Cleanup
      if (melodySynth.current) melodySynth.current.dispose();
      if (bassSynth.current) bassSynth.current.dispose();
      if (sfxSynth.current) sfxSynth.current.dispose();
      if (drumLoop.current) drumLoop.current.dispose();
      if (audioContext.current) audioContext.current.close();
    };
  }, []);

  // ============================================================
  // PLAY MUSIC BY SCENE
  // ============================================================
  useEffect(() => {
    if (!audioInitialized.current) return;
    
    // Start audio context on user interaction
    if (Tone.context.state !== 'running') {
      Tone.context.resume();
    }
    
    // Scene 1: Intro (frames 0-180) - Magic, sparkle sounds
    if (frame >= 0 && frame < 180 && frame % 30 === 0) {
      const note = ['C4', 'E4', 'G4', 'C5'][Math.floor(frame / 30) % 4];
      melodySynth.current.triggerAttackRelease(note, '8n');
      
      if (frame % 60 === 0) {
        // Sparkle sound effect
        sfxSynth.current.triggerAttackRelease('C6', '16n', undefined, 0.3);
      }
    }
    
    // Scene 2: Apple Discovery (frames 180-420)
    if (frame >= 180 && frame < 420 && frame % 15 === 0) {
      const notes = ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'];
      const idx = Math.floor((frame - 180) / 15) % notes.length;
      melodySynth.current.triggerAttackRelease(notes[idx], '8n');
      
      // Apple bounce sound effect
      if (frame >= 220 && frame < 270 && frame % 10 === 0) {
        sfxSynth.current.triggerAttackRelease('C3', '4n', undefined, 0.5);
        // Add a "boing" effect with frequency modulation
        sfxSynth.current.setNote('C3');
        sfxSynth.current.frequency.rampTo('C4', 0.1);
      }
      
      // "Wow!" sound
      if (frame === 260) {
        sfxSynth.current.triggerAttackRelease('G5', '2n', undefined, 0.3);
        sfxSynth.current.frequency.rampTo('C6', 0.2);
      }
    }
    
    // Scene 3: Dance Party (frames 420-900)
    if (frame >= 420 && frame < 900 && frame % 8 === 0) {
      // Funky dance melody
      const danceNotes = [
        ['C4', 'E4', 'G4'],
        ['D4', 'F4', 'A4'],
        ['E4', 'G4', 'B4'],
        ['F4', 'A4', 'C5'],
      ];
      const idx = Math.floor((frame - 420) / 8) % danceNotes.length;
      melodySynth.current.triggerAttackRelease(danceNotes[idx], '8n');
      
      // Bass groove
      if (frame % 16 === 0) {
        const bassNotes = ['C2', 'F2', 'G2', 'C3'];
        const bassIdx = Math.floor((frame - 420) / 16) % bassNotes.length;
        bassSynth.current.triggerAttackRelease(bassNotes[bassIdx], '4n');
      }
      
      // Drum loop activation
      if (frame === 420) {
        drumLoop.current.start();
      }
      
      // Disco "whoo!" effect
      if (frame % 60 === 0) {
        sfxSynth.current.triggerAttackRelease('A5', '4n', undefined, 0.2);
        sfxSynth.current.frequency.rampTo('C6', 0.1);
      }
    }
    
    // Scene 4: Friends Join (frames 900-1260)
    if (frame >= 900 && frame < 1260 && frame % 12 === 0) {
      // Happy melody with friends
      const friendNotes = ['C4', 'E4', 'G4', 'C5', 'E5', 'G5'];
      const idx = Math.floor((frame - 900) / 12) % friendNotes.length;
      melodySynth.current.triggerAttackRelease(friendNotes[idx], '8n');
      
      // Ant march sound effect
      if (frame % 24 === 0) {
        sfxSynth.current.triggerAttackRelease('C4', '16n', undefined, 0.2);
        sfxSynth.current.frequency.rampTo('E4', 0.05);
      }
      
      // "Yay!" celebration sound
      if (frame === 1020) {
        sfxSynth.current.triggerAttackRelease('C5', '2n', undefined, 0.4);
        sfxSynth.current.frequency.rampTo('E5', 0.15);
        sfxSynth.current.frequency.rampTo('G5', 0.15);
      }
    }
    
    // Scene 5: Celebration (frames 1260-1800)
    if (frame >= 1260 && frame % 6 === 0) {
      // Epic celebration melody
      const celebNotes = [
        ['C4', 'E4', 'G4', 'C5'],
        ['D4', 'F4', 'A4', 'D5'],
        ['E4', 'G4', 'B4', 'E5'],
        ['F4', 'A4', 'C5', 'F5'],
        ['G4', 'B4', 'D5', 'G5'],
        ['C5', 'E5', 'G5', 'C6'],
      ];
      const idx = Math.floor((frame - 1260) / 6) % celebNotes.length;
      melodySynth.current.triggerAttackRelease(celebNotes[idx], '8n');
      
      // Bass celebration
      if (frame % 12 === 0) {
        const bassCeleb = ['C2', 'F2', 'G2', 'C3', 'F3', 'G3'];
        const bassIdx = Math.floor((frame - 1260) / 12) % bassCeleb.length;
        bassSynth.current.triggerAttackRelease(bassCeleb[bassIdx], '4n');
      }
      
      // Confetti explosion sound
      if (frame % 30 === 0) {
        // Multiple notes for explosion effect
        ['C5', 'E5', 'G5', 'C6'].forEach((note, i) => {
          setTimeout(() => {
            sfxSynth.current.triggerAttackRelease(note, '16n', undefined, 0.1 + i * 0.05);
          }, i * 50);
        });
      }
      
      // "Great job!" sound
      if (frame === 1400) {
        sfxSynth.current.triggerAttackRelease('C5', '2n', undefined, 0.5);
        sfxSynth.current.frequency.rampTo('E5', 0.1);
        sfxSynth.current.frequency.rampTo('G5', 0.1);
        sfxSynth.current.frequency.rampTo('C6', 0.15);
      }
    }
    
    // Stop drum loop after scene 3
    if (frame >= 900 && drumLoop.current.state === 'started') {
      drumLoop.current.stop();
    }
    
  }, [frame]);

  // ============================================================
  // SCENE 1: INTRO - Letter A appears (0-180 frames / 6 seconds)
  // ============================================================
  const scene1 = frame < 180;
  
  const letterAScale = spring({
    frame: frame,
    fps: fps,
    config: { damping: 10, mass: 0.5 },
  });
  
  const letterARotate = interpolate(frame, [0, 30, 60], [-30, 10, 0], { extrapolateRight: 'clamp' });
  
  const sparkles = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * Math.PI * 2 + frame * 0.02;
    const radius = 80 + Math.sin(frame * 0.05 + i) * 20;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size: 10 + Math.sin(frame * 0.1 + i * 2) * 5,
      opacity: 0.5 + Math.sin(frame * 0.08 + i) * 0.5,
    };
  });

  // ============================================================
  // SCENE 2: APPLE DISCOVERY (180-420 frames / 8 seconds)
  // ============================================================
  const scene2 = frame >= 180 && frame < 420;
  
  const appleFall = interpolate(
    frame,
    [180, 220, 250, 270],
    [-height * 0.5, height * 0.2, height * 0.25, height * 0.2],
    { extrapolateRight: 'clamp' }
  );
  
  const appleBounce = Math.abs(Math.sin((frame - 220) * 0.08)) * 
    Math.exp(-(frame - 220) * 0.01) * 30;
  
  const squash = 1 + Math.sin((frame - 220) * 0.08) * 
    Math.exp(-(frame - 220) * 0.01) * 0.2;
  
  const appleY = appleFall + appleBounce;
  const appleRotate = interpolate(frame, [180, 280], [0, 720], { extrapolateRight: 'clamp' });

  // ============================================================
  // SCENE 3: DANCE PARTY (420-900 frames / 16 seconds)
  // ============================================================
  const scene3 = frame >= 420 && frame < 900;
  
  const dancePhase = frame - 420;
  
  const danceX = Math.sin(dancePhase * 0.05) * 30;
  const danceY = Math.sin(dancePhase * 0.07 + 1) * 20;
  const danceRotate = Math.sin(dancePhase * 0.04) * 15;
  const danceScale = 1 + Math.sin(dancePhase * 0.1) * 0.1;
  
  const discoLights = Array.from({ length: 8 }).map((_, i) => {
    const angle = (i / 8) * Math.PI * 2 + dancePhase * 0.02;
    const radius = 200 + Math.sin(dancePhase * 0.03 + i) * 50;
    return {
      x: width / 2 + Math.cos(angle) * radius,
      y: height / 2 + Math.sin(angle) * radius,
      color: `hsl(${(i * 45 + dancePhase * 0.5) % 360}, 100%, 70%)`,
      size: 15 + Math.sin(dancePhase * 0.06 + i) * 10,
    };
  });

  // ============================================================
  // SCENE 4: FRIENDS JOIN (900-1260 frames / 12 seconds)
  // ============================================================
  const scene4 = frame >= 900 && frame < 1260;
  
  const friendPhase = frame - 900;
  
  const ant1X = interpolate(friendPhase, [0, 60], [-200, -100], { extrapolateRight: 'clamp' });
  const ant1Y = height * 0.3 + Math.sin(friendPhase * 0.06) * 15;
  
  const ant2X = interpolate(friendPhase, [30, 90], [width + 200, width + 100], { extrapolateRight: 'clamp' });
  const ant2Y = height * 0.5 + Math.sin(friendPhase * 0.05 + 2) * 15;
  
  const ant3X = interpolate(friendPhase, [60, 120], [-300, -150], { extrapolateRight: 'clamp' });
  const ant3Y = height * 0.7 + Math.sin(friendPhase * 0.07 + 4) * 15;

  // ============================================================
  // SCENE 5: CELEBRATION (1260-1800 frames / 18 seconds)
  // ============================================================
  const scene5 = frame >= 1260;
  
  const celebPhase = frame - 1260;
  
  const confetti = Array.from({ length: 50 }).map((_, i) => {
    const x = width / 2 + Math.cos((i / 50) * Math.PI * 2 + celebPhase * 0.01) * 
      (100 + celebPhase * 0.5);
    const y = height / 2 + Math.sin((i / 50) * Math.PI * 2 + celebPhase * 0.015) * 
      (100 + celebPhase * 0.5) - celebPhase * 2;
    return {
      x: x,
      y: y,
      color: `hsl(${(i * 15 + celebPhase * 0.5) % 360}, 100%, 60%)`,
      size: 8 + Math.sin(celebPhase * 0.05 + i) * 4,
      rotation: celebPhase * 0.02 + i,
    };
  });

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive, sans-serif',
      }}
    >
      {/* ===== BRANDING ===== */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'rgba(0,0,0,0.4)',
          padding: '8px 16px',
          borderRadius: 20,
          backdropFilter: 'blur(10px)',
        }}
      >
        <span style={{ fontSize: 28 }}>🧸</span>
        <span style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Kids Qubit
        </span>
      </div>

      {/* ===== AUDIO VISUALIZER ===== */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          right: 20,
          zIndex: 100,
          display: 'flex',
          gap: 3,
          alignItems: 'flex-end',
          height: 30,
          opacity: 0.6,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const height = 5 + Math.sin(frame * 0.05 + i * 0.5) * 10 + 10;
          return (
            <div
              key={i}
              style={{
                width: 4,
                height: height,
                background: `hsl(${i * 30 + frame * 0.5}, 100%, 60%)`,
                borderRadius: 2,
                transition: 'height 0.1s',
              }}
            />
          );
        })}
      </div>

      {/* ===== SCENE 1: INTRO ===== */}
      {scene1 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${letterAScale}) rotate(${letterARotate}deg)`,
              fontSize: 250,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0 0 40px rgba(255,200,0,0.5), 0 0 80px rgba(255,100,0,0.3)',
              zIndex: 10,
            }}
          >
            A
          </div>
          
          {sparkles.map((sparkle, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(${sparkle.x}px, ${sparkle.y}px)`,
                fontSize: sparkle.size,
                opacity: sparkle.opacity,
                color: `hsl(${i * 30 + frame * 0.5}, 100%, 70%)`,
                zIndex: 5,
              }}
            >
              ✦
            </div>
          ))}
          
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              opacity: interpolate(frame, [60, 120, 180], [0, 1, 1]),
              transform: `translateY(${interpolate(frame, [60, 120], [20, 0])}px)`,
              zIndex: 10,
            }}
          >
            🎵 Let's Learn Letter A! 🎵
          </div>
        </>
      )}

      {/* ===== SCENE 2: APPLE DISCOVERY ===== */}
      {scene2 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 60,
              color: 'white',
              fontSize: 80,
              fontWeight: 'bold',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              zIndex: 10,
              opacity: interpolate(frame, [180, 210], [0, 1]),
            }}
          >
            🍎 A is for Apple!
          </div>
          
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: `translate(-50%, ${appleY}px) rotate(${appleRotate}deg) scale(${squash})`,
              fontSize: 180,
              zIndex: 10,
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
            }}
          >
            🍎
          </div>
          
          {/* Tree branch */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              width: 4,
              height: 100,
              background: 'linear-gradient(180deg, #8B6914, #6B4F12)',
              borderRadius: 2,
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              top: '8%',
              left: '45%',
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: '#2d6b1e',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              color: 'rgba(255,255,255,0.8)',
              fontSize: 24,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              zIndex: 10,
              opacity: interpolate(frame, [220, 260], [0, 1]),
            }}
          >
            🎈 Wow! A red apple! 🎈
          </div>
        </>
      )}

      {/* ===== SCENE 3: DANCE PARTY ===== */}
      {scene3 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              color: 'white',
              fontSize: 60,
              fontWeight: 'bold',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              zIndex: 10,
              opacity: interpolate(frame, [420, 450], [0, 1]),
            }}
          >
            💃 Apple Dance Party! 🕺
          </div>
          
          <div
            style={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: `translate(calc(-50% + ${danceX}px), ${danceY}px) rotate(${danceRotate}deg) scale(${danceScale})`,
              fontSize: 160,
              zIndex: 10,
              filter: 'drop-shadow(0 0 40px rgba(255,200,0,0.3))',
            }}
          >
            🍎
          </div>
          
          {/* Disco lights */}
          {discoLights.map((light, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: light.x,
                top: light.y,
                width: light.size,
                height: light.size,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${light.color}, transparent)`,
                opacity: 0.6 + Math.sin(dancePhase * 0.04 + i) * 0.3,
                zIndex: 1,
                filter: 'blur(5px)',
              }}
            />
          ))}
          
          {/* Dance floor */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '30%',
              background: 'linear-gradient(180deg, transparent, rgba(255,200,0,0.1))',
              zIndex: 0,
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              color: 'rgba(255,255,255,0.9)',
              fontSize: 30,
              zIndex: 10,
              textAlign: 'center',
              opacity: interpolate(frame, [500, 540], [0, 1]),
            }}
          >
            🎶 Boogie woogie! 🎶<br />
            <span style={{ fontSize: 20, opacity: 0.7 }}>
              Shake it, Apple! 🍎✨
            </span>
          </div>
        </>
      )}

      {/* ===== SCENE 4: FRIENDS JOIN ===== */}
      {scene4 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              color: 'white',
              fontSize: 50,
              fontWeight: 'bold',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              zIndex: 10,
              opacity: interpolate(frame, [900, 930], [0, 1]),
            }}
          >
            🐜 Friends are coming! 🐜
          </div>
          
          <div
            style={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, 0)',
              fontSize: 140,
              zIndex: 5,
            }}
          >
            🍎
          </div>
          
          {/* Ant 1 */}
          <div
            style={{
              position: 'absolute',
              left: ant1X,
              top: ant1Y,
              fontSize: 60,
              zIndex: 10,
              transform: `scaleX(${ant1X < -50 ? 1 : -1})`,
            }}
          >
            🐜
          </div>
          
          {/* Ant 2 */}
          <div
            style={{
              position: 'absolute',
              left: ant2X,
              top: ant2Y,
              fontSize: 50,
              zIndex: 10,
              transform: `scaleX(${ant2X > width + 50 ? 1 : -1})`,
            }}
          >
            🐜
          </div>
          
          {/* Ant 3 */}
          <div
            style={{
              position: 'absolute',
              left: ant3X,
              top: ant3Y,
              fontSize: 55,
              zIndex: 10,
              transform: `scaleX(${ant3X < -50 ? 1 : -1})`,
            }}
          >
            🐜
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              color: 'rgba(255,255,255,0.9)',
              fontSize: 28,
              zIndex: 10,
              textAlign: 'center',
              opacity: interpolate(frame, [1020, 1060], [0, 1]),
            }}
          >
            🎉 Yay! Let's all play! 🎉
          </div>
        </>
      )}

      {/* ===== SCENE 5: CELEBRATION ===== */}
      {scene5 && (
        <>
          <div
            style={{
              position: 'absolute',
              top: 50,
              color: 'white',
              fontSize: 55,
              fontWeight: 'bold',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              zIndex: 10,
              textAlign: 'center',
              opacity: interpolate(frame, [1260, 1290], [0, 1]),
            }}
          >
            🎊 Hooray for Letter A! 🎊
          </div>
          
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${1 + Math.sin(celebPhase * 0.03) * 0.05})`,
              fontSize: 180,
              zIndex: 5,
              filter: 'drop-shadow(0 0 60px rgba(255,200,0,0.5))',
            }}
          >
            🍎
          </div>
          
          <div
            style={{
              position: 'absolute',
              top: '60%',
              left: '50%',
              transform: 'translate(-50%, 0)',
              fontSize: 50,
              zIndex: 5,
              textAlign: 'center',
              color: 'white',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ fontSize: 70 }}>✨</div>
            <div style={{ fontSize: 30, marginTop: 10 }}>
              🎵 A is for Awesome! 🎵
            </div>
          </div>
          
          {/* Confetti */}
          {confetti.map((piece, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: piece.x,
                top: piece.y,
                width: piece.size,
                height: piece.size * 0.6,
                background: piece.color,
                transform: `rotate(${piece.rotation}deg)`,
                borderRadius: 2,
                zIndex: 3,
                opacity: 0.8 + Math.sin(celebPhase * 0.02 + i) * 0.2,
              }}
            />
          ))}
          
          {/* Big celebration text */}
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              color: 'white',
              fontSize: 32,
              zIndex: 10,
              textAlign: 'center',
              opacity: interpolate(frame, [1400, 1430], [0, 1]),
            }}
          >
            👏 Great job! You learned A! 👏
          </div>
        </>
      )}

      {/* ===== PROGRESS BAR ===== */}
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: 40,
          right: 40,
          height: 6,
          background: 'rgba(255,255,255,0.2)',
          borderRadius: 3,
          zIndex: 100,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${(frame / totalFrames) * 100}%`,
            background: 'linear-gradient(90deg, #f7971e, #ffd200)',
            borderRadius: 3,
            transition: 'none',
          }}
        />
      </div>

      {/* ===== SCENE INDICATOR ===== */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          right: 30,
          color: 'rgba(255,255,255,0.5)',
          fontSize: 12,
          zIndex: 100,
          fontFamily: 'sans-serif',
        }}
      >
        {scene1 && '✨ Intro'}
        {scene2 && '🍎 Apple'}
        {scene3 && '💃 Dance'}
        {scene4 && '🐜 Friends'}
        {scene5 && '🎊 Celebration'}
      </div>
    </div>
  );
};