// src/remotion/Root.jsx

import { Composition } from "remotion";
import React from "react";

// Import your compositions
import MesopotamiaTextClips from "./P1_The_Ancient_World_Before_Rome/MESOPOTAMIAtextclips.jsx";
// Import other compositions as needed
// import { YourOtherComposition } from './YourOtherComposition';

export const RemotionRoot = () => {
  return (
    <>
      {/* Mesopotamia Text Clips Composition */}
      <Composition
        id="MesopotamiaTextClips"
        component={MesopotamiaTextClips}
        durationInFrames={500} // Adjust based on your clips
        fps={30}
        width={1920}
        height={1080}
        defaultProps={
          {
            // Optional: Override default props if needed
            // clips: [...]
          }
        }
      />

      {/* Add more compositions here as needed */}
      {/* 
      <Composition
        id="AnotherComposition"
        component={AnotherComponent}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      */}
    </>
  );
};

export default RemotionRoot;
