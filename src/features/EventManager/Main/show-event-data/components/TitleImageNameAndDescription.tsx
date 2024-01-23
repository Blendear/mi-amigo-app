/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useContext } from "react";
import { EventFormSegmentProps } from "../types";
import { placeholderImagePath } from "../data/placeholderImagePath";
import { generateImagePath } from "../utils/generateImagePath";
import ImageWithWrapper from "@/components/ImageWithWrapper";
import EventDisplayContext from "../context/EventDisplayContext";
import { CiImageOn } from "react-icons/ci";
import { MdGif } from "react-icons/md";
import { contentWithBorder } from "@/styles/emotion-css-experiment/abstracts/universal-styles";

const imageAndInputCss = css({});

const imageCss = css({});

const nameCss = css([{}, contentWithBorder]);

const descriptionCss = css([{}, contentWithBorder]);

const TitleImageNameAndDescription = () => {
  const { formDataRef, handleDataChange } = useContext(EventDisplayContext);

  const [imagePath, setImagePath] = useState<string>(placeholderImagePath);

  const [GIFPath, setGIFPath] = useState<string>(placeholderImagePath);

  return (
    <section css={imageAndInputCss}>
      <div css={imageCss}>
        <ImageWithWrapper src={imagePath} width="100%" />
        <ImageWithWrapper src={GIFPath} width="100%" />
        <div>
          <button>
            <CiImageOn />
          </button>
          <input
            aria-label="Image URL Path"
            type="text"
            // formDataRef is a useRef object, so it wont rerender
            // aka it wont show the new image right after changing the url
            placeholder={imagePath}
            onChange={(e) => {
              handleDataChange(formDataRef, "imagePath", e.target.value),
                setImagePath(generateImagePath(e.target.value));
            }}
          />
          <input
            aria-label="GIF URL Path"
            type="text"
            placeholder={GIFPath}
            onChange={(e) => {
              handleDataChange(formDataRef, "GIFPath", e.target.value),
                setGIFPath(generateImagePath(e.target.value));
            }}
          />
          <button>
            <MdGif />
          </button>
        </div>
      </div>
      <input
        css={nameCss}
        aria-label="Name"
        type="text"
        placeholder={formDataRef.current.name}
        onChange={(e) => handleDataChange(formDataRef, "name", e.target.value)}
      />
      <textarea
        css={descriptionCss}
        aria-label="Description"
        placeholder={formDataRef.current.description}
        onChange={(e) =>
          handleDataChange(formDataRef, "description", e.target.value)
        }
      />
    </section>
  );
};

export default TitleImageNameAndDescription;
