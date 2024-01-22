import styles from "@/styles/sass/styles-all.module.scss";
import { useState } from "react";
import { EventFormSegmentProps } from "../types";
import { placeholderImagePath } from "../data/placeholderImagePath";
import { generateImagePath } from "../utils/generateImagePath";
import ImageWithWrapper from "@/components/ImageWithWrapper";

const TitleImageNameAndDescription = ({
  formDataRef,
  onChange,
}: EventFormSegmentProps) => {
  const [imagePath, setImagePath] = useState<string>(placeholderImagePath);
  const [GIFPath, setGIFPath] = useState<string>(placeholderImagePath);

  return (
    <section>
      <div className={styles["event-manager__form__img-n-input"]}>
        <ImageWithWrapper src={imagePath} width="100%" />
        <ImageWithWrapper src={GIFPath} width="100%" />
        <label>
          ImagePath
          <input
            type="text"
            placeholder={formDataRef.current.imagePath}
            onChange={(e) => {
              onChange(formDataRef, "imagePath", e.target.value),
                setImagePath(generateImagePath(e.target.value));
            }}
          />
        </label>
        <label>
          GIFPath
          <input
            type="text"
            placeholder={formDataRef.current.GIFPath}
            onChange={(e) => {
              onChange(formDataRef, "GIFPath", e.target.value),
                setGIFPath(generateImagePath(e.target.value));
            }}
          />
        </label>
      </div>
      <div className={styles["event-manager__form__name-and-description"]}>
        <label>
          Name
          <input
            type="text"
            placeholder={formDataRef.current.name}
            onChange={(e) => onChange(formDataRef, "name", e.target.value)}
          />
        </label>

        <label>
          Description
          <textarea
            placeholder={formDataRef.current.description}
            onChange={(e) =>
              onChange(formDataRef, "description", e.target.value)
            }
          />
        </label>
      </div>
    </section>
  );
};

export default TitleImageNameAndDescription;
