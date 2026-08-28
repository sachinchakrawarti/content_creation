// src/remotion/Root.jsx
import { Composition } from "remotion";
import { FindAnimalGame } from "./find_animal/FindAnimalGame";

export const RemotionRoot = () => {
  return (
    <>
      {/* YouTube Shorts Version - Vertical 9:16 */}
      <Composition
        id="FindAnimalGameShorts"
        component={FindAnimalGame}
        durationInFrames={180} // 6 seconds (30fps * 6)
        fps={30}
        width={1080} // 1080x1920 for YouTube Shorts
        height={1920}
        defaultProps={{
          titleText: "🎯 Find the Animal!",
          durationInFrames: 180,
          enableSound: true,
          isShorts: true,
        }}
      />

      {/* Regular Landscape Version - 16:9 */}
      <Composition
        id="FindAnimalGame"
        component={FindAnimalGame}
        durationInFrames={300} // 10 seconds
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          titleText: "🎯 Find the Animal!",
          durationInFrames: 300,
          enableSound: true,
          isShorts: false,
        }}
      />
    </>
  );
};

export default RemotionRoot;
