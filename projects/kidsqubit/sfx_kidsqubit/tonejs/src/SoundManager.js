// src/SoundManager.js
import * as Tone from 'tone';
import {
  playAnimalSound,
  playCelebration,
  playCorrectSound,
  playWrongSound,
  playBackgroundMusic,
  playHappySound,
  animalSounds
} from './animalSounds.js';

class SoundManager {
  constructor() {
    this.isInitialized = false;
    this.backgroundMusicStop = null;
    this.soundEnabled = true;
    this.volume = 0.5;
  }

  // Initialize audio context (must be called after user interaction)
  async init() {
    if (this.isInitialized) return;
    
    try {
      await Tone.start();
      console.log('🎵 Audio context started successfully!');
      this.isInitialized = true;
      
      // Set global volume
      const gain = new Tone.Gain(this.volume).toDestination();
      Tone.getDestination().volume.value = this.volume * 20 - 20; // Convert 0-1 to -20 to 0
      
      return true;
    } catch (error) {
      console.warn('⚠️ Failed to start audio:', error);
      return false;
    }
  }

  // Play animal sound
  async playAnimal(animalId) {
    if (!this.soundEnabled) return;
    await this.init();
    await playAnimalSound(animalId);
  }

  // Play celebration
  async celebrate() {
    if (!this.soundEnabled) return;
    await this.init();
    await playCelebration();
  }

  // Play correct sound
  async correct() {
    if (!this.soundEnabled) return;
    await this.init();
    await playCorrectSound();
  }

  // Play wrong sound
  async wrong() {
    if (!this.soundEnabled) return;
    await this.init();
    await playWrongSound();
  }

  // Play happy sound
  async happy() {
    if (!this.soundEnabled) return;
    await this.init();
    await playHappySound();
  }

  // Start background music
  async startBackgroundMusic() {
    if (!this.soundEnabled) return;
    await this.init();
    this.backgroundMusicStop = await playBackgroundMusic();
  }

  // Stop background music
  stopBackgroundMusic() {
    if (this.backgroundMusicStop) {
      this.backgroundMusicStop();
      this.backgroundMusicStop = null;
    }
  }

  // Toggle sound on/off
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if (!this.soundEnabled) {
      this.stopBackgroundMusic();
    }
    return this.soundEnabled;
  }

  // Set volume (0 to 1)
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    Tone.getDestination().volume.value = this.volume * 20 - 20;
  }

  // Test all sounds
  async testAllSounds() {
    await this.init();
    
    console.log('🔊 Testing all sounds...');
    
    // Test each animal sound
    for (const [animalId] of Object.entries(animalSounds)) {
      await this.playAnimal(animalId);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // Test other sounds
    await this.correct();
    await new Promise(resolve => setTimeout(resolve, 300));
    await this.wrong();
    await new Promise(resolve => setTimeout(resolve, 300));
    await this.celebrate();
    await new Promise(resolve => setTimeout(resolve, 300));
    await this.happy();
  }
}

// Create and export singleton
export const soundManager = new SoundManager();

// Export individual functions for convenience
export default soundManager;