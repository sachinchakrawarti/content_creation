// find_animal/sounds/animalSounds.js
import * as Tone from 'tone';

// Animal sound configurations
export const animalSoundConfigs = {
  lion: { 
    frequency: 110, 
    duration: 0.8, 
    type: 'square', 
    volume: -10,
    emoji: '🦁',
    name: 'Lion'
  },
  elephant: { 
    frequency: 80, 
    duration: 1.2, 
    type: 'sawtooth', 
    volume: -8,
    emoji: '🐘',
    name: 'Elephant'
  },
  monkey: { 
    frequency: 600, 
    duration: 0.3, 
    type: 'sine', 
    volume: -5,
    emoji: '🐒',
    name: 'Monkey'
  },
  giraffe: { 
    frequency: 200, 
    duration: 0.6, 
    type: 'triangle', 
    volume: -7,
    emoji: '🦒',
    name: 'Giraffe'
  },
  panda: { 
    frequency: 300, 
    duration: 0.5, 
    type: 'sine', 
    volume: -6,
    emoji: '🐼',
    name: 'Panda'
  },
  dolphin: { 
    frequency: 800, 
    duration: 0.4, 
    type: 'sine', 
    volume: -4,
    emoji: '🐬',
    name: 'Dolphin'
  },
  fox: { 
    frequency: 450, 
    duration: 0.3, 
    type: 'square', 
    volume: -5,
    emoji: '🦊',
    name: 'Fox'
  },
  rabbit: { 
    frequency: 500, 
    duration: 0.2, 
    type: 'sine', 
    volume: -3,
    emoji: '🐰',
    name: 'Rabbit'
  }
};

// Sound Manager class for Remotion
export class AnimalSoundManager {
  constructor() {
    this.isInitialized = false;
    this.soundEnabled = true;
    this.volume = 0.5;
    this.synth = null;
    this.gain = null;
  }

  // Initialize audio context
  async init() {
    if (this.isInitialized) return true;
    
    try {
      await Tone.start();
      
      // Create main synth
      this.synth = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: {
          attack: 0.01,
          decay: 0.1,
          sustain: 0.3,
          release: 0.1
        }
      });
      
      // Create gain for volume control
      this.gain = new Tone.Gain(this.volume).toDestination();
      this.synth.connect(this.gain);
      
      this.isInitialized = true;
      console.log('🎵 Audio initialized for Remotion');
      return true;
    } catch (error) {
      console.warn('⚠️ Audio init failed:', error);
      return false;
    }
  }

  // Play animal sound
  async playAnimalSound(animalId) {
    if (!this.soundEnabled) return;
    if (!this.isInitialized) {
      const ready = await this.init();
      if (!ready) return;
    }

    const config = animalSoundConfigs[animalId];
    if (!config) {
      console.warn(`No sound for: ${animalId}`);
      return;
    }

    try {
      const now = Tone.now();
      
      // Change oscillator type for different animals
      this.synth.setNote(config.frequency, now);
      this.synth.oscillator.type = config.type || 'sine';
      
      // Play the note
      this.synth.triggerAttackRelease(
        Tone.Frequency(config.frequency, 'hz'),
        config.duration,
        now
      );
      
      // Add pitch bend for some animals
      if (animalId === 'elephant') {
        this.synth.frequency.rampTo(config.frequency * 1.5, 0.3);
      } else if (animalId === 'lion') {
        this.synth.frequency.rampTo(config.frequency * 0.5, 0.2);
        this.synth.frequency.rampTo(config.frequency, 0.3);
      }
      
      console.log(`🔊 Playing: ${config.name} (${animalId})`);
      
    } catch (error) {
      console.warn('Error playing sound:', error);
    }
  }

  // Play celebration sound
  async playCelebration() {
    if (!this.soundEnabled) return;
    if (!this.isInitialized) await this.init();

    try {
      const notes = ['C4', 'E4', 'G4', 'C5', 'E5', 'G5', 'C6'];
      notes.forEach((note, i) => {
        this.synth.triggerAttackRelease(note, '8n', Tone.now() + i * 0.1);
      });
      console.log('🎉 Celebration!');
    } catch (error) {
      console.warn('Error:', error);
    }
  }

  // Play correct sound
  async playCorrect() {
    if (!this.soundEnabled) return;
    if (!this.isInitialized) await this.init();

    try {
      const now = Tone.now();
      this.synth.triggerAttackRelease('C5', '8n', now);
      this.synth.triggerAttackRelease('E5', '8n', now + 0.15);
      this.synth.triggerAttackRelease('G5', '8n', now + 0.3);
      console.log('✅ Correct!');
    } catch (error) {
      console.warn('Error:', error);
    }
  }

  // Play wrong sound
  async playWrong() {
    if (!this.soundEnabled) return;
    if (!this.isInitialized) await this.init();

    try {
      const now = Tone.now();
      this.synth.oscillator.type = 'sawtooth';
      this.synth.triggerAttackRelease('C4', '8n', now);
      this.synth.triggerAttackRelease('B3', '8n', now + 0.15);
      this.synth.triggerAttackRelease('A3', '8n', now + 0.3);
      this.synth.oscillator.type = 'sine';
      console.log('❌ Wrong');
    } catch (error) {
      console.warn('Error:', error);
    }
  }

  // Play level up
  async playLevelUp() {
    if (!this.soundEnabled) return;
    if (!this.isInitialized) await this.init();

    try {
      const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
      notes.forEach((note, i) => {
        this.synth.triggerAttackRelease(note, '16n', Tone.now() + i * 0.08);
      });
      console.log('⭐ Level Up!');
    } catch (error) {
      console.warn('Error:', error);
    }
  }

  // Toggle sound
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    console.log(`🔊 Sound ${this.soundEnabled ? 'ON' : 'OFF'}`);
    return this.soundEnabled;
  }

  // Set volume
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.gain) {
      this.gain.gain.value = this.volume;
    }
  }

  // Clean up
  dispose() {
    if (this.synth) {
      this.synth.dispose();
      this.synth = null;
    }
    if (this.gain) {
      this.gain.dispose();
      this.gain = null;
    }
    this.isInitialized = false;
  }
}

// Create singleton instance
export const soundManager = new AnimalSoundManager();