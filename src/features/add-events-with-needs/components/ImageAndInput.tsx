import Image from "next/image";
import styles from "src/styles/sass/styles-all.module.scss";
import { useState } from "react";
import {
  ImageAndInputProps,
  placeholderImagePath,
  generateImagePath,
} from "..";

const ImageAndInput = ({ currentValue, onChange }: ImageAndInputProps) => {
  const [imagePath, setImagePath] = useState<string>(placeholderImagePath);

  return (
    <div className={styles["event-manager__form__img-n-input"]}>
      <div>
        <Image
          src={imagePath}
          alt={"An image based on the given url image path"}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <label>
        ImagePath
        <input
          type="text"
          placeholder={currentValue}
          onChange={(e) => {
            onChange("imagePath", e.target.value),
              setImagePath(generateImagePath(e.target.value));
          }}
        />
      </label>
    </div>
  );
};

export default ImageAndInput;
