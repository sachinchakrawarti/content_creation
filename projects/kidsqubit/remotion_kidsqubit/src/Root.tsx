// src/Root.tsx
import { Composition } from 'remotion';
import { FindAnimalGame } from './Composition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FindAnimalGame"
        component={FindAnimalGame}
        durationInFrames={300} // 10 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: 'Find the Animal! 🎯',
        }}
      />
    </>
  );
};