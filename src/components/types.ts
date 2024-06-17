export interface MediaAsset {
  width: number;
  height: number;
  mediaType: "image" | "video" | "audio" | "document";
  url: string;
}
