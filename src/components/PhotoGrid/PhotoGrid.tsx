import React from "react";
import { MediaAsset } from "../types";
import { Photo } from "./Photo";

interface PhotoGridProps {
  assets: MediaAsset[];
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ assets }) => {
  return (
    <div className="flex flex-row flex-wrap gap-1">
      {assets.map((asset, index) => (
        <Photo key={index} asset={asset} />
      ))}
    </div>
  );
};
