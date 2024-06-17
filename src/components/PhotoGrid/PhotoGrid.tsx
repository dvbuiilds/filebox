import React from "react";
import { MediaAsset } from "../types";
import { Photo } from "./Photo";

interface PhotoGridProps {
  assets: MediaAsset[];
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ assets }) => {
  return (
    <div className="flex flex-row items-center flex-wrap">
      {assets.map((asset, index) => (
        <Photo key={index} asset={asset} />
      ))}
    </div>
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {assets.map((asset, index) => (
        <Photo key={index} asset={asset} />
      ))}
    </div>
  );
};
