// src/components/CommonDisplay.tsx
import React from "react";
import { MediaAsset } from "./types";
import { PhotoGrid } from "./PhotoGrid";

const dummyAssets: MediaAsset[] = [
  {
    width: 384,
    height: 216,
    mediaType: "image",
    url: "https://via.placeholder.com/192x108",
  },
  {
    width: 256,
    height: 144,
    mediaType: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    width: 0,
    height: 0,
    mediaType: "audio",
    url: "https://www.w3schools.com/html/horse.mp3",
  },
  {
    width: 0,
    height: 0,
    mediaType: "document",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

export const CommonDisplay: React.FC = () => {
  return (
    <div className="p-4 grow overflow-y-scroll bg-white">
      <PhotoGrid
        assets={[
          ...dummyAssets,
          ...dummyAssets,
          ...dummyAssets,
          ...dummyAssets,
        ]}
      />
    </div>
  );
};
