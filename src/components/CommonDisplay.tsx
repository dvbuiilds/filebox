// src/components/CommonDisplay.tsx
import React from "react";
import { MediaAsset } from "./types";
import { PhotoGrid } from "./PhotoGrid";

const dummyAssets: MediaAsset[] = [
  {
    width: 1920,
    height: 1080,
    mediaType: "image",
    url: "https://via.placeholder.com/1920x1080",
  },
  {
    width: 1280,
    height: 720,
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Media Assets</h1>
      <PhotoGrid assets={dummyAssets} />
    </div>
  );
};
