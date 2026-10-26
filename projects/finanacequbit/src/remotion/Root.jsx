import { YouTubeRoot } from "./platforms/youtube/Root";
import "./index.css";

export const RemotionRoot = () => {
  return (
    <>
      {/* Global Styles */}
      <style>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>

      {/* ==================== PLATFORM ROOTS ==================== */}
      <YouTubeRoot />

      {/* Future: */}
      {/* <InstagramRoot /> */}
      {/* <PinterestRoot /> */}
    </>
  );
};
