import { placeholderImagePath } from "..";

export const generateImagePath = (imagePath: string) => {
  return imagePath.startsWith("http://") || imagePath.startsWith("https://")
    ? imagePath
    : placeholderImagePath;
};
