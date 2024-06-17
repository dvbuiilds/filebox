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
          <video src={url} controls style={{ width: "100%", height: "auto" }} />
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

  return <div className="p-2 border rounded-md">{renderMedia()}</div>;
};
