import Image from "next/image";
import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";
import { ImageAndInputProps } from "..";

const placeholderImagePath = `https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&auto=format&fit=crop&w=2250&q=80`;

const ImageAndInput = ({ currentValue, onChange }: ImageAndInputProps) => {
  const [imagePath, setImagePath] = useState<string>(placeholderImagePath);

  const generateImagePath = (imagePath: string) => {
    return imagePath.startsWith("http://") || imagePath.startsWith("https://")
      ? imagePath
      : placeholderImagePath;
  };

  return (
    <>
      <div className={styles["event-manager__form__img-n-input"]}>
        <Image
          src={imagePath}
          alt={"An image based on the given url image path"}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <label>
        Name:
        <input
          type="text"
          placeholder={currentValue}
          onChange={(e) => {
            onChange("name", e.target.value),
              setImagePath(generateImagePath(e.target.value));
          }}
        />
      </label>
    </>
  );
};

export default ImageAndInput;
