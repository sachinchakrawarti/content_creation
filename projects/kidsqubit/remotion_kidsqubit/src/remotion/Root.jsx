// src/remotion/Root.jsx
import { Composition } from "remotion";
import { AShort } from "./alphabet_dancing_actions/a_short/a_short";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="AShort"
        component={AShort}
        durationInFrames={1800} // 60 seconds @ 30fps (1 minute)
        fps={30}
        width={1080}
        height={1920} // 9:16 for Shorts
        defaultProps={{}}
      />
    </>
  );
};
