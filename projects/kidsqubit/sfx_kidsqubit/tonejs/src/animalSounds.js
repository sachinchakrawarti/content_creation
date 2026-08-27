// src/animalSounds.js
import * as Tone from 'tone';

// Animal sound configurations
export const animalSounds = {
  lion: {
    frequency: 110,
    duration: 0.8,
    type: 'square',
    note: 'C3',
    volume: -10
  },
  elephant: {
    frequency: 80,
    duration: 1.2,
    type: 'sawtooth',
    note: 'E2',
    volume: -8
  },
  monkey: {
    frequency: 600,
    duration: 0.3,
    type: 'sine',
    note: 'G4',
    volume: -5
  },
  giraffe: {
    frequency: 200,
    duration: 0.6,
    type: 'triangle',
    note: 'A3',
    volume: -7
  },
  panda: {
    frequency: 300,
    duration: 0.5,
    type: 'sine',
    note: 'D4',
    volume: -6
  },
  dolphin: {
    frequency: 800,
    duration: 0.4,
    type: 'sine',
    note: 'E5',
    volume: -4
  },
  fox: {
    frequency: 450,
    duration: 0.3,
    type: 'square',
    note: 'F#4',
    volume: -5
  },
  rabbit: {
    frequency: 500,
    duration: 0.2,
    type: 'sine',
    note: 'B4',
    volume: -3
  }
};

// Play animal sound
export const playAnimalSound = async (animalId) => {
  try {
    await Tone.start();
    
    const config = animalSounds[animalId];
    if (!config) {
      console.warn(`No sound configuration for: ${animalId}`);
      return;
    }
    
    // Create oscillator
    const osc = new Tone.Oscillator(config.frequency, config.type);
    
    // Create gain for volume control
    const gain = new Tone.Gain(config.volume || 0).toDestination();
    osc.connect(gain);
    
    // Create envelope
    const now = Tone.now();
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + config.duration);
    
    // Start and stop
    osc.start(now);
    osc.stop(now + config.duration);
    
    console.log(`Playing sound for: ${animalId}`);
    
  } catch (error) {
    console.warn('Audio not available:', error);
  }
};

// Play celebration sound (ascending scale)
export const playCelebration = async () => {
  try {
    await Tone.start();
    
    const notes = ['C4', 'D4', 'E4', 'G4', 'C5', 'E5', 'G5', 'C6'];
    const synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.3,
        release: 0.1
      }
    }).toDestination();
    
    notes.forEach((note, i) => {
      synth.triggerAttackRelease(note, '8n', Tone.now() + i * 0.12);
    });
    
  } catch (error) {
    console.warn('Audio not available:', error);
  }
};

// Play "correct" sound (happy ding)
export const playCorrectSound = async () => {
  try {
    await Tone.start();
    
    const synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.3,
        release: 0.1
      }
    }).toDestination();
    
    const now = Tone.now();
    synth.triggerAttackRelease('C5', '8n', now);
    synth.triggerAttackRelease('E5', '8n', now + 0.15);
    synth.triggerAttackRelease('G5', '8n', now + 0.3);
    
  } catch (error) {
    console.warn('Audio not available:', error);
  }
};

// Play "wrong" sound (sad buzzer)
export const playWrongSound = async () => {
  try {
    await Tone.start();
    
    const synth = new Tone.Synth({
      oscillator: { type: 'sawtooth' },
      envelope: {
        attack: 0.01,
        decay: 0.2,
        sustain: 0.1,
        release: 0.2
      }
    }).toDestination();
    
    const now = Tone.now();
    synth.triggerAttackRelease('C4', '8n', now);
    synth.triggerAttackRelease('B3', '8n', now + 0.15);
    synth.triggerAttackRelease('A3', '8n', now + 0.3);
    
  } catch (error) {
    console.warn('Audio not available:', error);
  }
};

// Play background music (simple loop)
export const playBackgroundMusic = async () => {
  try {
    await Tone.start();
    
    // Create a simple synth
    const synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.1,
        decay: 0.2,
        sustain: 0.3,
        release: 0.2
      }
    }).toDestination();
    
    // Simple melody
    const melody = ['C4', 'E4', 'G4', 'A4', 'B4', 'A4', 'G4', 'E4'];
    let index = 0;
    
    const loop = new Tone.Loop((time) => {
      const note = melody[index % melody.length];
      synth.triggerAttackRelease(note, '8n', time);
      index++;
    }, '4n');
    
    loop.start(0);
    
    // Return function to stop music
    return () => {
      loop.stop();
    };
    
  } catch (error) {
    console.warn('Audio not available:', error);
  }
};

// Play random happy sound
export const playHappySound = async () => {
  try {
    await Tone.start();
    
    const synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.2,
        release: 0.1
      }
    }).toDestination();
    
    const notes = ['C4', 'E4', 'G4', 'C5', 'E5'];
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    synth.triggerAttackRelease(randomNote, '4n');
    
  } catch (error) {
    console.warn('Audio not available:', error);
  }
};