import Image from "next/image";
import { ImageWithWrapperProps } from "..";

const ImageWithWrapper = ({
  width,
  height,
  aspectRatio,
  src,
  alt,
}: ImageWithWrapperProps) => {
  return (
    <div
      style={
        height
          ? {
              position: "relative",
              width: `${width || "4rem"}`,
              height: `${height || "4rem"}`,
            }
          : {
              position: "relative",
              width: `${width || "4rem"}`,
              aspectRatio: `${aspectRatio || "1/1"}`,
            }
      }
    >
      <Image
        src={src}
        alt={alt || "An image based on the given URL image path"}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default ImageWithWrapper;
