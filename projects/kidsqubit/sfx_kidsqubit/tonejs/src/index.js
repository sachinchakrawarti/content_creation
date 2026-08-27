// src/index.js
import soundManager from './SoundManager.js';

console.log('🎵 Animal Sound Effects System');
console.log('📦 Loaded successfully!');

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Create UI
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = `
      <div style="
        max-width: 800px;
        margin: 50px auto;
        padding: 40px;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 20px;
        color: white;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      ">
        <h1 style="font-size: 48px; margin-bottom: 20px;">🎵 Animal Sound Effects</h1>
        <p style="font-size: 18px; opacity: 0.9; margin-bottom: 30px;">
          Click any animal to hear its sound!
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px;">
          <button data-animal="lion" style="padding: 20px; font-size: 24px; background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.3); border-radius: 15px; color: white; cursor: pointer;">
            🦁 Lion
          </button>
          <button data-animal="elephant" style="padding: 20px; font-size: 24px; background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.3); border-radius: 15px; color: white; cursor: pointer;">
            🐘 Elephant
          </button>
          <button data-animal="monkey" style="padding: 20px; font-size: 24px; background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.3); border-radius: 15px; color: white; cursor: pointer;">
            🐒 Monkey
          </button>
          <button data-animal="giraffe" style="padding: 20px; font-size: 24px; background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.3); border-radius: 15px; color: white; cursor: pointer;">
            🦒 Giraffe
          </button>
          <button data-animal="panda" style="padding: 20px; font-size: 24px; background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.3); border-radius: 15px; color: white; cursor: pointer;">
            🐼 Panda
          </button>
          <button data-animal="dolphin" style="padding: 20px; font-size: 24px; background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.3); border-radius: 15px; color: white; cursor: pointer;">
            🐬 Dolphin
          </button>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">
          <button id="celebrateBtn" style="padding: 15px 30px; font-size: 18px; background: #4CAF50; border: none; border-radius: 10px; color: white; cursor: pointer;">
            🎉 Celebrate
          </button>
          <button id="correctBtn" style="padding: 15px 30px; font-size: 18px; background: #2196F3; border: none; border-radius: 10px; color: white; cursor: pointer;">
            ✅ Correct
          </button>
          <button id="wrongBtn" style="padding: 15px 30px; font-size: 18px; background: #f44336; border: none; border-radius: 10px; color: white; cursor: pointer;">
            ❌ Wrong
          </button>
          <button id="musicBtn" style="padding: 15px 30px; font-size: 18px; background: #FF9800; border: none; border-radius: 10px; color: white; cursor: pointer;">
            🎵 Music
          </button>
          <button id="toggleSoundBtn" style="padding: 15px 30px; font-size: 18px; background: #9C27B0; border: none; border-radius: 10px; color: white; cursor: pointer;">
            🔊 Toggle Sound
          </button>
        </div>
        
        <div style="margin-top: 20px;">
          <label style="font-size: 16px; opacity: 0.9;">
            Volume: 
            <input type="range" id="volumeSlider" min="0" max="1" step="0.1" value="0.5" style="width: 200px; vertical-align: middle;">
            <span id="volumeValue">50%</span>
          </label>
        </div>
        
        <div style="margin-top: 20px; font-size: 14px; opacity: 0.7;">
          <p>Click any animal button to hear the sound!</p>
        </div>
      </div>
    `;

    // Initialize sound manager
    soundManager.init();

    // Add event listeners
    document.querySelectorAll('[data-animal]').forEach(button => {
      button.addEventListener('click', async () => {
        const animalId = button.dataset.animal;
        await soundManager.playAnimal(animalId);
      });
      
      // Add hover animation
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s';
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
    });

    document.getElementById('celebrateBtn').addEventListener('click', () => {
      soundManager.celebrate();
    });

    document.getElementById('correctBtn').addEventListener('click', () => {
      soundManager.correct();
    });

    document.getElementById('wrongBtn').addEventListener('click', () => {
      soundManager.wrong();
    });

    let musicPlaying = false;
    document.getElementById('musicBtn').addEventListener('click', async () => {
      if (musicPlaying) {
        soundManager.stopBackgroundMusic();
        musicPlaying = false;
        document.getElementById('musicBtn').textContent = '🎵 Music';
      } else {
        await soundManager.startBackgroundMusic();
        musicPlaying = true;
        document.getElementById('musicBtn').textContent = '⏹️ Stop Music';
      }
    });

    let soundOn = true;
    document.getElementById('toggleSoundBtn').addEventListener('click', () => {
      soundOn = soundManager.toggleSound();
      document.getElementById('toggleSoundBtn').textContent = soundOn ? '🔊 Sound ON' : '🔇 Sound OFF';
    });

    document.getElementById('volumeSlider').addEventListener('input', (e) => {
      const value = parseFloat(e.target.value);
      soundManager.setVolume(value);
      document.getElementById('volumeValue').textContent = Math.round(value * 100) + '%';
    });

    // Auto-play a demo sound on first click anywhere
    document.addEventListener('click', () => {
      if (!soundManager.isInitialized) {
        soundManager.init();
      }
    }, { once: true });

    console.log('🎵 UI loaded successfully!');
  }
});

// Export for use in other files
export { soundManager };
export * from './animalSounds.js';