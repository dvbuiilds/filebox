import React from "react";
import { MediaAsset } from "../types";
import { FaFilePdf, FaFileWord, FaMusic } from "react-icons/fa";

interface PhotoProps {
  asset: MediaAsset;
}

export const Photo: React.FC<PhotoProps> = ({ asset }) => {
  const { mediaType, url, width, height } = asset;

  const renderMedia = () => {
    switch (mediaType) {
      case "image":
        return (
          <img
            src={url}
            alt="Media"
            style={{ width: "100%", height: "auto" }}
          />
        );
      case "video":
        return (
          <video
            src={url}
            controls
            style={
              width > height
                ? { width: `${width}px`, height: "auto" }
                : { width: "auto", height: `${height}px` }
            }
          />
        );
      case "audio":
        return <FaMusic size="3em" />;
      case "document":
        if (url.endsWith(".pdf")) {
          return <FaFilePdf size="3em" />;
        } else if (url.endsWith(".docx")) {
          return <FaFileWord size="3em" />;
        }
        break;
      default:
        return null;
    }
  };

  return (
    <div className="p-2 flex-grow flex-shrink-0 bg-gray-100 border rounded-md cursor-pointer flex justify-center items-center">
      {renderMedia()}
    </div>
  );
};
