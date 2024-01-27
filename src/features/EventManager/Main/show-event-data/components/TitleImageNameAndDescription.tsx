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
import { button } from "@/styles/emotion-css-experiment/abstracts/mixins";

const titleINADCss = {
  container: css({
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
  }),

  imageAndGif: css({}),

  name: css([{}, contentWithBorder]),

  description: css([{}, contentWithBorder]),
};

const TitleImageNameAndDescription = () => {
  const { formDataRef, handleDataChange, isShowing } =
    useContext(EventDisplayContext);

  // States for rerendering the image/gif after changing url string
  // "formDataRef" is a useRef object, so changing it wouldn't cause a rerender
  const [imagePath, setImagePath] = useState<string>(
    formDataRef.current.imagePath || placeholderImagePath
  );
  const [GIFPath, setGIFPath] = useState<string>(
    formDataRef.current.imagePath || placeholderImagePath
  );

  const [showGIF, setShowGIF] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <section css={titleINADCss.container}>
      <div css={titleINADCss.imageAndGif}>
        <ImageWithWrapper
          src={formDataRef.current.GIFPath ? GIFPath : imagePath}
          width="100%"
        />
        {2 > 1 && (
          // !isShowing.current
          <div>
            <button
              css={button(!showGIF)}
              onClick={() => {
                setShowGIF(false);
              }}
            >
              <CiImageOn />
            </button>
            <input
              css={css(showGIF ? { display: "none" } : {})}
              disabled={isShowing.current}
              aria-label="Image URL Path"
              type="text"
              placeholder={imagePath}
              onChange={(e) => {
                handleDataChange(formDataRef, "imagePath", e.target.value),
                  setImagePath(generateImagePath(e.target.value));
              }}
            />
            <input
              css={css(!showGIF ? { display: "none" } : {})}
              disabled={isShowing.current}
              aria-label="GIF URL Path"
              type="text"
              placeholder={GIFPath}
              onChange={(e) => {
                handleDataChange(formDataRef, "GIFPath", e.target.value),
                  setGIFPath(generateImagePath(e.target.value));
              }}
            />
            <button
              css={button(showGIF)}
              onClick={() => {
                setShowGIF(true);
              }}
            >
              <MdGif />
            </button>
          </div>
        )}
      </div>
      <input
        css={titleINADCss.name}
        disabled={isShowing.current}
        aria-label="Name"
        type="text"
        placeholder={formDataRef.current.name}
        onChange={(e) => handleDataChange(formDataRef, "name", e.target.value)}
      />
      {2 > 1 && (
        // showDescription || !isShowing.current
        <textarea
          css={titleINADCss.description}
          disabled={isShowing.current}
          aria-label="Description"
          placeholder={formDataRef.current.description}
          onChange={(e) =>
            handleDataChange(formDataRef, "description", e.target.value)
          }
        />
      )}
    </section>
  );
};

export default TitleImageNameAndDescription;
