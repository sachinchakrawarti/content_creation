import { Composition } from "remotion";
import { MoneyQubitLogo } from "./MoneyQubitLogo";
// Import your other components here
// import { YourOtherComponent } from "./YourOtherComponent";

export const RemotionRoot = () => {
  return (
    <>
      {/* ===== MONEY QUBIT LOGO (Animated) ===== */}
      <Composition
        id="MoneyQubitLogo"
        component={MoneyQubitLogo}
        durationInFrames={150}  // 5 seconds at 30fps
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          primaryColor: "#00D4FF",
          secondaryColor: "#00FF87",
          bgColor: "#0A0A1A",
          textColor: "#FFFFFF",
          size: 500,
          showText: true,
          animated: true,
        }}
      />

      {/* ===== MONEY QUBIT LOGO (Static - for thumbnails) ===== */}
      <Composition
        id="MoneyQubitLogoStatic"
        component={MoneyQubitLogo}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          primaryColor: "#00D4FF",
          secondaryColor: "#00FF87",
          bgColor: "#0A0A1A",
          textColor: "#FFFFFF",
          size: 600,
          showText: true,
          animated: false,
        }}
      />

      {/* ===== MONEY QUBIT LOGO (Transparent - for overlays) ===== */}
      <Composition
        id="MoneyQubitLogoTransparent"
        component={MoneyQubitLogo}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          primaryColor: "#00D4FF",
          secondaryColor: "#00FF87",
          bgColor: "transparent",
          textColor: "#FFFFFF",
          size: 400,
          showText: true,
          animated: true,
        }}
      />

      {/* ===== MONEY QUBIT LOGO (YouTube Thumbnail Version) ===== */}
      <Composition
        id="MoneyQubitLogoThumbnail"
        component={MoneyQubitLogo}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          primaryColor: "#FF6B35",    // High contrast orange
          secondaryColor: "#FFD700",  // Gold
          bgColor: "#0A0A1A",
          textColor: "#FFFFFF",
          size: 700,
          showText: true,
          animated: false,
        }}
      />

      {/* Add your other compositions here */}
      {/* 
      <Composition
        id="YourOtherVideo"
        component={YourOtherComponent}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      */}
    </>
  );
};