import { Still } from "remotion";
import { Composition, Still } from "remotion";
import { YTChannelLogo } from "./images/YTChannelLogo";
import { YTChannelBanner } from "./images/YTChannelBanner";
import { YTThumbnail } from "./images/YTThumbnail";
import { LossAversion1Min } from "./videos/loss-aversion-1min/LossAversion1Min";
import { VisualHook } from "./videos/loss-aversion-1min/VisualHook";
import { WorldClassVideo } from "./videos/world-class-video/WorldClassVideo";

export const YouTubeRoot = () => {
  return (
    <>
      <Still
        id="YTChannelLogo"
        component={YTChannelLogo}
        width={800}
        height={800}
      />
      <Still
        id="YTChannelBanner"
        component={YTChannelBanner}
        width={2560}
        height={1440}
      />
      <Still
        id="YTThumbnail"
        component={YTThumbnail}
        width={1280}
        height={720}
      />
      <Composition
        id="LossAversion1Min"
        component={LossAversion1Min}
        durationInFrames={1800}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition id="VisualHook" component={VisualHook} durationInFrames={450} fps={30} width={1280} height={720} />
      <Composition id="WorldClassVideo" component={WorldClassVideo} durationInFrames={1800} fps={30} width={1920} height={1080} />
    </>
  );
};
